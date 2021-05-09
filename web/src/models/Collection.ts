import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { User, UserProps } from './User';
import { Eventing } from './Eventing';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetch(): Promise<void> {
    const res: AxiosResponse = await axios.get(this.rootUrl);
    res.data.forEach((value: UserProps) => {
      const user = User.buildUser(value);
      this.models.push(user);
    });
    this.trigger('change');
  }
}
