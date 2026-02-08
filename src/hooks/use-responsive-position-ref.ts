import { type RefObject, useEffect, useRef, useState } from "react";

interface PositionRef {
  current: { x: number; y: number };
}

interface UseResponsivePositionRefReturn {
  positionRef: PositionRef;
  isGyroscopeSupported: boolean;
  hasPermission: boolean;
  isMobile: boolean;
  requestGyroscopePermission: () => Promise<boolean>;
}

export const useResponsivePositionRef = (
  containerRef?: RefObject<HTMLElement | SVGElement>
): UseResponsivePositionRefReturn => {
  const positionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isGyroscopeSupported, setIsGyroscopeSupported] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const baseOrientationRef = useRef<{ beta: number; gamma: number } | null>(null);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = (): boolean => {
      const userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const screenSize = window.innerWidth < 768;
      const isMobileDevice = userAgent || screenSize;
      setIsMobile(isMobileDevice);
      return isMobileDevice;
    };

    // Check if DeviceOrientationEvent is supported
    const checkGyroscopeSupport = (): boolean => {
      if (typeof DeviceOrientationEvent !== 'undefined') {
        setIsGyroscopeSupported(true);
        return true;
      }
      return false;
    };

    // Request permission for iOS 13+ devices
    const requestPermission = async (): Promise<boolean> => {
      // Type assertion for iOS DeviceOrientationEvent
      const DeviceOrientationEventAny = DeviceOrientationEvent as any;
      
      if (typeof DeviceOrientationEventAny.requestPermission === 'function') {
        try {
          const permission = await DeviceOrientationEventAny.requestPermission();
          if (permission === 'granted') {
            setHasPermission(true);
            return true;
          }
        } catch (error) {
          console.warn('Failed to request device orientation permission:', error);
        }
        return false;
      } else {
        // For non-iOS devices, assume permission is granted
        setHasPermission(true);
        return true;
      }
    };

    const initializeGyroscope = async (): Promise<(() => void) | undefined> => {
      if (!checkGyroscopeSupport()) return;

      const hasAccess = await requestPermission();
      if (!hasAccess) return;

      let calibrationCount = 0;
      const maxCalibration = 10; // Take average of first 10 readings for baseline

      const handleOrientation = (event: DeviceOrientationEvent): void => {
        const { beta, gamma } = event; // beta: front-back tilt, gamma: left-right tilt
        
        if (beta === null || gamma === null) return;

        // Calibration phase - establish baseline orientation
        if (calibrationCount < maxCalibration) {
          if (!baseOrientationRef.current) {
            baseOrientationRef.current = { beta, gamma };
          } else {
            // Running average for more stable baseline
            baseOrientationRef.current.beta = 
              (baseOrientationRef.current.beta * calibrationCount + beta) / (calibrationCount + 1);
            baseOrientationRef.current.gamma = 
              (baseOrientationRef.current.gamma * calibrationCount + gamma) / (calibrationCount + 1);
          }
          calibrationCount++;
          return;
        }

        if (!baseOrientationRef.current) return;

        const relativeBeta = beta - baseOrientationRef.current.beta;
        const relativeGamma = gamma - baseOrientationRef.current.gamma;

        const sensitivityX = 15;
        const sensitivityY = 15;
        
        const clampedBeta = Math.max(-30, Math.min(30, relativeBeta));
        const clampedGamma = Math.max(-30, Math.min(30, relativeGamma));

        let x: number, y: number;

        if (containerRef && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          x = centerX + (clampedGamma * sensitivityX);
          y = centerY + (clampedBeta * sensitivityY);
        } else {
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          
          x = centerX + (clampedGamma * sensitivityX);
          y = centerY + (clampedBeta * sensitivityY);
        }

        positionRef.current = { x, y };
      };

      window.addEventListener('deviceorientation', handleOrientation);

      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
      };
    };

    const updatePosition = (x: number, y: number): void => {
      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;
        positionRef.current = { x: relativeX, y: relativeY };
      } else {
        positionRef.current = { x, y };
      }
    };

    const mobileDevice = checkMobile();
    let cleanup: (() => void) | undefined;

    if (mobileDevice) {
      initializeGyroscope().then((cleanupFn) => {
        cleanup = cleanupFn;
      });
      
      const handleTouchMove = (ev: TouchEvent): void => {
        if (!isGyroscopeSupported || !hasPermission) {
          const touch = ev.touches[0];
          if (touch) {
            updatePosition(touch.clientX, touch.clientY);
          }
        }
      };

      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      
      return () => {
        window.removeEventListener("touchmove", handleTouchMove);
        if (cleanup) cleanup();
      };
    } else {
      const handleMouseMove = (ev: MouseEvent): void => {
        updatePosition(ev.clientX, ev.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [containerRef, isGyroscopeSupported, hasPermission]);

  const requestGyroscopePermission = async (): Promise<boolean> => {
    const DeviceOrientationEventAny = DeviceOrientationEvent as any;
    
    if (typeof DeviceOrientationEventAny.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEventAny.requestPermission();
        if (permission === 'granted') {
          setHasPermission(true);
          return true;
        }
      } catch (error) {
        console.warn('Failed to request device orientation permission:', error);
      }
      return false;
    }
    return true;
  };

  return {
    positionRef,
    isGyroscopeSupported,
    hasPermission,
    isMobile,
    requestGyroscopePermission,
  };
};