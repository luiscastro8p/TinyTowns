import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'TinyTowns';
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
  btn1 = false;
  matriz: any[3][3];
  constructor() { }

  ngOnInit(): void {
    this.matriz = new Array();
    for (let y = 0; y <= 3; y++) {
      let row: any[] = new Array<any>();
      for (let x = 0; x <= 3; x++) {
        row.push(0);
      }
      this.matriz.push(row);

    }
  }

  onclick(val, material) {
    switch (val) {
      case 1:
        this.matriz[0][0] = material
        this.A1 = material;
        this.validarCasa(0, 0, material);
        this.validarGranero(0, 0, material);

        break;
      case 2:
        this.matriz[0][1] = material
        this.validarCasa(0, 1, material);
        this.validarGranero(0, 1, material);

        this.A2 = material;
        break;
      case 3:
        this.matriz[0][2] = material
        this.A3 = material;
        this.validarCasa(0, 2, material);
        this.validarGranero(0, 2, material);

        break;
      case 4:
        this.matriz[0][3] = material
        this.A4 = material;
        this.validarCasa(0, 3, material);
        this.validarGranero(0, 3, material);


        break;
      case 5:
        this.matriz[1][0] = material
        this.validarCasa(1, 0, material);
        this.validarGranero(1, 0, material);

        this.B1 = material;
        break;
      case 6:
        this.matriz[1][1] = material
        this.validarCasa(1, 1, material);
        this.validarGranero(1, 1, material);

        this.B2 = material;
        break;
      case 7:
        this.matriz[1][2] = material
        this.validarCasa(1, 2, material);
        this.validarGranero(1, 2, material);

        this.B3 = material;
        break;
      case 8:
        this.matriz[1][3] = material
        this.validarCasa(1, 3, material);
        this.validarGranero(1, 3, material);

        this.B4 = material;
        break;
      case 9:
        this.matriz[2][0] = material
        this.validarCasa(2, 0, material);
        this.validarGranero(2, 0, material);

        this.C1 = material;
        break;
      case 10:
        this.matriz[2][1] = material
        this.validarCasa(2, 1, material);
        this.validarGranero(2, 3, material);

        this.C2 = material;
        break;
      case 11:
        this.matriz[2][2] = material
        this.validarCasa(2, 2, material);
        this.validarGranero(2, 3, material);

        this.C3 = material;
        break;
      case 12:
        this.matriz[2][3] = material
        this.validarCasa(2, 3, material);
        this.validarGranero(2, 3, material);

        this.C4 = material;
        break;
      case 13:
        this.matriz[3][0] = material
        this.validarCasa(3, 0, material);
        this.validarGranero(3, 0, material);

        this.D1 = material;
        break;
      case 14:
        this.matriz[3][1] = material
        this.validarCasa(3, 1, material);
        this.validarGranero(3, 1, material);

        this.D2 = material;
        break;
      case 15:
        this.matriz[3][2] = material
        this.validarCasa(3, 2, material);
        this.validarGranero(3, 2, material);
        this.D3 = material;
        break;
      case 16:
        this.matriz[3][3] = material
        this.validarCasa(3, 3, material);
        this.validarGranero(3, 3, material);
        this.D4 = material;
        break;

      default:
        break;
    }
    this.material = '';
  }
  getRandomMaterial(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  lanzardados() {
    this.material = this.getRandomMaterial(1, 6);
  }
  validarCasa(ren, col, material) {
    console.log(this.matriz);
    switch (material) {
      //madera
      case 1:
        if (this.matriz[ren - 1][col] == 2) {
          if (this.matriz[ren - 1][col + 1] == 4) {
            if (this.matriz[ren][col + 1] == 1) {
              console.log("casita case 1");
            }
          }
        }
        break;
      //trigo
      case 2:
        if (this.matriz[ren][col + 1] == 4) {
          console.log(ren, col);
          if (this.matriz[ren + 1][col] == 1) {
            if (this.matriz[ren + 1][col + 1] == 1) {
              console.log("casita case 2");

            }
          }
        }
        break;
      //vidrio   
      case 4:
        if (this.matriz[ren + 1][col] == 1) {
          if (this.matriz[ren][col - 1] == 2) {
            if (this.matriz[ren + 1][col - 1] == 1) {
              console.log("casita case 4");

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
        if (this.matriz[ren - 1][col] == 2) {
          if (this.matriz[ren - 1][col + 1] == 2) {
            if (this.matriz[ren][col + 1] == 5) {
              console.log("granero bb");
            }
          }
        }
        break;
      //trigo
      case 2:
        if (this.matriz[ren][col + 1] == 2) {
          if (this.matriz[ren + 1][col] == 1) {
            if (this.matriz[ren + 1][col + 1] == 5) {
              console.log("granero normal");

            }
          }
        } else if (this.matriz[ren][col - 1] == 2) {
           if (this.matriz[ren + 1][col] == 5) {
            if (this.matriz[ren - 1][col - 1] == 1) {
              console.log("granero else");
            }
          }
        }
        break;
      //piedra  
      case 5:
        if (this.matriz[ren - 1][col] == 2) {
          if (this.matriz[ren - 1][col - 1] == 2) {
            if (this.matriz[ren][col - 1] == 1) {
              console.log("grenero");

            }
          }

        }
        break;
      default:
        break;
    }


  }
}

