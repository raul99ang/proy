import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservasModel } from '../models/Reservas.model';
import { ReservasService } from '../services/Reservas.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Reservas-detail',
  templateUrl: './Reservas-detail.component.html',
  styleUrls: ['./Reservas-detail.component.css']
})
export class ReservasDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        reservas: ReservasModel = new ReservasModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly ReservasService: ReservasService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.ReservasService.getReservasById(this.id)
        .then((response: any) => {
          this.reservas = response.cont.Reservas;
        })
        .catch(() => {});
    }
  }

  submitReservas(forma: NgForm){
    if (this.isNew)
    {
        this.ReservasService.postReservas(this.reservas)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Reservas has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Reservas"
            });
        });
        } else
        {

            this.ReservasService.putReservas(this.reservas, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Reservas has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Reservas"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    