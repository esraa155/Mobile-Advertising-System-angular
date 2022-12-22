import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  governorateList: string[] = ['Cairo', 'Giza', 'Alex'];
  adminSectionList: string[] = ['CStlll', 'الساحل الشمالي', 'ظهير صحراوي البحيرة'];
  sheiakhaList: string[] = ['مركز الخانكة', 'مركز المناصرة - شياخة المناصرة', 'مركز ابشواي - مدينة ابشواي'];

  constructor() { }

  getGovernorateList(): string[]
  {
    return this.governorateList;
  }

  getAdminSectionList(): string[]
  {
    return this.adminSectionList;
  }

  getSheiakhaList(): string[]
  {
    return this.sheiakhaList;
  }
}
