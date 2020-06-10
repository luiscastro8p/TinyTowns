import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('casa') casa: ElementRef;
  @ViewChild('btn1') btn1: ElementRef;
  closeResult = '';
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
  //btn1 = false;
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
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.matriz = new Array();
    for (let y = 0; y <= 3; y++) {
      let row: any[] = new Array<any>();
      for (let x = 0; x <= 3; x++) {
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
      case 1:
        return 'url(https://previews.123rf.com/images/izakowski/izakowski1401/izakowski140100055/24972833-ilustración-de-dibujos-animados-de-troncos-de-madera-o-stump-clip-art.jpg)';
      case 2:
        return 'url(https://previews.123rf.com/images/ylivdesign/ylivdesign1709/ylivdesign170901282/85278272-icono-de-trigo-ilustración-de-dibujos-animados-de-icono-de-vector-de-trigo-para-web.jpg)';
      case 3:
        return 'url(https://previews.123rf.com/images/izakowski/izakowski1401/izakowski140100005/24827768-ilustración-de-dibujos-animados-de-la-vieja-pared-de-ladrillo-clip-art.jpg)';
      case 4:
        return 'url(https://i0.pngocean.com/files/822/770/421/window-glass-drawing-clip-art-broken-glass.jpg)';
      case 5:
        return 'url(https://previews.123rf.com/images/kongvector/kongvector1711/kongvector171104298/90585671-pulgares-arriba-estilo-de-dibujos-animados-de-car%C3%A1cter-de-piedra.jpg)';

      case 10:
        return 'url(https://image.freepik.com/vector-gratis/casa-dos-pisos_1308-16176.jpg)';
    }
  }

  onclick(val, material) {
    switch (val) {
      case 1:
        this.matriz[0][0] = material;
        this.A1 = material;
        this.validaciones(0, 0, material);
        break;
      case 2:
        console.log(this.getImage(this.A1));
        this.matriz[0][1] = material;
        this.A2 = material;
        this.validaciones(0, 1, material);
        break;
      case 3:
        this.matriz[0][2] = material;
        this.A3 = material;
        this.validaciones(0, 2, material);
        break;
      case 4:
        this.matriz[0][3] = material;
        this.A4 = material;
        this.validaciones(0, 3, material);

        break;
      case 5:
        this.matriz[1][0] = material;
        this.validaciones(1, 0, material);
        this.B1 = material;
        break;
      case 6:
        this.matriz[1][1] = material;
        this.validaciones(1, 1, material);

        this.B2 = material;
        break;
      case 7:
        this.matriz[1][2] = material;
        this.validaciones(1, 2, material);

        this.B3 = material;
        break;
      case 8:
        this.matriz[1][3] = material;
        this.validaciones(1, 3, material);

        this.B4 = material;
        break;
      case 9:
        this.matriz[2][0] = material;
        this.validaciones(2, 0, material);
        this.C1 = material;
        break;
      case 10:
        this.matriz[2][1] = material;
        this.validaciones(2, 1, material);
        this.C2 = material;
        break;
      case 11:
        this.matriz[2][2] = material;
        this.validaciones(2, 2, material);
        this.C3 = material;
        break;
      case 12:
        this.matriz[2][3] = material;
        this.validaciones(2, 3, material);
        this.C4 = material;
        break;
      case 13:
        this.matriz[3][0] = material;
        this.validaciones(3, 0, material);
        this.D1 = material;
        break;
      case 14:
        this.matriz[3][1] = material;
        this.validaciones(3, 1, material);
        this.D2 = material;
        break;
      case 15:
        this.matriz[3][2] = material;
        this.validaciones(3, 2, material);

        this.D3 = material;
        break;
      case 16:
        this.matriz[3][3] = material;
        this.validaciones(3, 3, material);

        this.D4 = material;
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
  }
  closemodal() {
    this.material = this.porconstruir
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
                coordenadas = [
                  [ren, col],
                  [ren - 1, col],
                  [ren - 1, col + 1],
                  [ren, col + 1],
                ];
                this.porconstruir = 10;
                this.contenido = '¿Deseas construir una casa?';
                this.modalService.open(this.casa, {
                  backdropClass: 'light-blue-backdrop',
                });
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
            }
          }
        }
        break;
      //vidrio
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
}

