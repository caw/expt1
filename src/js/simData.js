// This contains simData
const normalSim = {
    bloods: {
        Na: 145,
        K: 4.5,
        Cl: 95,
        Ca: 2.0,
        PO4: 1.0,
        HCO3: 24,
        Urea: 5.0,
        Cr: 80,
        Glucose: 4.0,
        pH: 7.40,
        paO2: 95,
        paCO2: 40,
        saO2: 95,
        Hb: 140,
        WCC: 5.5,
        Platelet: 200,
    },

    ecg: {
        rhythm: 'normal_sinus_rhythm',
    },

    cxr: 'normal_cxr',

    map: 100,
    rap: 0,
    hr: 70,
    sys: 120,
    dia: 80,
    jvp: 0,

    heart_sounds: 'normal_heart_sounds',
    apex_beat: 'normal',

    breath_sounds: 'normal_breath_sounds',
    chest_expansion: 'symmetrical_normal_expansion',
    chest_percussion: 'normal_percussion',
    fiO2: 21,
    abdo_appearance: 'normal_abdo_inspection',
    abdo_palpation: 'normal_abdo_palpation',
    bowel_sounds: 'normal_bowel_sounds',
    shifting_dullness: 'absent',

    urine_output: 60,

    cyanosis: 'absent',
    icterus: 'absent',
    jaundice: 'absent',
    foetor: 'absent',
    flap: 'absent',
    pallor: 'absent',
    ankle_oedema: 'absent',
    sacral_oedema: 'absent',
    scrotal_oedema: 'absent',

    eye_response: 4,
    verbal_response: 5,
    motor_response: 6,
}

const postOp = {
    eye_response: 3,
    verbal_response: 4,
    motor_response: 5,

    map: 85,
    hr: 110,
    saO2: 91,

}
// later sources override earlier sources
let postOpConfusion = Object.assign({}, normalSim, postOp)


oliguria: {

}

export { normalSim, postOpConfusion }