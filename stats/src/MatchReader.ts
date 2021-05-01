import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResults';

type MatchData = [Date, string, string, number, number, MatchResult, string];


interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {};

  // .map((row: string[]): MatchData => {
  //   return [
  //     dateStringToDate(row[0]),
  //     row[1],
  //     row[2],
  //     parseInt(row[3]),
  //     parseInt(row[4]),
  //     row[5] as MatchResult, // 'as' used to tell TS we know what the type should be at here.
  //     row[6],
  //   ]
  // });
}