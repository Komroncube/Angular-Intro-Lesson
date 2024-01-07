import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: "readNumber"
})
export class ReadNumberPipe implements PipeTransform {
    transform(value: number) {
        switch (value) {
            case 1:
                return 'bir'
            case 2:
                return 'ikki'
            case 3:
                return 'uch'
            case 4:
                return 'to\'rt'
            case 5:
                return 'besh'
            default:
                return 'boshqa'
        }
    }

}