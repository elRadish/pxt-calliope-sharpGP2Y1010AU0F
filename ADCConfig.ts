namespace ADCConfig {
    /**
    * Read nRF51 ADC CONFIG REFSEL register
    */
    //% shim=ADCConfig::getREFSEL
    export function getREFSEL(): uint8 {
	return 0;
    }

    /**
    * Read Vcc
    */
    //% shim=ADCConfig::getVcc
    export function readVcc(): uint16 {
	return 3333;
    }
	
    /*
    * Clear nRF51 ADC CONFIG REFSEL register to use internal 1.2 V reference
    */
    //% shim=ADCConfig::clearREFSEL
    export function clearREFSEL(): void {
	return;
    }

    /*
    * Set nRF51 ADC CONFIG REFSEL register to use VDD reference with prescaling
    */
    //% shim=ADCConfig::setREFSEL
    export function setREFSEL(): void {
	return;
    }    
}
