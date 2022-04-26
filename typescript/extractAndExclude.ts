type Exclude<T, U> = T extends U ? never : T;

type Extract<T, U> = T extends U ? T : never;
