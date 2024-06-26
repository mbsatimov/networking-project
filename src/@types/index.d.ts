type Role = 'GEN_CONTRACTOR' | 'SUB_CONTRACTOR' | 'PROJECT_MANAGER';

interface User {
  id: number;
  name: string;
  phoneNumber: string;
  role: Role;
}

interface GenContractor extends User {}

interface SubContractor extends User {}

interface ProjectManager extends User {}

interface Task {
  id: number;
  name: string;
  description: string | null;
  priority: number;
  ownerId: number;
  managerId: number | null;
  isDone: boolean;
}