import ScanerPicker from "components/ScanerPicker/ScanerPicker";
import React from "react";
import { ScanSettings } from "scandit-sdk";

function Scan({ getCodeDetected }) {
  // configuracion de deteccion del scaner
  const configScan = {
    enabledSymbologies: [
      "qr",
      "ean8",
      "ean13",
      "upca",
      "upce",
      "code128",
      "code39",
      "code93",
      "itf",
    ],
    codeDuplicateFilter: 1000,
  };
  // cuando se logre escaner de manera correcta pasara esot
  const runScaner = (scanResult) => {
    // console.log("resultados", scanResult.barcodes);
    const scaningDetected = scanResult.barcodes.reduce(
      (string, barcode) => barcode.data,
      ""
    );
    getCodeDetected(scaningDetected);
  };
  // cuando ocurra un erro en el escaner pasara esto
  const errorScaner = (error) => {
    console.error(error.message);
  };

  // objeto porp para el ScannerPicker
  const scanProps = {
    playSoundOnScan: true,
    vibrateOnScan: false,
    scanSettings: new ScanSettings(configScan),
    onScan: runScaner,
    onError: errorScaner,
  };
  return (
    <div className="w-[90%]">
      <ScanerPicker scanProps={scanProps} />
    </div>
  );
}

export default Scan;
