import { MedicalOption } from "../medical-option.model";

export const laboratories11: MedicalOption[] = [
  {
    rubrik: 'Labordiagnostik',
    code: '3.1.',
    gewaehlt: 1,
    item: 'BB',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 2.1,
    results: ['Leukozyten 		22,3 /nL  	(NB 4,8 - 10,8) ',
      'Erythrozyten		3,31 /pL	(NB 3,8 – 6,1) ',
      'Haemoglobin		11,5 g/dL	(NB 13,3 - 17,7) ',
      'Haematokrit		42,0 %		(NB 40 – 50) ',
      'MCV			81,1 fL		(NB 80 – 100) ',
      'MCH			29,0 pg		(NB 28 – 32) ',
      'Thrombozyten		278 /nL		(NB 130 – 440) ',
    ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.2.',
    gewaehlt: 1,
    item: 'Diff. BB',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 2.9,
    results: ['Basophile		0,2 %	(NB 0,2 – 1,3) ',
      'Eosinophile		0,4 %	(NB 0,8 – 6,2) ',
      'Lymphozyten		7,5 %	(NB 22,4 – 47,9) ',
      'Monozyten		12,8 %	(NB 0,7 – 9,3) ',
      'Neutrophile		77,9 %	(NB 41,2 – 70,1) ',
      'LUC			1,2 %	(NB 0,0 – 4,7) '
    ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.3.',
    gewaehlt: 1,
    item: 'Na+, K+, Glukose',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 3.5,
    results: ['Natrium		133 mmol/L	(NB 135 – 150) ',
      'Kalium			3,5 mmol/L	(NB 3,5 – 5,5) ',
      'Glukose		143 mg/dL	(NB 60 -100 nüchtern) ']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.4.',
    gewaehlt: 1,
    item: 'Ca++, Cl-, Phosphat',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 3.9,
    results: ['Calcium++	2,48 mmol/L	(NB 2,03 – 2,60) ',
      'Chlorid-		103 mmol/L	(NB 95 – 108) ',
      'Phosphat		1,32 mmol/L	(NB 0,87 – 1,45) '
      ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.5.',
    gewaehlt: 1,
    item: 'Kreatinin, HST, HSR',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 4.3,
    results: ['Kreatinin i.S.	1,52 mg/dL	(NB 0,50 – 1,10) ',
      'Harnstoff	59 mg/dL		(NB 10 – 50) ',
      'Harnsäure	nicht bestimmt	(NB 3,4 – 7,0) '
    ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.6.',
    gewaehlt: 1,
    item: 'GOT, GPT, AP, Bilirubin',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 5.7,
    results: ['GOT		59 U/L		(NB < 35) ',
      'GPT			43 U/L		(NB < 35) ',
      'AP			203 U/L	(NB 25-124) ',
      'Bilirubin (ges.)		1,3 mg/dL	(NB < 1,0)']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.7.',
    gewaehlt: 0,
    item: 'CRP',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 7,
    results: ['C-reaktives Protein   506 mg/L	(NB < 5)']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.8.',
    gewaehlt: 1,
    item: 'PCT',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 40,
    results: ['Procalcitonin	1,78ng/mL	(NB < 0.06)']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.9.',
    gewaehlt: 1,
    item: 'CK, LDH',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 4.6,
    results: ['CK 		171 U/L		(NB 10 – 80) ',
      'LDH		268 U/L		(NB 120 -240) '
    ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.10.',
    gewaehlt: 1,
    item: 'Quick & PTT',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 5,
    results: ['Quick		>100 %		(NB > 70) ',
      'INR		0,96		(NB 0,9 – 1,15) ',
      'PTT		28 sec.		(NB 28 – 40) ']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.11.',
    gewaehlt: 0,
    item: 'Fibrinogen, D-Dimer, AT III',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 22.9,
    results: ['Fibrinogen	882 mg/dL	(NB 180 – 340) ',
      'D-Dimer	3,5 mg/L		(NB < 0,5) ',
      'AT III		81 %			(NB 70 -140)	'
      ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.12.',
    gewaehlt: 1,
    item: 'TSH',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 9,
    results: ['TSH		1,53 mIU/mL	(NB 0,45 – 4,5)']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.13.',
    gewaehlt: 1,
    item: 'Urinstix',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 1.2,
    results: [
      'Dichte		normal',
      'Leukozyten	positiv',
      'Nitrit		positiv',
      'Eiweiß 		negativ',
      'Glukose	negativ',
      'Keton		negativ',
      'Blut		negativ'
      ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.14.',
    gewaehlt: 1,
    item: 'HbA1c',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 5,
    results: ['HbA1c nicht im Routinelabor enthalten, Ergebnis steht noch aus']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.15.',
    gewaehlt: 0,
    item: 'Venöse BGA',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 5.4,
    results: ['pO2 			46 mmHg',
      'pCO2			57 mmHg',
      'pH 			7,46		(NB 7,34 – 7,44) ',
      'BE 			- 1,9		(NB –2 – +2)']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.16.',
    gewaehlt: 0,
    item: 'Arterielle BGA',
    aerztlicheArbeitszeit: 10,
    behandlungszeit: 10,
    behandlungskosten: 11.4,
    results: ['pO2 			94 mmHg	(NB 84 - 104) ',
      'pCO2			42 mmHg	(NB 36 – 44) ',
      'pH 			7,42		(NB 7,34 – 7,44) ',
      'BE 			- 2,0		(NB –2 – +2)'
      ]
  }
];
