import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  async fetch(): Promise<void> {
    try {
      const res: AxiosResponse = await axios.get(
        `http://localhost:3000/users/${this.get('id')}`
      );
      this.set(res.data);
    } catch (e) {}
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}
