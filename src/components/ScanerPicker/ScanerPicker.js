import React, { useEffect, useRef, useState } from "react";
import {
  BarcodePicker as ScanditSDKBarcodePicker,
  configure,
} from "scandit-sdk";
// new Key : ---------------------------
// Configuracion con api key
const configScan = configure(
  "AeeBT2OkQgLbIHvhNwj1bu49buFLCauP3QsLohd++zWoDeii33Rr5iIPrwodfRZ8pFkRLilZJeYjVq3SUEe4fnB4MaH2bH+gPXCdXQ9WHF2uZp7Qsn09BfFvwlNIUon6mnTtk+50cO8QU6O4+lFhOHVYQbRHKP8Qigo3Geh+mlQ/cuYS0DJdFX1PpHt/QGYPcyZsrIoLlzGTNcP+ng2O/PlFWAZeKKwq+HRyl2Z156adKoi5drfoh0Y8l3CRCQsmAktjjEfO+jxo5lHIdFZw5oLOUmL3FaAiRkuNOaDkbccL+a6RmDCh4MvYff+RwWdZ+GZALNmx0DiNzs5av3XZubwhMbGhD+hRt4r9W49nCOvUYf0XMDu1NiOhV7IAZe9CJexQLMd6t/wz2ENpZRXCWk7wOdXjGeICW31ShmXrKWBPjdn8C0/nyiYxYSo8u40QLIC/VhtgMr8FHSzzvAOPWbadX5oWdDUmbHpqDmFDkkvl2V7Qtqo/99ySWS12xKdLlW0//slZk8BFGOOPR7LOcwdErilrPsOkPGHqk9NYu5hJScR7y6hdNdJBUGGOs9AwDsREH8J5Ntz6t2hqP5nfpDjp668jfOFNEcUWWvVP5EeUqrfuzAKti045Z/KehgkEz7b0sfIKJhRo84GS89dHrNnJsKUc3urhy6R6Y07SUTSo0ZL016d8waNhf88xgk0Mflz66s5cOxgBhkfI/tk+czHC+6xnj5VAOGo9lF7tk/jI/u28lDSLsYdlPnwNDDpfnqCWkX5pN1+Eyvbi41pricWYmt4lxy5BbT161NnDksX6aNKx7Pb/85fw/mZjMBclkmvz+IYj13XsATyRrp7OSecrFURMqR13R1+U673HenIGnGjWtDKmZO9IviWD/aHX8QLaFVtXP5gXYvvuyaYxM6aZ0Q==",
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
