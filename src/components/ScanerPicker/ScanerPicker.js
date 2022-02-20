import React, { useEffect, useRef, useState } from "react";
import {
  BarcodePicker as ScanditSDKBarcodePicker,
  configure,
} from "scandit-sdk";

// Configuracion con api key
const configScan = configure(
  "AYwRXAikKd9IIRgUU0e4UoUFFQIgCLBspTbDULhEFD0vNf/BEXZVy9wBUUbaThmdpTjQ3dIMX/AAQ1t0v2dwVpEyayEpYXQif3sBKop2mE+oZ/w1z2eUjH1qJrkDas6W2FcoWOxNyqesauI7zBj+hqsx35WAPjAOKikquOQDBQ2VMqswXVj8hCpNjTy/gMI6A9eeURdWJbf25aMwQ6GWZ7RZ1ab5kP5X7lOwDIhzm+SizCCtCtJ6kpPRhIREiibrglMQo+VhaGBKy/W/ClM4HLyM2fk2FnTF1NlBA1pfKXf0ki22uE8HP3XHRn7FzpAeiAz7hBIRwO8GixkbCOwGEcBAsTxD+WTTf1L8lsfiEhCo1T+pxPe1r6BmefTGcV39g4EMjeA4BCUtRAw8+rmbzAj+YqOrEb5i4XcavDpQ3kTug9kfpw8HBgV9e46sZjIsEkwE0j244q/CaLUQPR9aa3QUJleACLj0E+ik8ORGjgOKlGBX01CVKXYFnSzaO1l7B9JuScOn3ykQv/KxQnCdyfcvnqehnc+riDtq1Tus04m5s48+P0DWZ+XI5xkAd45zwMbPnG466rm0PYRD8xt+OtKuR5XOCd6ZOVkqtcyvvWbjfKfUL1VxdISDDaWs2qpBiLC0sF0aM8twKRFUipiiI6UupGwDLGge9InbamrAlKi89WTRi88m7zkJELd1TYLRvgdn9qzivzvPzqFrHQ0p+M2/NEgVtIVJ9rjXwWJe07DFf3dHDKpIC9gHu5oTbT+gZ2KoWN6ze/Ok3bQa6zqfp/aCexnOXZ/UZCaEf0vo4ZDhVw2qdFyQB4YaVG8CtmVIq8iVuvIb45mpZlE3n2aQRbDN",
  {
    engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
  }
);

function ScanerPicker({ scanProps }) {
  const {
    // visible,
    // playSoundOnScan,
    // vibrateOnScan,
    // scanningPaused,
    // guiStyle,
    // videoFit,
    // scanSettings,
    // enableCameraSwitcher,
    // enableTorchToggle = true,
    // enableTapToFocus,
    // enablePinchToZoom,
    // accessCamera,
    // camera,
    // cameraSettings,
    // targetScanningFPS,
    onScan,
    onError,
  } = scanProps;

  const [barCode, setBarCode] = useState(null);
  const ref = useRef();

  useEffect(() => {
    configScan.then(() => {
      ScanditSDKBarcodePicker.create(ref.current, scanProps).then(
        (barcodePicker) => {
          setBarCode(barcodePicker);
          if (onScan != null) {
            barcodePicker.on("scan", onScan);
          }
          if (onError != null) {
            barcodePicker.on("scanError", onError);
          }
        }
      );
    });
  }, []);

  return (
    <div className="w-full">
      <div ref={ref} />
    </div>
  );
}

export default ScanerPicker;
