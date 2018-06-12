import { EmployeeType } from "./employee-type.model";

export class Employee {
  id = 0;
  ci = '';
  firstName = '';
  lastName = '';
  birthDate = '';
  gender = '';
  email = '';
  phone = 0;
  address = '';
  salary = 0.0;
  employeeTypeId = 0;
  employeeType: EmployeeType;
  capacities = [];
  deleted = false;
}


export const gender = ['MALE', 'FEMALE'];
