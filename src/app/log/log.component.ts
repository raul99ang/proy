import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservasModel } from 'src/models/Reservas.model';
import Swal from 'sweetalert2';
import { ReservasService } from 'src/services/Reservas.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  
 
  mostrarActualizar: boolean = false;
  reservasAll: ReservasModel[] = [];
  id: number = 0;
  busqueda: string = '';
  searchTerm: string = '';
  searchText: string = '';
  reservas: any[] = [];
  private dataSubscription!: Subscription;

  constructor(private readonly ReservasService: ReservasService) { }

  async ngOnInit() {
    this.reservasAll = await this.ReservasService.getReservas();
    this.createDataObservable();
  }


  private createDataObservable() {
    const dataObservable = new Observable<ReservasModel[]>((observer) => {
      const fetchData = async () => {
        try {
          const data = await this.ReservasService.getReservas();
          observer.next(data);
        } catch (error) {
          observer.error(error);
        }
      };
      const interval = setInterval(fetchData, 1000);
      return () => {
        clearInterval(interval);
      };
    });

    this.dataSubscription = dataObservable.subscribe({
      next: (data) => {
        this.reservasAll = data;
      },
      error: (error) => {
        Swal.fire({
          icon: "error",
          text: error.error.msg
        });
      }
    });
  }




  obtenerReservas() {
    this.ReservasService.getReservas()
      .then((response: any) => {
        this.reservasAll = response.cont.reservasAll;
      })
      .catch((error: any) => {
        Swal.fire({
          icon: "error",
          text: error.error.msg
        });
      });
  }

  actualizar(idReservas: any) {
    this.id = idReservas;
    this.mostrarActualizar = true;
  }

  restableceRegistro() {
    this.mostrarActualizar = false;
    this.id;
    this.obtenerReservas();
  }
   eliminar(reservas: ReservasModel)
    {
    
    Swal.fire({
      icon: "question",
      title: `¿Estás seguro de eliminar?`,
      showCancelButton: true,
      confirmButtonText: 'yes',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.ReservasService.deleteReservas(reservas.ID )
          .then((response: any) => {
            Swal.fire({
              icon: "info",
              text: "Eliminado exitosamente"
            });
            this.obtenerReservas();
          })
          .catch((error: any) => {
            Swal.fire({
              icon: "error",
              text: "Error al eliminar la reserva."
            });
          })
      }
    })
  }
  


  buscar() {
    if (this.searchText === '') {
      this.reservasAll = this.reservas;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.reservasAll = this.reservas.filter(reservas =>
        reservas.iD.toLowerCase().includes(this.searchText.toLowerCase())
      )
    }
  }
}