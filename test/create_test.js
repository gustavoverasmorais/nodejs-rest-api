import { expect, assert } from 'chai';
import { stub, mock } from 'sinon';
import httpMocks from 'node-mocks-http';
import PdvController from '../src/controllers/pdvs';
import PdvRespository from '../src/repository/pdv.repository';
import Pdv from '../src/models/pdv';

describe("PdvController", () =>  {
  let response;

  beforeEach(() => {
    response = httpMocks.createResponse();
  });
  
  describe("create method", () => {
    let request;

    beforeEach(() => {
        request = httpMocks.createRequest({
          method: 'POST',
          url: '/pdvs'
        });
        response = httpMocks.createResponse();
    });

    it("should return a Pdv Object", () => {
      const createStub = stub(PdvRespository, "create").returns(mock(Pdv));

      const pdv = PdvController.create(request, response);
      assert.isNotNull(pdv);
      expect(createStub.calledOnce).to.be.true;
      expect(response.statusCode).to.equal(200);
    });
  })
});

// chai.use(chaiHttp);
// chai.should();
// describe("POST tests", () => {
//     describe("POST /", () => {

      //   it("empyt body", (done) => {
      //       chai.request(app)
      //           .post('/pdvs')
      //           .end((err, res) => {
      //               res.should.have.status(400);
      //               done();
      //             });
      //   });

      //   it("should create a pdv record", (done) => {

      //         const pdv =  {
      //          "id": "15",
      //          "tradingName": "Emporio da Cerveja",
      //          "ownerName": "Joao Maradona",
      //          "document": "11.863.940/0001-20",
      //          "coverageArea": {
      //             "type": "MultiPolygon",
      //             "coordinates": [
      //                [
      //                   [
      //                      [
      //                         -46.5292,
      //                         -23.58735
      //                      ],
      //                      [
      //                         -46.53503,
      //                         -23.5975
      //                      ],
      //                      [
      //                         -46.5219,
      //                         -23.61527
      //                      ],
      //                      [
      //                         -46.5139,
      //                         -23.62034
      //                      ],
      //                      [
      //                         -46.51087,
      //                         -23.62479
      //                      ],
      //                      [
      //                         -46.50396,
      //                         -23.62738
      //                      ],
      //                      [
      //                         -46.50336,
      //                         -23.63424
      //                      ],
      //                      [
      //                         -46.49512,
      //                         -23.64432
      //                      ],
      //                      [
      //                         -46.4886,
      //                         -23.647
      //                      ],
      //                      [
      //                         -46.4686,
      //                         -23.65435
      //                      ],
      //                      [
      //                         -46.46036,
      //                         -23.65006
      //                      ],
      //                      [
      //                         -46.4559,
      //                         -23.64043
      //                      ],
      //                      [
      //                         -46.45143,
      //                         -23.63611
      //                      ],
      //                      [
      //                         -46.4504,
      //                         -23.62278
      //                      ],
      //                      [
      //                         -46.44233,
      //                         -23.61627
      //                      ],
      //                      [
      //                         -46.43942,
      //                         -23.61255
      //                      ],
      //                      [
      //                         -46.44508,
      //                         -23.59466
      //                      ],
      //                      [
      //                         -46.4662,
      //                         -23.59482
      //                      ],
      //                      [
      //                         -46.49057,
      //                         -23.58161
      //                      ],
      //                      [
      //                         -46.49443,
      //                         -23.57901
      //                      ],
      //                      [
      //                         -46.50018,
      //                         -23.5783
      //                      ],
      //                      [
      //                         -46.50424,
      //                         -23.57331
      //                      ],
      //                      [
      //                         -46.52023,
      //                         -23.5761
      //                      ],
      //                      [
      //                         -46.5292,
      //                         -23.58735
      //                      ]
      //                   ]
      //                ]
      //             ]
      //          },
      //          "address": {
      //             "type": "Point",
      //             "coordinates": [
      //                -46.474983,
      //                -23.610245
      //             ]
      //          }
      //       }

      //        chai.request(app)
      //            .post('/pdvs')
      //            .send(pdv)
      //            .end((err, res) => {
      //                res.should.have.status(200);
      //                res.body.should.be.a('object');
      //                done();
      //             });
      //    });
         
        // Test to get single student record
   //      it("should not create a single pdv record", (done) => {
   //            const pdv = {
   //             "id": "1",
   //             "tradingName": "Adega Osasco",
   //             "ownerName": "Ze da Ambev",
   //             "document": "02.453.716/000170",
   //             "coverageArea": {
   //                "type": "MultiPolygon",
   //                "coordinates": [
   //                   [
   //                      [
   //                         [
   //                            -43.36556,
   //                            -22.99669
   //                         ],
   //                         [
   //                            -43.36539,
   //                            -23.01928
   //                         ],
   //                         [
   //                            -43.26583,
   //                            -23.01802
   //                         ],
   //                         [
   //                            -43.25724,
   //                            -23.00649
   //                         ],
   //                         [
   //                            -43.23355,
   //                            -23.00127
   //                         ],
   //                         [
   //                            -43.2381,
   //                            -22.99716
   //                         ],
   //                         [
   //                            -43.23866,
   //                            -22.99649
   //                         ],
   //                         [
   //                            -43.24063,
   //                            -22.99756
   //                         ],
   //                         [
   //                            -43.24634,
   //                            -22.99736
   //                         ],
   //                         [
   //                            -43.24677,
   //                            -22.99606
   //                         ],
   //                         [
   //                            -43.24067,
   //                            -22.99381
   //                         ],
   //                         [
   //                            -43.24886,
   //                            -22.99121
   //                         ],
   //                         [
   //                            -43.25617,
   //                            -22.99456
   //                         ],
   //                         [
   //                            -43.25625,
   //                            -22.99203
   //                         ],
   //                         [
   //                            -43.25346,
   //                            -22.99065
   //                         ],
   //                         [
   //                            -43.29599,
   //                            -22.98283
   //                         ],
   //                         [
   //                            -43.3262,
   //                            -22.96481
   //                         ],
   //                         [
   //                            -43.33427,
   //                            -22.96402
   //                         ],
   //                         [
   //                            -43.33616,
   //                            -22.96829
   //                         ],
   //                         [
   //                            -43.342,
   //                            -22.98157
   //                         ],
   //                         [
   //                            -43.34817,
   //                            -22.97967
   //                         ],
   //                         [
   //                            -43.35142,
   //                            -22.98062
   //                         ],
   //                         [
   //                            -43.3573,
   //                            -22.98084
   //                         ],
   //                         [
   //                            -43.36522,
   //                            -22.98032
   //                         ],
   //                         [
   //                            -43.36696,
   //                            -22.98422
   //                         ],
   //                         [
   //                            -43.36717,
   //                            -22.98855
   //                         ],
   //                         [
   //                            -43.36636,
   //                            -22.99351
   //                         ],
   //                         [
   //                            -43.36556,
   //                            -22.99669
   //                         ]
   //                      ]
   //                   ]
   //                ]
   //             },
   //             "address": {
   //                "type": "Point",
   //                "coordinates": [
   //                   -43.297337,
   //                   -23.013538
   //                ]
   //             }
   //          }
   //           chai.request(app)
   //               .post('/pdvs')
   //               .send(pdv)
   //               .end((err, res) => {
   //                   res.should.have.status(422);
   //                   done();
   //                });
   //       });
   //  });
// });