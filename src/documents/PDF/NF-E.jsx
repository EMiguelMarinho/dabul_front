import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export const EmissionPDF = () => {
   pdfMake.vfs = pdfFonts.pdfMake.vfs;

   const reportTitle = [{
      text: 'Clientes',
      fontSize: 15,
      bold: true,
      margin:[15, 20, 0, 45]
   }];

   const details = [
      {
         table: {
            widths: '100%',
            body: [
               [
                  {
                     table: {
                        headerRows: 1,
                        widths: [ '75%', '*' ],
                        
                        body: [
                           [
                              {
                                 table: {
                                    body: [
                                       [
                                          {
                                             table: {
                                                body: [
                                                   [{text: "PREFEITURA MUNICÍPIO DE SÃO PAULO"}],
                                                ],
                                                widths: "100%",
                                                heights: 25,
                                             },
                                             alignment: 'center',
                                             layout: 'noBorders',
                                          },
                                       ],
                                       [
                                          {
                                             table: {
                                                body: [
                                                   [{text: "SECRETARIA MUNICIPAL DA FAZENDA"}],
                                                ],
                                                widths: "100%",
                                                heights: 25,
                                             },
                                             alignment: 'center',
                                             layout: 'noBorders',
                                          },
                                       ],
                                       [
                                          {
                                             table: {
                                                body: [
                                                   [{text: "NOTA FISCAL ELETRÔNICA DE SERVIÇOS - NFS -e"}],
                                                ],
                                                widths: "100%",
                                                heights: 25,
                                             },
                                             alignment: 'center',
                                             layout: 'noBorders',
                                          },
                                       ],
                                    ],
                                    widths: "100%",
                                 },
                                 alignment: 'center',
                                 layout: 'noBorders'
                              },
                              {
                                 table: {
                                    body: [
                                       [
                                          {
                                             table: {
                                                body: [
                                                   [{text: "Número da nota", fontSize: 7, alignment: 'left'}],
                                                   [{text: "00001401", fontSize: 10}]
                                                ],
                                                widths: "100%",
                                                heights: 9,
                                                alignment: 'center'
                                             },
                                             layout: 'noBorders',
                                          },
                                       ],
                                       [
                                          {
                                             table: {
                                                body: [
                                                   [{text: "Data e Hora de Emissão", fontSize: 7, alignment: 'left'}],
                                                   [{text: "30/09/2022 14:24:42", fontSize: 10}]
                                                ],
                                                widths: "100%",
                                                heights: 9,
                                                alignment: 'center'
                                             },
                                             layout: 'noBorders',
                                          },
                                       ],
                                       [
                                          {
                                             table: {
                                                body: [
                                                   [{text: "Código de Verificação", fontSize: 7, alignment: 'left'}],
                                                   [{text: "GWNA-BPIE", fontSize: 10}]
                                                ],
                                                widths: "100%",
                                                heights: 9,
                                                alignment: 'center'
                                             },
                                             layout: 'noBorders',
                                          },
                                       ],
                                    ],
                                    widths: "100%",
                                 },
                                 alignment: 'center',
                              }
                           ],
                        ],                        
                     },
                     layout: "noBorders"
                  }
               ],
               [
                  {
                     table: {
                        widths: '100%',
                        body: [
                           ["PRESTADOR DE SERVIÇOS"],
                           [{
                              table: {
                                 widths: ["50%", "*"],
                                 body: [
                                    [
                                       {text: "CPF/CNPJ: 00.077.690/0001-41", fontSize: 8, margin: [15, 0, 15, 0],},
                                       {text: "Inscrição municipal: 2.262.358-2", fontSize: 8, margin: [15, 0, 15, 0],}
                                    ],
                                    [
                                       {text: "Nome/Razão Social: DABUL E REIS LOBO SOCIEDADE DE ADVOGADOS", fontSize: 8, margin: [15, 0, 15, 0],},
                                       {text: ""}
                                    ],
                                    [
                                       {text: "Endereço: R. TOMAS CARVALHAL 00691 - PARAISO - CEP: 04006-002", fontSize: 8, margin: [15, 0, 15, 0],},
                                       {text: ""}
                                    ],
                                    [
                                       {text: "Município: SÃO PAULO", fontSize: 8, margin: [15, 0, 15, 0],},
                                       {text: "UF: SP", fontSize: 8, margin: [15, 0, 15, 0],}
                                    ],
                                 ]
                              },
                              layout: "noBorders",
                              alignment: "left",
                           }]
                        ]
                     },
                     layout: "noBorders",
                     alignment: "center"
                  }
               ],
               [
                  {
                     table: {
                        widths: '100%',
                        body: [
                           ["TOMADOR DE SERVIÇOS"],
                           [{
                              table: {
                                 widths: ["50%", "*"],
                                 body: [
                                    [
                                       {text: "CPF/CNPJ: 030.739.788-41", fontSize: 8, margin: [15, 0, 15, 0],},
                                       {text: "Inscrição municipal: -----", fontSize: 8, margin: [15, 0, 15, 0],}
                                    ],
                                    [
                                       {text: "Nome/Razão Social: EDMEA TEIXEIRA BALESTRERO", fontSize: 8, margin: [15, 0, 15, 0],},
                                       {text: ""}
                                    ],
                                    [
                                       {text: "Endereço: R. MARJORIE PRADO 171 - JARDIM MARAJOARA - CEP: 04663-080", fontSize: 8, margin: [15, 0, 15, 0],},
                                       {text: ""}
                                    ],
                                    [
                                       {text: "Município: SÃO PAULO", fontSize: 8, margin: [15, 0, 15, 0],},
                                       {
                                          table: {
                                             widths: [60, 100],
                                             body: [
                                                [
                                                   {text: "UF: SP", fontSize: 8, margin: [15, 0, 0, 0]},
                                                   {text: "E-mail: -----", fontSize: 8, margin: [0, 0, 15, 0]}
                                                ],
                                             ]
                                          },
                                          layout: 'noBorders',
                                          alignment: "center"
                                       }
                                    ],
                                 ]
                              },
                              layout: "noBorders",
                              alignment: "left",
                           }]
                        ]
                     },
                     layout: "noBorders",
                     alignment: "center"
                  }
               ],
               [
                  {
                     table: {
                        widths: '100%',
                        body: [
                           ["INTERMEDIÁRIO DE SERVIÇOS"],
                           [{
                              table: {
                                 widths: ["50%", "*"],
                                 body: [
                                    [
                                       {text: "CPF/CNPJ: ------", fontSize: 8, margin: [15, 0, 15, 0],},
                                       {text: "Nome/Razão Social: -----", fontSize: 8, margin: [15, 0, 15, 0],}
                                    ]
                                 ],
                              },
                              layout: "noBorders",
                              alignment: "left",
                           }]
                        ]
                     },
                     layout: "noBorders",
                     alignment: "center"
                  }
               ],
               [
                  {
                     table: {
                        widths: '100%',
                        body: [
                           ["DISCRIMINAÇÃO DOS SERVIÇOS"],
                           [{
                              table: {
                                 widths: "*",
                                 heights: 100,
                                 body: [
                                    [
                                       {text: "Honorários Advocatícios", fontSize: 8, margin: [15, 0, 15, 0],},
                                    ]
                                 ]
                              },
                              layout: "noBorders",
                              alignment: "left",
                           }]
                        ]
                     },
                     layout: "noBorders",
                     alignment: "center"
                  }
               ],
               [
                  {
                     table: {
                        widths: '100%',
                        body: [
                           ["VALOR TOTAL DO SERVIÇO = R$ 26.958,07"],
                           [{
                              table: {
                                 widths: ["20%","20%","20%","20%","20%",],
                                 body: [
                                    [
                                       {
                                          table: {
                                             widths: "100%",
                                             body: [
                                                [{text: "INSS (R$)", fontSize: 10}],
                                                [{text: "-",  fontSize: 10}]
                                             ]
                                          },
                                          layout: 'noBorders',
                                          alignment: "center",
                                       },
                                       {
                                          table: {
                                             widths: "100%",
                                             body: [
                                                [{text: "IRRF (R$)", fontSize: 10}],
                                                [{text: "-",  fontSize: 10}]
                                             ]
                                          },
                                          layout: 'noBorders',
                                          alignment: "center",
                                       },
                                       {
                                          table: {
                                             widths: "100%",
                                             body: [
                                                [{text: "CSLL (R$)", fontSize: 10}],
                                                [{text: "-",  fontSize: 10}]
                                             ]
                                          },
                                          layout: 'noBorders',
                                          alignment: "center",
                                       },
                                       {
                                          table: {
                                             widths: "100%",
                                             body: [
                                                [{text: "COFINS (R$)", fontSize: 10}],
                                                [{text: "-",  fontSize: 10}]
                                             ]
                                          },
                                          layout: 'noBorders',
                                          alignment: "center",
                                       },
                                       {
                                          table: {
                                             widths: "100%",
                                             body: [
                                                [{text:"PIS/PASEP (R$)", fontSize: 10}],
                                                [{text: "-",  fontSize: 10}]
                                             ]
                                          },
                                          layout: 'noBorders',
                                          alignment: "center",
                                       },
                                    ]
                                 ]
                              },
                              alignment: "left",
                           }]
                        ]
                     },
                     layout: "noBorders",
                     alignment: "center"
                  }
               ],
               [
                  {
                     table: {
                        widths: '100%',
                        body: [
                           [{text: "Código de Serviço", fontSize: 10}],
                           [{text: "03379 - Advocacia (sociedade de profissionais", fontSize: 10}]
                        ]
                     },
                     layout: "noBorders",
                     alignment: "left",
                  }
               ],
               [
                  {
                     table: {
                        widths: ["20%","20%","20%","20%","20%",],
                        body: [
                           [
                              {
                                 table: {
                                    widths: "100%",
                                    body: [
                                       [{text: "Valor Total das Deduções (R$)", fontSize: 7}],
                                       [{text: "0,00",  fontSize: 8}]
                                    ]
                                 },
                                 layout: 'noBorders',
                                 alignment: "center",
                              },
                              {
                                 table: {
                                    widths: "100%",
                                    body: [
                                       [{text: "Base de cálculo (R$)", fontSize: 7}],
                                       [{text: "26.958,07",  fontSize: 8}]
                                    ]
                                 },
                                 layout: 'noBorders',
                                 alignment: "center",
                              },
                              {
                                 table: {
                                    widths: "100%",
                                    body: [
                                       [{text: "Alíquota (%)", fontSize: 7}],
                                       [{text: "-",  fontSize: 8}]
                                    ]
                                 },
                                 layout: 'noBorders',
                                 alignment: "center",
                              },
                              {
                                 table: {
                                    widths: "100%",
                                    body: [
                                       [{text: "Valor do INSS (R$)", fontSize: 7}],
                                       [{text: "-",  fontSize: 8}]
                                    ]
                                 },
                                 layout: 'noBorders',
                                 alignment: "center",
                              },
                              {
                                 table: {
                                    widths: "100%",
                                    body: [
                                       [{text:"Crédito (R$)", fontSize: 7}],
                                       [{text: "0,00",  fontSize: 8}]
                                    ]
                                 },
                                 layout: 'noBorders',
                                 alignment: "center",
                              },
                           ]
                        ]
                     },
                     alignment: "left",
                  }
               ],
               [
                  {
                     table: {
                        widths: ["33%","33%","34%"],
                        body: [
                           [
                              {
                                 table: {
                                    widths: "100%",
                                    body: [
                                       [{text: "Município de Prestação de Serviço", fontSize: 8}],
                                       [{text: "0,00",  fontSize: 8}]
                                    ]
                                 },
                                 layout: 'noBorders',
                                 alignment: "center",
                              },
                              {
                                 table: {
                                    widths: "100%",
                                    body: [
                                       [{text: "Número Inscrição da Obra", fontSize: 8}],
                                       [{text: "26.958,07",  fontSize: 8}]
                                    ]
                                 },
                                 layout: 'noBorders',
                                 alignment: "center",
                              },
                              {
                                 table: {
                                    widths: "100%",
                                    body: [
                                       [{text: "Valor Aproximado dos Tributos/Fonte", fontSize: 8}],
                                       [{text: "11,33%",  fontSize: 8}]
                                    ]
                                 },
                                 layout: 'noBorders',
                                 alignment: "center",
                              },                              
                           ]
                        ]
                     },
                     alignment: "left",
                  }
               ],
               [
                  {
                     table: {
                        widths: '100%',
                        body: [
                           ["OUTRAS INFORMAÇÕES"],
                           [{
                              table: {
                                 widths: "*",
                                 body: [
                                    [
                                       {text: "(1) Esta NFS-e foi emitida com respaldo na Lei n° 14.097/2005;", fontSize: 8, margin: [15, 0, 15, 0],},
                                    ],
                                    [
                                       {text: "(2) O código de serviço referente a esta NFS-e não gera crédito;", fontSize: 8, margin: [15, 0, 15, 0],},
                                    ],
                                    [
                                       {text: "(3) Esta NFS-e foi emitida por prestador de serviços constituídos em acordo ao art. 15 da Lei 13.701/2003", fontSize: 8, margin: [15, 0, 15, 0],},
                                    ]
                                 ]
                              },
                              layout: "noBorders",
                              alignment: "left",
                           }]
                        ]
                     },
                     layout: "noBorders",
                     alignment: "center"
                  }
               ],
            ]
         },
         layout: {
            paddingLeft: function(i, node) { return 0; },
            paddingRight: function(i, node) { return 0; },
            paddingTop: function(i, node) { return 0; },
            paddingBottom: function(i, node) { return 0; },
         }
       }
   ];

   const rodape = [];

   const docDefinitions = {
      pageSize: 'A4',
      pageMargins: [15, 50, 15, 40],

      header: [reportTitle],
      content: [details],
      footer: [rodape],
   }

   pdfMake.createPdf(docDefinitions).open();
}
