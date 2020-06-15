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
  @ViewChild('repetidos') repetidos: ElementRef;

  @ViewChild('btn1') btn1: ElementRef;
  closeResult = '';
  coordenadasConstruccion = [];
  title = 'TinyTowns';
  contenido = '';
  butons = [];
  material = 0;
  material1: any = '';
  material2: any = '';
  material3: any = '';
  seleccionadas = [
    {
      img: '../../../assets/img/Edificios/cabana.png',
      text: 'Cabaña',
      description:
        'Las Cabañas no alimentadas se dejan en el tablero pero no puntúan por sí mismos. Otros edificios como los Pozos, tratan a las Cabañas, tanto alimentados como no, del mismo modo.Los puedes construir aunque no tengas una ',
      id: 14,
      type: 'azul',
    },
  ];
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
  btnreset = true;
  imagenes = require('../../../assets/imagenes.json');

  constructor(private modalService: NgbModal) {}

  ngAfterContentInit() {
    if (this.imagenes) {
      // this.modalEdificios(this.Edificios);
    }
  }
  ngOnInit() { 
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
    this.validarseleccionadas();
  }
  validarseleccionadas() {}
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
      case 24:
        return 'url(https://image.freepik.com/vector-gratis/casa-dos-pisos_1308-16176.jpg)';
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
  }
  ingresarSeleccion(value) {
    let imagenes = this.imagenes;
    if (this.seleccionadas.length ==6) {
      this.btnreset = false;
    }
    if (this.seleccionadas.length <= 7) {
      this.seleccionadas.push(value);
      switch (value.type) {
        case 'rojo':
          for (let item of imagenes) {
            if (item.type === 'rojo') {
              console.log('entro');
              let i = imagenes.indexOf(item);
              imagenes.splice(i, 4);
              this.imagenes = imagenes;
            }
          }
          break;
        case 'naranja':
          for (let item of imagenes) {
            if (item.type === 'naranja') {
              let i = imagenes.indexOf(item);
              imagenes.splice(i, 4);
              this.imagenes = imagenes;
            }
          }
          break;
        case 'oscuro':
          for (let item of imagenes) {
            if (item.type === 'oscuro') {
              let i = imagenes.indexOf(item);
              imagenes.splice(i, 4);
              this.imagenes = imagenes;
            }
          }
          break;
        case 'gris':
          for (let item of imagenes) {
            if (item.type === 'gris') {
              let i = imagenes.indexOf(item);
              imagenes.splice(i, 4);
              this.imagenes = imagenes;
            }
          }
          break;
        case 'verde':
          for (let item of imagenes) {
            if (item.type === 'verde') {
              let i = imagenes.indexOf(item);
              imagenes.splice(i, 4);
              this.imagenes = imagenes;
            }
          }
          break;
        case 'amarillo':
          for (let item of imagenes) {
            if (item.type === 'amarillo') {
              let i = imagenes.indexOf(item);
              imagenes.splice(i, 4);
              this.imagenes = imagenes;
            }
          }
          break;
      }
    }
  }
  seleccionarConstruccion(value) {
    this.porconstruir = value;
  }
  closemodalConstruirIguales(value) {
    this.material = value;
    for (let i = 0; i < this.coordenadasConstruccion.length; i++) {
      let posicion = this.coordenadasConstruccion[i];
      this.matriz[posicion[0]][posicion[1]] = 100;
    }
    this.botones('construccion');
    console.log(this.matriz);
  }

  getRandomMaterial(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  lanzardados() {
    if (this.material1 === '') {
      this.material1 = this.getRandomMaterial(1, 6);
    }
    if (this.material2 === '') {
      this.material2 = this.getRandomMaterial(1, 6);
    }
    if (this.material3 === '') {
      this.material3 = this.getRandomMaterial(1, 6);
    }
  }
  obtenermaterial(num, value) {
    if (this.material != 1000) {
      switch (num) {
        case 1:
          this.material1 = '';
          break;
        case 2:
          this.material2 = '';
          break;
        case 3:
          this.material3 = '';
          break;
      }
    }
    if (this.material != 100) {
      this.material = value;
    }
  }

  validaciones(ren, col, material) {    
    this.validarInvernadero(ren, col, material);
    this.validarGranero(ren, col, material);
    this.validarGranja(ren, col, material);
    this.validarHuerto(ren, col, material);
    this.validarSimilares(ren, col, material);
    this.validarAbadia(ren, col, material);
    this.validarAlmacen(ren, col, material);
    this.validarAsilo(ren, col, material);
    //this.validarBanco(ren,col,material);
    this.limpiarCasillas();

    //this.material = 0;
    this.botones('habilitar');
  }
  closemodal() {
    this.material = this.porconstruir;
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
      keyboard: false,
    });
  }

  modalRepetidos() {
    this.modalService.open(this.repetidos, {
      backdropClass: 'light-blue-backdrop',
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
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
      backdrop: 'static',
      keyboard: false,
    });
  }
  validarInvernadero(ren, col, material) {
    this.validarInvenaderoNormal(ren, col, material);
    this.validarInvenadero90Der(ren, col, material);
    this.validarInvenadero180(ren, col, material);
    this.validarInvenadero90Izq(ren, col, material);
  }

  validarInvenaderoNormal(ren, col, material) {
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
                this.modalConstruir(24);
                this.coordenadasConstruccion = coordenadas;
              } else {
                coordenadas = [];
                this.coordenadasConstruccion = [];
              }
            }
          } else if (this.matriz[ren - 1][col] == 4) {
            if (this.matriz[ren][col - 1] == 1) {
              if (this.matriz[ren - 1][col - 1] == 2) {
                coordenadas.push([ren, col]);
                coordenadas.push([ren - 1, col]);
                coordenadas.push([ren, col - 1]);
                coordenadas.push([ren - 1, col - 1]);
                this.modalConstruir(24);
                this.coordenadasConstruccion = coordenadas;
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
              coordenadas.push([ren, col]);
              coordenadas.push([ren, col + 1]);
              coordenadas.push([ren + 1, col]);
              coordenadas.push([ren + 1, col + 1]);
              this.modalConstruir(24);
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
                coordenadas.push([ren, col]);
                coordenadas.push([ren + 1, col]);
                coordenadas.push([ren, col + 1]);
                coordenadas.push([ren + 1, col - 1]);
                this.modalConstruir(24);
                this.coordenadasConstruccion = coordenadas;
              } else {
                coordenadas = [];
                this.coordenadasConstruccion = [];
              }
            }
          }
        }

        break;
      default:
        break;
    }
  }
  validarInvenadero90Der(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      //madera
      case 1:
        if (ren >= 0 && ren < 3) {
          if (
            this.matriz[ren + 1][col] == 1 &&
            this.matriz[ren][col + 1] == 2 &&
            this.matriz[ren + 1][col + 1] == 4
          ) {
            coordenadas.push([ren, col]);
            coordenadas.push([ren + 1, col]);
            coordenadas.push([ren, col + 1]);
            coordenadas.push([ren + 1, col + 1]);
            this.modalConstruir(24);
            this.coordenadasConstruccion = coordenadas;
          }
        } else if (
          this.matriz[ren - 1][col] == 1 &&
          this.matriz[ren - 1][col + 1] == 2 &&
          this.matriz[ren][col + 1] == 4
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col + 1]);
          coordenadas.push([ren, col + 1]);
          this.modalConstruir(24);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      //trigo
      case 2:
        if (
          ren < 3 &&
          this.matriz[ren][col - 1] == 1 &&
          this.matriz[ren + 1][col] == 4 &&
          this.matriz[ren + 1][col - 1] == 1
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren + 1, col - 1]);
          this.modalConstruir(24);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      //vidrio,
      case 4:
        if (ren == 0) {
        } else {
          if (
            this.matriz[ren - 1][col] == 2 &&
            this.matriz[ren][col - 1] == 1 &&
            this.matriz[ren - 1][col - 1] == 1
          ) {
            coordenadas.push([ren, col]);
            coordenadas.push([ren - 1, col]);
            coordenadas.push([ren, col - 1]);
            coordenadas.push([ren - 1, col - 1]);
            this.modalConstruir(24);
            this.coordenadasConstruccion = coordenadas;
          }
        }

        break;
      default:
        break;
    }
  }
  validarInvenadero180(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      //madera
      case 1:
        if (ren == 3) {
        } else if (
          this.matriz[ren + 1][col] == 4 &&
          this.matriz[ren][col + 1] == 1 &&
          this.matriz[ren + 1][col + 1] == 2
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren + 1, col + 1]);
          this.modalConstruir(24);
          this.coordenadasConstruccion = coordenadas;
        } else if (
          this.matriz[ren + 1][col] == 2 &&
          this.matriz[ren + 1][col - 1] == 4 &&
          this.matriz[ren][col - 1] == 1
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren + 1, col - 1]);
          coordenadas.push([ren, col - 1]);
          this.modalConstruir(24);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      //trigo
      case 2:
        if (
          this.matriz[ren][col - 1] == 4 &&
          this.matriz[ren - 1][col] == 1 &&
          this.matriz[ren - 1][col - 1] == 1
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col - 1]);
          this.modalConstruir(24);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      //vidrio,
      case 4:
        if (ren == 0) {
        } else {
          if (
            this.matriz[ren - 1][col] == 1 &&
            this.matriz[ren][col + 1] == 2 &&
            this.matriz[ren - 1][col + 1] == 1
          ) {
            coordenadas.push([ren, col]);
            coordenadas.push([ren - 1, col]);
            coordenadas.push([ren, col + 1]);
            coordenadas.push([ren - 1, col + 1]);
            this.modalConstruir(24);
            this.coordenadasConstruccion = coordenadas;
          }
        }

        break;
      default:
        break;
    }
  }
  validarInvenadero90Izq(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      //madera
      case 1:
        if (
          ren < 3 &&
          this.matriz[ren + 1][col] == 1 &&
          this.matriz[ren][col - 1] == 4 &&
          this.matriz[ren + 1][col - 1] == 2
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren + 1, col - 1]);
          this.modalConstruir(24);
          this.coordenadasConstruccion = coordenadas;
        } else if (
          ren < 0 &&
          this.matriz[ren - 1][col] == 1 &&
          this.matriz[ren - 1][col + 1] == 2 &&
          this.matriz[ren][col + 1] == 4
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col + 1]);
          coordenadas.push([ren, col + 1]);
          this.modalConstruir(24);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      //trigo
      case 2:
        if (
          ren > 0 &&
          this.matriz[ren][col + 1] == 1 &&
          this.matriz[ren - 1][col] == 4 &&
          this.matriz[ren - 1][col + 1] == 1
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col + 1]);
          this.modalConstruir(24);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      //vidrio,
      case 4:
        if (
          ren < 3 &&
          this.matriz[ren + 1][col] == 2 &&
          this.matriz[ren][col + 1] == 1 &&
          this.matriz[ren + 1][col + 1] == 1
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren + 1, col + 1]);
          this.modalConstruir(24);
          this.coordenadasConstruccion = coordenadas;
        }

        break;
      default:
        break;
    }
  }

  validarGranero(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      //madera
      case 1:
        if (ren == 0) {
        } else {
          if (
            this.matriz[ren - 1][col] == 2 &&
            this.matriz[ren][col + 1] == 3 &&
            this.matriz[ren - 1][col + 1] == 2
          ) {
            coordenadas.push([ren, col]);
            coordenadas.push([ren - 1, col]);
            coordenadas.push([ren, col + 1]);
            coordenadas.push([ren - 1, col + 1]);
            this.modalConstruir(21);
            this.coordenadasConstruccion = coordenadas;
          }
        }
        break;
      //trigo
      case 2:
        if (
          ren < 3 &&
          this.matriz[ren + 1][col] == 1 &&
          this.matriz[ren][col + 1] == 2 &&
          this.matriz[ren + 1][col + 1] == 3
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren + 1, col + 1]);
          this.modalConstruir(21);
          this.coordenadasConstruccion = coordenadas;
        } else if (
          ren < 3 &&
          this.matriz[ren + 1][col] == 3 &&
          this.matriz[ren + 1][col - 1] == 1 &&
          this.matriz[ren][col - 1] == 2
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren + 1, col - 1]);
          coordenadas.push([ren, col - 1]);
          this.modalConstruir(21);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      //ladrillo
      case 3:
        if (
          this.matriz[ren][col - 1] == 1 &&
          this.matriz[ren - 1][col] == 2 &&
          this.matriz[ren - 1][col - 1] == 2
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col - 1]);
          this.modalConstruir(21);
          this.coordenadasConstruccion = coordenadas;
        }
        break;

      default:
        break;
    }
  }

  validarGranja(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      //madera
      case 1:
        if (
          ren > 0 &&
          this.matriz[ren - 1][col] == 2 &&
          this.matriz[ren - 1][col + 1] == 2 &&
          this.matriz[ren][col + 1] == 1
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col + 1]);
          coordenadas.push([ren, col + 1]);
          this.modalConstruir(22);
          this.coordenadasConstruccion = coordenadas;
        } else if (
          ren > 0 &&
          this.matriz[ren - 1][col] == 2 &&
          this.matriz[ren - 1][col - 1] == 2 &&
          this.matriz[ren][col - 1] == 1
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col - 1]);
          coordenadas.push([ren, col - 1]);
          this.modalConstruir(22);
          this.coordenadasConstruccion = coordenadas;
        }

        break;
      //trigo
      case 2:
        if (
          ren < 3 &&
          this.matriz[ren + 1][col] == 1 &&
          this.matriz[ren][col + 1] == 2 &&
          this.matriz[ren + 1][col + 1] == 1
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren + 1, col + 1]);
          this.modalConstruir(22);
          this.coordenadasConstruccion = coordenadas;
        } else if (
          ren < 3 &&
          this.matriz[ren + 1][col] == 1 &&
          this.matriz[ren + 1][col - 1] == 1 &&
          this.matriz[ren][col - 1] == 2
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren + 1, col - 1]);
          coordenadas.push([ren, col - 1]);
          this.modalConstruir(22);
          this.coordenadasConstruccion = coordenadas;
        }
        break;

      default:
        break;
    }
  }

  validarHuerto(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      //madera
      case 1:
        if (
          ren > 0 &&
          this.matriz[ren - 1][col] == 2 &&
          this.matriz[ren][col - 1] == 2 &&
          this.matriz[ren - 1][col - 1] == 5
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren - 1, col - 1]);
          this.modalConstruir(23);
          this.coordenadasConstruccion = coordenadas;
        }
        break;

      //Trigo
      case 2:
        if (
          this.matriz[ren][col - 1] == 5 &&
          this.matriz[ren + 1][col] == 1 &&
          this.matriz[ren + 1][col - 1] == 2
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren + 1, col - 1]);
          this.modalConstruir(23);
        } else if (
          ren > 0 &&
          this.matriz[ren][col + 1] == 1 &&
          this.matriz[ren - 1][col] == 5 &&
          this.matriz[ren - 1][col + 1] == 2
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col + 1]);
          this.modalConstruir(23);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      case 5:
        if (ren == 0) {
        } else {
          if (
            ren < 3 &&
            this.matriz[ren + 1][col] == 2 &&
            this.matriz[ren][col + 1] == 2 &&
            this.matriz[ren + 1][col + 1] == 1
          ) {
            coordenadas.push([ren, col]);
            coordenadas.push([ren - 1, col]);
            coordenadas.push([ren, col + 1]);
            coordenadas.push([ren + 1, col + 1]);
            this.modalConstruir(23);
            this.coordenadasConstruccion = coordenadas;
          }
        }
        break;
      //trigo

      default:
        break;
    }
  }

  validarSimilares(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      case 1:
        if (this.matriz[ren][col + 1] == 5) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col + 1]);
          this.modalRepetidos();
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      case 5:
        if (this.matriz[ren][col - 1] == 1) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col - 1]);
          this.modalRepetidos();
          this.coordenadasConstruccion = coordenadas;
        }
        break;

      default:
        break;
    }
  }

  validarAbadia(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      //ladrillo
      case 3:
        if (
          ren > 0 &&
          this.matriz[ren - 1][col + 2] == 4 &&
          this.matriz[ren][col + 1] == 5 &&
          this.matriz[ren][col + 2] == 5
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren - 1, col + 2]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren, col + 2]);
          this.modalConstruir(10);
          this.coordenadasConstruccion = coordenadas;
        }

        break;
      //vidrio
      case 4:
        if (
          ren < 3 &&
          this.matriz[ren + 1][col - 2] == 3 &&
          this.matriz[ren + 1][col] == 5 &&
          this.matriz[ren + 1][col - 1] == 5
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren + 1, col - 2]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren + 1, col - 1]);
          this.modalConstruir(10);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      //piedra,
      case 5:
        if (
          ren > 0 &&
          this.matriz[ren][col - 1] == 3 &&
          this.matriz[ren][col + 1] == 5 &&
          this.matriz[ren - 1][col + 1] == 4
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren - 1, col + 1]);
          this.modalConstruir(10);
          this.coordenadasConstruccion = coordenadas;
        } else if (
          ren > 0 &&
          this.matriz[ren - 1][col] == 4 &&
          this.matriz[ren][col - 1] == 5 &&
          this.matriz[ren][col - 2] == 3
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren, col - 2]);
          this.modalConstruir(10);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      default:
        break;
    }
  }

  validarAlmacen(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      //madera
      case 1:
        if (
          ren < 3 &&
          this.matriz[ren][col - 1] == 2 &&
          this.matriz[ren][col + 1] == 2 &&
          this.matriz[ren + 1][col + 1] == 3 &&
          this.matriz[ren + 1][col - 1] == 3
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren + 1, col + 1]);
          coordenadas.push([ren + 1, col - 1]);
          this.modalConstruir(11);
          this.coordenadasConstruccion = coordenadas;
        }

        break;
      //trigo
      case 2:
        if (
          ren < 3 &&
          this.matriz[ren][col + 1] == 1 &&
          this.matriz[ren + 1][col] == 3 &&
          this.matriz[ren][col + 2] == 2 &&
          this.matriz[ren + 1][col + 2] == 3
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren, col + 2]);
          coordenadas.push([ren + 1, col + 2]);
          this.modalConstruir(11);
          this.coordenadasConstruccion = coordenadas;
        } else if (
          ren < 3 &&
          this.matriz[ren][col - 1] == 1 &&
          this.matriz[ren + 1][col] == 3 &&
          this.matriz[ren][col - 2] == 2 &&
          this.matriz[ren + 1][col - 2] == 3
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren + 1, col]);
          coordenadas.push([ren, col - 2]);
          coordenadas.push([ren + 1, col - 2]);
          this.modalConstruir(11);
          this.coordenadasConstruccion = coordenadas;
        }
        break;

      //ladrillo
      case 3:
        if (
          ren > 0 &&
          this.matriz[ren - 1][col] == 2 &&
          this.matriz[ren - 1][col + 1] == 1 &&
          this.matriz[ren - 1][col + 2] == 2 &&
          this.matriz[ren][col + 2] == 3
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col + 1]);
          coordenadas.push([ren - 1, col + 2]);
          coordenadas.push([ren, col + 2]);
          this.modalConstruir(10);
          this.coordenadasConstruccion = coordenadas;
        } else if (
          ren > 0 &&
          this.matriz[ren - 1][col] == 2 &&
          this.matriz[ren - 1][col - 1] == 1 &&
          this.matriz[ren - 1][col - 2] == 2 &&
          this.matriz[ren][col - 2] == 3
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren - 1, col]);
          coordenadas.push([ren - 1, col - 1]);
          coordenadas.push([ren - 1, col - 2]);
          coordenadas.push([ren, col - 2]);
          this.modalConstruir(10);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      default:
        break;
    }
  }

  validarAsilo(ren, col, material) {
    let coordenadas = [];
    switch (material) {
      case 4:
        if (this.matriz[ren][col - 1] == 5 && this.matriz[ren][col - 2] == 5) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col - 1]);
          coordenadas.push([ren, col - 2]);
          this.modalConstruir(12);
          this.coordenadasConstruccion = coordenadas;
        }
        break;
      case 5:
        if (this.matriz[ren][col + 1] == 5 && this.matriz[ren][col + 2] == 4) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren, col + 2]);
          this.modalConstruir(12);
          this.coordenadasConstruccion = coordenadas;
        } else if (
          this.matriz[ren][col + 1] == 4 &&
          this.matriz[ren][col - 1] == 5
        ) {
          coordenadas.push([ren, col]);
          coordenadas.push([ren, col + 1]);
          coordenadas.push([ren, col - 1]);
          this.modalConstruir(12);
          this.coordenadasConstruccion = coordenadas;
        }
        break;

      default:
        break;
    }
  }

  // validarBanco(ren,col, material){
  //   let coordenadas = [];
  //   switch (material) {
  //     //madera
  //     case 1:
  //       if (ren > 0 &&
  //         this.matriz[ren - 1][col] == 2 &&
  //         this.matriz[ren-1][col + 1] == 2 &&
  //         this.matriz[ren][col + 1] == 5) {
  //         coordenadas.push([ren, col]);
  //         coordenadas.push([ren - 1, col]);
  //         coordenadas.push([ren, col - 1]);
  //         coordenadas.push([ren - 1, col - 1]);
  //         this.modalConstruir(23);
  //         this.coordenadasConstruccion = coordenadas;
  //       }
  //       break;

  //     //Trigo
  //     case 2:
  //       if (this.matriz[ren][col - 1] == 5 && this.matriz[ren + 1][col] == 1 && this.matriz[ren + 1][col - 1] == 2) {
  //         coordenadas.push([ren, col]);
  //         coordenadas.push([ren, col - 1]);
  //         coordenadas.push([ren + 1, col]);
  //         coordenadas.push([ren + 1, col - 1]);
  //         this.modalConstruir(23);
  //         this.coordenadasConstruccion = coordenadas;
  //       } else
  //         if (ren > 0 && this.matriz[ren][col + 1] == 1 && this.matriz[ren - 1][col] == 5 && this.matriz[ren - 1][col + 1] == 2) {
  //           coordenadas.push([ren, col]);
  //           coordenadas.push([ren, col + 1]);
  //           coordenadas.push([ren - 1, col]);
  //           coordenadas.push([ren - 1, col + 1]);
  //           this.modalConstruir(23);
  //           this.coordenadasConstruccion = coordenadas;
  //         }
  //       break;
  //     case 5:
  //       if (ren == 0) {
  //       } else {
  //         if (ren < 3 && this.matriz[ren + 1][col] == 2 && this.matriz[ren][col + 1] == 2 && this.matriz[ren + 1][col + 1] == 1) {
  //           coordenadas.push([ren, col]);
  //           coordenadas.push([ren - 1, col]);
  //           coordenadas.push([ren, col + 1]);
  //           coordenadas.push([ren + 1, col + 1]);
  //           this.modalConstruir(23);
  //           this.coordenadasConstruccion = coordenadas;
  //         }
  //       }
  //       break;
  //     //trigo

  //     default:
  //       break;
  //   }
  // }

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

    if (value === 'habilitar') {
      if (b1 > 0 && b1 < 35) {
        this.btn = true;
      } else {
        this.btn = false;
      }
      if (b2 > 0 && b2 < 35) {
        this.btn2 = true;
      } else {
        this.btn2 = false;
      }
      if (b3 > 0 && b3 < 35) {
        this.btn3 = true;
      } else {
        this.btn3 = false;
      }
      if (b4 > 0 && b4 < 35) {
        this.btn4 = true;
      } else {
        this.btn4 = false;
      }
      if (b5 > 0 && b5 < 35) {
        this.btn5 = true;
      } else {
        this.btn5 = false;
      }
      if (b6 > 0 && b6 < 35) {
        this.btn6 = true;
      } else {
        this.btn6 = false;
      }
      if (b7 > 0 && b7 < 35) {
        this.btn7 = true;
      } else {
        this.btn7 = false;
      }
      if (b8 > 0 && b8 < 35) {
        this.btn8 = true;
      } else {
        this.btn8 = false;
      }
      if (b9 > 0 && b9 < 35) {
        this.btn9 = true;
      } else {
        this.btn9 = false;
      }
      if (b10 > 0 && b10 < 35) {
        this.btn10 = true;
      } else {
        this.btn10 = false;
      }
      if (b11 > 0 && b11 < 35) {
        this.btn11 = true;
      } else {
        this.btn11 = false;
      }
      if (b12 > 0 && b12 < 35) {
        this.btn12 = true;
      } else {
        this.btn12 = false;
      }
      if (b13 > 0 && b13 < 35) {
        this.btn13 = true;
      } else {
        this.btn13 = false;
      }
      if (b14 > 0 && b14 < 35) {
        this.btn14 = true;
      } else {
        this.btn14 = false;
      }
      if (b15 > 0 && b15 < 35) {
        this.btn15 = true;
      } else {
        this.btn15 = false;
      }
      if (b16 > 0 && b16 < 35) {
        this.btn16 = true;
      } else {
        this.btn16 = false;
      }
    }
    if (value === 'construccion') {
      if (b1 == 100) {
        this.btn = false;
      } else {
        this.btn = true;
      }
      if (b2 == 100) {
        this.btn2 = false;
      } else {
        this.btn2 = true;
      }
      if (b3 == 100) {
        this.btn3 = false;
      } else {
        this.btn3 = true;
      }
      if (b4 == 100) {
        this.btn4 = false;
      } else {
        this.btn4 = true;
      }
      if (b5 == 100) {
        this.btn5 = false;
      } else {
        this.btn5 = true;
      }
      if (b6 == 100) {
        this.btn6 = false;
      } else {
        this.btn6 = true;
      }
      if (b7 == 100) {
        this.btn7 = false;
      } else {
        this.btn7 = true;
      }
      if (b8 == 100) {
        this.btn8 = false;
      } else {
        this.btn8 = true;
      }
      if (b9 == 100) {
        this.btn9 = false;
      } else {
        this.btn9 = true;
      }
      if (b10 == 100) {
        this.btn10 = false;
      } else {
        this.btn10 = true;
      }
      if (b11 == 100) {
        this.btn11 = false;
      } else {
        this.btn11 = true;
      }
      if (b12 == 100) {
        this.btn12 = false;
      } else {
        this.btn12 = true;
      }
      if (b13 == 100) {
        this.btn13 = false;
      } else {
        this.btn13 = true;
      }
      if (b14 == 100) {
        this.btn14 = false;
      } else {
        this.btn14 = true;
      }
      if (b15 == 100) {
        this.btn15 = false;
      } else {
        this.btn15 = true;
      }
      if (b16 == 100) {
        this.btn16 = false;
      } else {
        this.btn16 = true;
      }
    }
   
  }
}
