interface User {
  id: number;
  name: string;
  phoneNumber: string;
}

interface GenContractor extends User {}

interface SubContractor extends User {}

interface ProjectManager extends User {}

interface Product {
  id: number;
  name: string;
  description: string | null;
  quantity: number;
  phoneNumber: string;
  price: number;
}

interface Customer {
  id: number;
  name: string;
  surname: string;
  phoneNumber: string;
}

interface Employee {
  id: number;
  name: string;
  surname: string;
  phoneNumber: string;
  department: string;
}