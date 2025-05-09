import { MedicalOption } from "../medical-option.model";

export const laboratories1: MedicalOption[] = [
  {
    rubrik: 'Labordiagnostik',
    code: '3.1.',
    gewaehlt: 1,
    item: 'BB',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 1.6,
    results: ['Leukozyten 		12,1 /nL  	(NB 4,8 - 11,8)',
      'Erythrozyten		4,02 /pL	(NB 3,8 – 6,1)',
      'Haemoglobin	12,2 g/dL	(NB 13,3 - 17,7)',
      'Haematokrit		34,7 %		(NB 40 – 50)',
      'MCV			86,4 fL		(NB 80 – 100)',
      'MCH			30,4 pg	(NB 28 – 32)',
      'Thrombozyten	196 /nL	(NB 130 – 440)'
      ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.2.',
    gewaehlt: 1,
    item: 'Diff. BB',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 1,
    results: ['Basophile	0,1 %	(NB 0,2 – 1,3)',
      'Eosinophile		0,3 %	(NB 0,8 – 6,2)',
      'Lymphozyten	7,7 %	(NB 22,4 – 47,9)',
      'Monozyten		8,7 %	(NB 0,7 – 9,3)',
      'Neutrophile		82,6 %	(NB 41,2 – 70,1)',
      'LUC			0,6 %	(NB 0,0 – 4,7)'
    ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.3.',
    gewaehlt: 1,
    item: 'Na+, K+, Glukose',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 3,
    results: ['Natrium	142 mmol/L	(NB 135 – 150)',
      'Kalium		3,43 mmol/L	(NB 3,5 – 5,5)',
      'Glukose		123 mg/dL		(NB 60 -100)']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.4.',
    gewaehlt: 1,
    item: 'Ca++, Cl-, Phosphat',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 3.3,
    results: ['Calcium++	2,23 mmol/L	(NB 2,03 – 2,60)',
      'Chlorid-		105 mmol/L	(NB 95 – 108)',
      'Phosphat		1,14 mmol/L	(NB 0,87 – 1,45)'
      ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.5.',
    gewaehlt: 1,
    item: 'Kreatinin, HST, HSR',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 3,
    results: ['Kreatinin i.S.	0,46 mg/dL	(NB 0,50 – 1,10)',
      'Harnstoff	24 mg/dL		(NB 10 – 50)',
      'Harnsäure	5,27 mg/dL		(NB 3,4 – 7,0)'
    ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.6.',
    gewaehlt: 1,
    item: 'GOT, GPT, AP, Bilirubin',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 5,
    results: ['GOT		8 U/L			(NB < 18)',
      'GPT			7 U/L			(NB < 22)',
      'AP			52 U/L			(NB 60 -170)',
      'Bilirubin (ges.)	0,97 mg/dL		(NB < 1,0)']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.7.',
    gewaehlt: 0,
    item: 'Blutsenkung',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 1,
    results: ['Blutsenkung 35/72 mm n.W.     (NB < 8/20)'
      ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.8.',
    gewaehlt: 1,
    item: 'CRP',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 6,
    results: ['C-reaktives Protein   105 mg/L	(NB < 5)'
      ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.9.',
    gewaehlt: 1,
    item: 'CK, LDH',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 2.5,
    results: ['CK 			38 U/L		(NB 10 – 80)',
      'LDH		154 U/L		(NB 120 -240)'
    ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.10.',
    gewaehlt: 1,
    item: 'Quick & PTT',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 3,
    results: ['Quick		91 %			(NB > 70)',
      'INR		1,20			(NB 0,9 – 1,15)',
      'PTT		33,9 sec.		(NB 28 – 40)'
    ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.11.',
    gewaehlt: 0,
    item: 'Fibrinogen, D-Dimer, AT III',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 17,
    results: ['Fibrinogen	412 mg/dL	(NB 180 – 340)',
      'D-Dimer	0,7 µg/dL		(NB < 0,5)',
      'AT III		94 %			(NB 70 -140)'
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
    results: ['TSH		0,82 mIU/mL	(NB 0,45 – 4,5)']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.13.',
    gewaehlt: 1,
    item: 'Urinstix',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 1.2,
    results: ['Dichte		normal',
      'Leukozyten	75/µl',
      'Nitrit		positiv',
      'Eiweiß 	500 mg/L',
      'Glukose	negativ',
      'Keton		+++',
      'Blut		250/µL']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.14.',
    gewaehlt: 1,
    item: 'Valproinsäure Spiegel',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 9,
    results: ['Valproinsäure	 	33 µg/mL	(NB 50 – 100)']
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.15.',
    gewaehlt: 0,
    item: 'Venöse BGA',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 0.5,
    behandlungskosten: 5.4,
    results: ['pO2 			35 mmHg',
      'pCO2			46 mmHg',
      'pH 			7,31		(NB 7,34 – 7,44)',
      'BE 			- 4,0		(NB –2 – +2)'
      ]
  },
  {
    rubrik: 'Labordiagnostik',
    code: '3.16.',
    gewaehlt: 0,
    item: 'Arterielle BGA',
    aerztlicheArbeitszeit: 10,
    behandlungszeit: 10,
    behandlungskosten: 11.4,
    results: ['pO2 			85 mmHg',
      'pCO2			29 mmHg',
      'pH 			7,31		(NB 7,34 – 7,44)',
      'BE 			- 4,0		(NB –2 – +2)'
      ]
  }
];
