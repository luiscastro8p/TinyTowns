import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('casa') casa: ElementRef;
  @ViewChild('edificios') Edificios: ElementRef;
  @ViewChild('btn1') btn1: ElementRef;
  closeResult = '';
  coordenadasConstruccion = [];
  title = 'TinyTowns';
  contenido = '';
  butons = [];
  material: any;
  A1: Number;
  A2: Number;
  A3: Number;
  A4: Number;
  B1: Number;
  B2: Number;
  B3: Number;
  B4: Number;
  C1: Number;
  C2: Number;
  C3: Number;
  C4: Number;
  D1: Number;
  D2: Number;
  D3: Number;
  D4: Number;
  btn = false;
  btn2 = false;
  btn3 = false;
  btn4 = false;
  btn5 = false;
  btn6 = false;
  btn7 = false;
  btn8 = false;
  btn9 = false;
  btn10 = false;
  btn11 = false;
  btn12 = false;
  btn13 = false;
  btn14 = false;
  btn15 = false;
  btn16 = false;
  porconstruir;
  matriz: any[3][3];
  imagenes = [
    {
      img: '../../../assets/img/Edificios/invernadero.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/abadia.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/almacen.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/asilo.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/banco.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/cabana.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/capilla.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/centroComercial.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/claustro.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/cobertizo.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/fabrica.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/fuente.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/granero.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/granja.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/huerto.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/mercado.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/molinoPiedra.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/pasteleria.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/posada.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/pozo.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/sala de fiestas.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/sastre.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/taverna.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/teatro.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
    {
      img: '../../../assets/img/Edificios/templo.png',
      text: 'casa',
      description: 'textoadasdas dasd asd asdas das d asdas d asd asd asd asd',
    },
  ];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.matriz = new Array();
    for (let y = 0; y < 4; y++) {
      let row: any[] = new Array<any>();
      for (let x = 0; x < 4; x++) {
        row.push(0);
      }
      this.matriz.push(row);
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.butons.push([i, j]);
      }
    }
    this.A1 = this.matriz[0][0];
  }

  getImage(btn) {
    switch (btn) {
      case -1:
        return 'url(https://androidtr.es/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png)';
      case 1:
        return 'url(../../../assets/img/Materiales/madera.png)';
      case 2:
        return 'url(../../../assets/img/Materiales/Trigo.png)';
      case 3:
        return 'url(../../../assets/img/Materiales/Ladrillo.png)';
      case 4:
        return 'url(../../../assets/img/Materiales/Vidrio.png)';
      case 5:
        return 'url(../../../assets/img/Materiales/Piedra.png)';
      case 10:
        return 'url(../../../assets/img/Edificios/builds/abadia.png)';
      case 11:
        return 'url(../../../assets/img/Edificios/builds/almacen.png)';
      case 12:
        return 'url(../../../assets/img/Edificios/builds/asilo.png)';
      case 13:
        return 'url(../../../assets/img/Edificios/builds/banco.png)';
      case 14:
        return 'url(../../../assets/img/Edificios/builds/cabana.png)';
      case 15:
        return 'url(../../../assets/img/Edificios/builds/capilla.png)';
      case 16:
        return 'url(../../../assets/img/Edificios/builds/centroComercial.png)';
      case 17:
        return 'url(../../../assets/img/Edificios/builds/claustro.png)';
      case 18:
        return 'url(../../../assets/img/Edificios/builds/cobertizo.png)';
      case 19:
        return 'url(../../../assets/img/Edificios/builds/fabrica.png)';
      case 20:
        return 'url(../../../assets/img/Edificios/builds/fuente.png)';
      case 21:
        return 'url(../../../assets/img/Edificios/builds/granero.png)';
      case 22:
        return 'url(../../../assets/img/Edificios/builds/granja.png)';
      case 23:
        return 'url(../../../assets/img/Edificios/builds/huerto.png)';
      case 24:
        return 'url(../../../assets/img/Edificios/builds/invernadero.png)';
      case 25:
        return 'url(../../../assets/img/Edificios/builds/mercado.png)';
      case 26:
        return 'url(../../../assets/img/Edificios/builds/molinoPiedra.png)';
      case 27:
        return 'url(../../../assets/img/Edificios/builds/pasteleria.png)';
      case 28:
        return 'url(../../../assets/img/Edificios/builds/posada.png)';
      case 29:
        return 'url(../../../assets/img/Edificios/builds/pozo.png)';
      case 30:
        return 'url(../../../assets/img/Edificios/builds/saladefiestas.png)';
      case 31:
        return 'url(../../../assets/img/Edificios/builds/sastre.png)';
      case 32:
        return 'url(../../../assets/img/Edificios/builds/taverna.png)';
      case 33:
        return 'url(../../../assets/img/Edificios/builds/teatro.png)';
      case 34:
        return 'url(../../../assets/img/Edificios/builds/templo.png)';
    }
  }

  onclick(val, material) {
    switch (val) {
      case 1:
        this.matriz[0][0] = material;
        this.dibujar();
        this.validaciones(0, 0, material);
        break;
      case 2:
        console.log(this.getImage(this.A1));
        this.matriz[0][1] = material;
        this.dibujar();
        this.validaciones(0, 1, material);
        break;
      case 3:
        this.matriz[0][2] = material;
        this.dibujar();
        this.validaciones(0, 2, material);
        break;
      case 4:
        this.matriz[0][3] = material;
        this.dibujar();
        this.validaciones(0, 3, material);

        break;
      case 5:
        this.matriz[1][0] = material;
        this.dibujar();
        this.validaciones(1, 0, material);
        break;
      case 6:
        this.matriz[1][1] = material;
        this.dibujar();
        this.validaciones(1, 1, material);
        break;
      case 7:
        this.matriz[1][2] = material;
        this.dibujar();
        this.validaciones(1, 2, material);
        break;
      case 8:
        this.matriz[1][3] = material;
        this.dibujar();
        this.validaciones(1, 3, material);
        break;
      case 9:
        this.matriz[2][0] = material;
        this.dibujar();
        this.validaciones(2, 0, material);
        break;
      case 10:
        this.matriz[2][1] = material;
        this.dibujar();
        this.validaciones(2, 1, material);
        break;
      case 11:
        this.matriz[2][2] = material;
        this.dibujar();
        this.validaciones(2, 2, material);
        break;
      case 12:
        this.matriz[2][3] = material;
        this.dibujar();
        this.validaciones(2, 3, material);
        break;
      case 13:
        this.matriz[3][0] = material;
        this.dibujar();
        this.validaciones(3, 0, material);
        break;
      case 14:
        this.matriz[3][1] = material;
        this.dibujar();
        this.validaciones(3, 1, material);
        break;
      case 15:
        this.matriz[3][2] = material;
        this.dibujar();
        this.validaciones(3, 2, material);
        break;
      case 16:
        this.matriz[3][3] = material;
        this.dibujar();
        this.validaciones(3, 3, material);
        break;

      default:
        break;
    }
    // this.material = '';
  }
  getRandomMaterial(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  lanzardados() {
    this.material = this.getRandomMaterial(1, 6);
  }

  validaciones(ren, col, material) {
    this.validarCasa(ren, col, material);
    this.validarGranero(ren, col, material);
    this.limpiarCasillas();
    this.material = 0;
    this.botones('habilitar');

  }
  closemodal() {
    this.material = this.porconstruir;
    console.log(this.coordenadasConstruccion);
    for (let i = 0; i < this.coordenadasConstruccion.length; i++) {
      let posicion = this.coordenadasConstruccion[i];
      this.matriz[posicion[0]][posicion[1]] = 100;
    }
    this.botones('construccion');
    console.log(this.matriz);
  }
  modalConstruir(valor) {
    this.porconstruir = valor;
    this.contenido = '¿Deseas construir una casa?';
    this.modalService.open(this.casa, {
      backdropClass: 'light-blue-backdrop',
    });
  }
  limpiarCasillas() {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (this.matriz[x][y] == 100) {
          this.matriz[x][y] = 0;
        }
      }
    }
  }
  modalEdificios(value) {
    this.modalService.open(value, {
      backdropClass: 'light-blue-backdrop',
      size: 'xl',
    });
  }
  validarCasa(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      //madera
      case 1:
        if (ren == 0) {
        } else {
          if (this.matriz[ren - 1][col] == 2) {
            if (this.matriz[ren - 1][col + 1] == 4) {
              if (this.matriz[ren][col + 1] == 1) {
                coordenadas.push([ren, col]);
                coordenadas.push([ren - 1, col]);
                coordenadas.push([ren - 1, col + 1]);
                coordenadas.push([ren, col + 1]);
                this.modalConstruir(10);
                this.coordenadasConstruccion = coordenadas;
              } else {
                coordenadas = [];
              }
            }
          }
        }
        break;
      //trigo
      case 2:
        if (this.matriz[ren][col + 1] == 4) {
          if (this.matriz[ren + 1][col] == 1) {
            if (this.matriz[ren + 1][col + 1] == 1) {
              coordenadas = [
                [ren, col],
                [ren, col + 1],
                [ren + 1, col],
                [ren + 1, col + 1],
              ];
              this.modalConstruir(10);
              this.coordenadasConstruccion = coordenadas;
            } else {
              coordenadas = [];
              this.coordenadasConstruccion = [];
            }
          }
        }
        break;
      //vidrio,
      case 4:
        if (ren == 3) {
        } else {
          if (this.matriz[ren + 1][col] == 1) {
            if (this.matriz[ren][col - 1] == 2) {
              if (this.matriz[ren + 1][col - 1] == 1) {
              }
            }
          }
        }

        break;
      default:
        break;
    }
  }

  validarGranero(ren, col, material) {
    switch (material) {
      //madera
      case 1:
        if (ren == 0) {
        } else {
          if (this.matriz[ren - 1][col] == 2) {
            if (this.matriz[ren - 1][col + 1] == 2) {
              if (this.matriz[ren][col + 1] == 5) {
              }
            }
          }
        }
        break;
      //trigo
      case 2:
        if (this.matriz[ren][col + 1] == 2) {
          if (this.matriz[ren + 1][col] == 1) {
            if (this.matriz[ren + 1][col + 1] == 5) {
            }
          }
        } else if (this.matriz[ren][col - 1] == 2 && ren < 3) {
          if (this.matriz[ren + 1][col] == 5) {
            if (this.matriz[ren - 1][col - 1] == 1) {
            }
          }
        }
        break;
      //piedra
      case 5:
        if (ren == 0) {
        } else {
          if (this.matriz[ren - 1][col] == 2) {
            if (this.matriz[ren - 1][col - 1] == 2) {
              if (this.matriz[ren][col - 1] == 1) {
              }
            }
          }
        }
        break;
      default:
        break;
    }
  }

  dibujar() {
    this.A1 = this.matriz[0][0];
    this.A2 = this.matriz[0][1];
    this.A3 = this.matriz[0][2];
    this.A4 = this.matriz[0][3];
    this.B1 = this.matriz[1][0];
    this.B2 = this.matriz[1][1];
    this.B3 = this.matriz[1][2];
    this.B4 = this.matriz[1][3];
    this.C1 = this.matriz[2][0];
    this.C2 = this.matriz[2][1];
    this.C3 = this.matriz[2][2];
    this.C4 = this.matriz[2][3];
    this.D1 = this.matriz[3][0];
    this.D2 = this.matriz[3][1];
    this.D3 = this.matriz[3][2];
    this.D4 = this.matriz[3][3];
  }
  botones(value) {
    let b1 = this.matriz[0][0];
    let b2 = this.matriz[0][1];
    let b3 = this.matriz[0][2];
    let b4 = this.matriz[0][3];
    let b5 = this.matriz[1][0];
    let b6 = this.matriz[1][1];
    let b7 = this.matriz[1][2];
    let b8 = this.matriz[1][3];
    let b9 = this.matriz[2][0];
    let b10 = this.matriz[2][1];
    let b11 = this.matriz[2][2];
    let b12 = this.matriz[2][3];
    let b13 = this.matriz[3][0];
    let b14 = this.matriz[3][1];
    let b15 = this.matriz[3][2];
    let b16 = this.matriz[3][3];
    
    if ((b1 > 0 && b1 < 6) || b1 === 100) {       
      this.btn = true
    } else {
      this.btn = false
    }
  } 
}

