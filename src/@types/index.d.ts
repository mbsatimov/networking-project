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