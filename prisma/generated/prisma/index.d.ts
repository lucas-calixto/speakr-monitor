
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdmUsers
 * 
 */
export type AdmUsers = $Result.DefaultSelection<Prisma.$AdmUsersPayload>
/**
 * Model Clients
 * 
 */
export type Clients = $Result.DefaultSelection<Prisma.$ClientsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Contracts
 * 
 */
export type Contracts = $Result.DefaultSelection<Prisma.$ContractsPayload>
/**
 * Model Extensions
 * 
 */
export type Extensions = $Result.DefaultSelection<Prisma.$ExtensionsPayload>
/**
 * Model Queues
 * 
 */
export type Queues = $Result.DefaultSelection<Prisma.$QueuesPayload>
/**
 * Model Numbers
 * 
 */
export type Numbers = $Result.DefaultSelection<Prisma.$NumbersPayload>
/**
 * Model Cdr
 * 
 */
export type Cdr = $Result.DefaultSelection<Prisma.$CdrPayload>
/**
 * Model Devices
 * 
 */
export type Devices = $Result.DefaultSelection<Prisma.$DevicesPayload>
/**
 * Model Invoices
 * 
 */
export type Invoices = $Result.DefaultSelection<Prisma.$InvoicesPayload>
/**
 * Model CallsHistory
 * 
 */
export type CallsHistory = $Result.DefaultSelection<Prisma.$CallsHistoryPayload>
/**
 * Model cdr_lucas
 * 
 */
export type cdr_lucas = $Result.DefaultSelection<Prisma.$cdr_lucasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdmUsers
 * const admUsers = await prisma.admUsers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AdmUsers
   * const admUsers = await prisma.admUsers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admUsers`: Exposes CRUD operations for the **AdmUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdmUsers
    * const admUsers = await prisma.admUsers.findMany()
    * ```
    */
  get admUsers(): Prisma.AdmUsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **Clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.ClientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contracts`: Exposes CRUD operations for the **Contracts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contracts.findMany()
    * ```
    */
  get contracts(): Prisma.ContractsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extensions`: Exposes CRUD operations for the **Extensions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extensions
    * const extensions = await prisma.extensions.findMany()
    * ```
    */
  get extensions(): Prisma.ExtensionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.queues`: Exposes CRUD operations for the **Queues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queues
    * const queues = await prisma.queues.findMany()
    * ```
    */
  get queues(): Prisma.QueuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.numbers`: Exposes CRUD operations for the **Numbers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Numbers
    * const numbers = await prisma.numbers.findMany()
    * ```
    */
  get numbers(): Prisma.NumbersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cdr`: Exposes CRUD operations for the **Cdr** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cdrs
    * const cdrs = await prisma.cdr.findMany()
    * ```
    */
  get cdr(): Prisma.CdrDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devices`: Exposes CRUD operations for the **Devices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.devices.findMany()
    * ```
    */
  get devices(): Prisma.DevicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **Invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.InvoicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.callsHistory`: Exposes CRUD operations for the **CallsHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CallsHistories
    * const callsHistories = await prisma.callsHistory.findMany()
    * ```
    */
  get callsHistory(): Prisma.CallsHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cdr_lucas`: Exposes CRUD operations for the **cdr_lucas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cdr_lucas
    * const cdr_lucas = await prisma.cdr_lucas.findMany()
    * ```
    */
  get cdr_lucas(): Prisma.cdr_lucasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdmUsers: 'AdmUsers',
    Clients: 'Clients',
    Users: 'Users',
    Contracts: 'Contracts',
    Extensions: 'Extensions',
    Queues: 'Queues',
    Numbers: 'Numbers',
    Cdr: 'Cdr',
    Devices: 'Devices',
    Invoices: 'Invoices',
    CallsHistory: 'CallsHistory',
    cdr_lucas: 'cdr_lucas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admUsers" | "clients" | "users" | "contracts" | "extensions" | "queues" | "numbers" | "cdr" | "devices" | "invoices" | "callsHistory" | "cdr_lucas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdmUsers: {
        payload: Prisma.$AdmUsersPayload<ExtArgs>
        fields: Prisma.AdmUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmUsersPayload>
          }
          findFirst: {
            args: Prisma.AdmUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmUsersPayload>
          }
          findMany: {
            args: Prisma.AdmUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmUsersPayload>[]
          }
          create: {
            args: Prisma.AdmUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmUsersPayload>
          }
          createMany: {
            args: Prisma.AdmUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdmUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmUsersPayload>
          }
          update: {
            args: Prisma.AdmUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmUsersPayload>
          }
          deleteMany: {
            args: Prisma.AdmUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdmUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmUsersPayload>
          }
          aggregate: {
            args: Prisma.AdmUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmUsers>
          }
          groupBy: {
            args: Prisma.AdmUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmUsersCountArgs<ExtArgs>
            result: $Utils.Optional<AdmUsersCountAggregateOutputType> | number
          }
        }
      }
      Clients: {
        payload: Prisma.$ClientsPayload<ExtArgs>
        fields: Prisma.ClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findFirst: {
            args: Prisma.ClientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findMany: {
            args: Prisma.ClientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          create: {
            args: Prisma.ClientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          createMany: {
            args: Prisma.ClientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          update: {
            args: Prisma.ClientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.ClientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Contracts: {
        payload: Prisma.$ContractsPayload<ExtArgs>
        fields: Prisma.ContractsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          findFirst: {
            args: Prisma.ContractsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          findMany: {
            args: Prisma.ContractsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>[]
          }
          create: {
            args: Prisma.ContractsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          createMany: {
            args: Prisma.ContractsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContractsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          update: {
            args: Prisma.ContractsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          deleteMany: {
            args: Prisma.ContractsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          aggregate: {
            args: Prisma.ContractsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContracts>
          }
          groupBy: {
            args: Prisma.ContractsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractsCountArgs<ExtArgs>
            result: $Utils.Optional<ContractsCountAggregateOutputType> | number
          }
        }
      }
      Extensions: {
        payload: Prisma.$ExtensionsPayload<ExtArgs>
        fields: Prisma.ExtensionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExtensionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtensionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExtensionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtensionsPayload>
          }
          findFirst: {
            args: Prisma.ExtensionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtensionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExtensionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtensionsPayload>
          }
          findMany: {
            args: Prisma.ExtensionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtensionsPayload>[]
          }
          create: {
            args: Prisma.ExtensionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtensionsPayload>
          }
          createMany: {
            args: Prisma.ExtensionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExtensionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtensionsPayload>
          }
          update: {
            args: Prisma.ExtensionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtensionsPayload>
          }
          deleteMany: {
            args: Prisma.ExtensionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExtensionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExtensionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtensionsPayload>
          }
          aggregate: {
            args: Prisma.ExtensionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtensions>
          }
          groupBy: {
            args: Prisma.ExtensionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtensionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExtensionsCountArgs<ExtArgs>
            result: $Utils.Optional<ExtensionsCountAggregateOutputType> | number
          }
        }
      }
      Queues: {
        payload: Prisma.$QueuesPayload<ExtArgs>
        fields: Prisma.QueuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuesPayload>
          }
          findFirst: {
            args: Prisma.QueuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuesPayload>
          }
          findMany: {
            args: Prisma.QueuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuesPayload>[]
          }
          create: {
            args: Prisma.QueuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuesPayload>
          }
          createMany: {
            args: Prisma.QueuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QueuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuesPayload>
          }
          update: {
            args: Prisma.QueuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuesPayload>
          }
          deleteMany: {
            args: Prisma.QueuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QueuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuesPayload>
          }
          aggregate: {
            args: Prisma.QueuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueues>
          }
          groupBy: {
            args: Prisma.QueuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueuesCountArgs<ExtArgs>
            result: $Utils.Optional<QueuesCountAggregateOutputType> | number
          }
        }
      }
      Numbers: {
        payload: Prisma.$NumbersPayload<ExtArgs>
        fields: Prisma.NumbersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NumbersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NumbersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          findFirst: {
            args: Prisma.NumbersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NumbersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          findMany: {
            args: Prisma.NumbersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>[]
          }
          create: {
            args: Prisma.NumbersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          createMany: {
            args: Prisma.NumbersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NumbersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          update: {
            args: Prisma.NumbersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          deleteMany: {
            args: Prisma.NumbersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NumbersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NumbersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          aggregate: {
            args: Prisma.NumbersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNumbers>
          }
          groupBy: {
            args: Prisma.NumbersGroupByArgs<ExtArgs>
            result: $Utils.Optional<NumbersGroupByOutputType>[]
          }
          count: {
            args: Prisma.NumbersCountArgs<ExtArgs>
            result: $Utils.Optional<NumbersCountAggregateOutputType> | number
          }
        }
      }
      Cdr: {
        payload: Prisma.$CdrPayload<ExtArgs>
        fields: Prisma.CdrFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CdrFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CdrPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CdrFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CdrPayload>
          }
          findFirst: {
            args: Prisma.CdrFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CdrPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CdrFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CdrPayload>
          }
          findMany: {
            args: Prisma.CdrFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CdrPayload>[]
          }
          create: {
            args: Prisma.CdrCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CdrPayload>
          }
          createMany: {
            args: Prisma.CdrCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CdrDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CdrPayload>
          }
          update: {
            args: Prisma.CdrUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CdrPayload>
          }
          deleteMany: {
            args: Prisma.CdrDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CdrUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CdrUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CdrPayload>
          }
          aggregate: {
            args: Prisma.CdrAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCdr>
          }
          groupBy: {
            args: Prisma.CdrGroupByArgs<ExtArgs>
            result: $Utils.Optional<CdrGroupByOutputType>[]
          }
          count: {
            args: Prisma.CdrCountArgs<ExtArgs>
            result: $Utils.Optional<CdrCountAggregateOutputType> | number
          }
        }
      }
      Devices: {
        payload: Prisma.$DevicesPayload<ExtArgs>
        fields: Prisma.DevicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          findFirst: {
            args: Prisma.DevicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          findMany: {
            args: Prisma.DevicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>[]
          }
          create: {
            args: Prisma.DevicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          createMany: {
            args: Prisma.DevicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DevicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          update: {
            args: Prisma.DevicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          deleteMany: {
            args: Prisma.DevicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DevicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          aggregate: {
            args: Prisma.DevicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevices>
          }
          groupBy: {
            args: Prisma.DevicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevicesCountArgs<ExtArgs>
            result: $Utils.Optional<DevicesCountAggregateOutputType> | number
          }
        }
      }
      Invoices: {
        payload: Prisma.$InvoicesPayload<ExtArgs>
        fields: Prisma.InvoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          findFirst: {
            args: Prisma.InvoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          findMany: {
            args: Prisma.InvoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          create: {
            args: Prisma.InvoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          createMany: {
            args: Prisma.InvoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          update: {
            args: Prisma.InvoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          deleteMany: {
            args: Prisma.InvoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.InvoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      CallsHistory: {
        payload: Prisma.$CallsHistoryPayload<ExtArgs>
        fields: Prisma.CallsHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallsHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallsHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallsHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallsHistoryPayload>
          }
          findFirst: {
            args: Prisma.CallsHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallsHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallsHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallsHistoryPayload>
          }
          findMany: {
            args: Prisma.CallsHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallsHistoryPayload>[]
          }
          create: {
            args: Prisma.CallsHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallsHistoryPayload>
          }
          createMany: {
            args: Prisma.CallsHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CallsHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallsHistoryPayload>
          }
          update: {
            args: Prisma.CallsHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallsHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CallsHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallsHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CallsHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallsHistoryPayload>
          }
          aggregate: {
            args: Prisma.CallsHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCallsHistory>
          }
          groupBy: {
            args: Prisma.CallsHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallsHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallsHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CallsHistoryCountAggregateOutputType> | number
          }
        }
      }
      cdr_lucas: {
        payload: Prisma.$cdr_lucasPayload<ExtArgs>
        fields: Prisma.cdr_lucasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cdr_lucasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cdr_lucasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cdr_lucasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cdr_lucasPayload>
          }
          findFirst: {
            args: Prisma.cdr_lucasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cdr_lucasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cdr_lucasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cdr_lucasPayload>
          }
          findMany: {
            args: Prisma.cdr_lucasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cdr_lucasPayload>[]
          }
          create: {
            args: Prisma.cdr_lucasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cdr_lucasPayload>
          }
          createMany: {
            args: Prisma.cdr_lucasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cdr_lucasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cdr_lucasPayload>
          }
          update: {
            args: Prisma.cdr_lucasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cdr_lucasPayload>
          }
          deleteMany: {
            args: Prisma.cdr_lucasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cdr_lucasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cdr_lucasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cdr_lucasPayload>
          }
          aggregate: {
            args: Prisma.Cdr_lucasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCdr_lucas>
          }
          groupBy: {
            args: Prisma.cdr_lucasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cdr_lucasGroupByOutputType>[]
          }
          count: {
            args: Prisma.cdr_lucasCountArgs<ExtArgs>
            result: $Utils.Optional<Cdr_lucasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admUsers?: AdmUsersOmit
    clients?: ClientsOmit
    users?: UsersOmit
    contracts?: ContractsOmit
    extensions?: ExtensionsOmit
    queues?: QueuesOmit
    numbers?: NumbersOmit
    cdr?: CdrOmit
    devices?: DevicesOmit
    invoices?: InvoicesOmit
    callsHistory?: CallsHistoryOmit
    cdr_lucas?: cdr_lucasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    Users: number
    Contracts: number
    Extensions: number
    Queues: number
    Numbers: number
    Cdr: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | ClientsCountOutputTypeCountUsersArgs
    Contracts?: boolean | ClientsCountOutputTypeCountContractsArgs
    Extensions?: boolean | ClientsCountOutputTypeCountExtensionsArgs
    Queues?: boolean | ClientsCountOutputTypeCountQueuesArgs
    Numbers?: boolean | ClientsCountOutputTypeCountNumbersArgs
    Cdr?: boolean | ClientsCountOutputTypeCountCdrArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractsWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountExtensionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtensionsWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueuesWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumbersWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountCdrArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CdrWhereInput
  }


  /**
   * Count Type ContractsCountOutputType
   */

  export type ContractsCountOutputType = {
    Devices: number
    Invoices: number
  }

  export type ContractsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Devices?: boolean | ContractsCountOutputTypeCountDevicesArgs
    Invoices?: boolean | ContractsCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * ContractsCountOutputType without action
   */
  export type ContractsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractsCountOutputType
     */
    select?: ContractsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractsCountOutputType without action
   */
  export type ContractsCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevicesWhereInput
  }

  /**
   * ContractsCountOutputType without action
   */
  export type ContractsCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdmUsers
   */

  export type AggregateAdmUsers = {
    _count: AdmUsersCountAggregateOutputType | null
    _avg: AdmUsersAvgAggregateOutputType | null
    _sum: AdmUsersSumAggregateOutputType | null
    _min: AdmUsersMinAggregateOutputType | null
    _max: AdmUsersMaxAggregateOutputType | null
  }

  export type AdmUsersAvgAggregateOutputType = {
    id: number | null
  }

  export type AdmUsersSumAggregateOutputType = {
    id: number | null
  }

  export type AdmUsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    recoveryToken: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmUsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    recoveryToken: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmUsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    recoveryToken: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdmUsersAvgAggregateInputType = {
    id?: true
  }

  export type AdmUsersSumAggregateInputType = {
    id?: true
  }

  export type AdmUsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    recoveryToken?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmUsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    recoveryToken?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmUsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    recoveryToken?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdmUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmUsers to aggregate.
     */
    where?: AdmUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmUsers to fetch.
     */
    orderBy?: AdmUsersOrderByWithRelationInput | AdmUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdmUsers
    **/
    _count?: true | AdmUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmUsersMaxAggregateInputType
  }

  export type GetAdmUsersAggregateType<T extends AdmUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmUsers[P]>
      : GetScalarType<T[P], AggregateAdmUsers[P]>
  }




  export type AdmUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmUsersWhereInput
    orderBy?: AdmUsersOrderByWithAggregationInput | AdmUsersOrderByWithAggregationInput[]
    by: AdmUsersScalarFieldEnum[] | AdmUsersScalarFieldEnum
    having?: AdmUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmUsersCountAggregateInputType | true
    _avg?: AdmUsersAvgAggregateInputType
    _sum?: AdmUsersSumAggregateInputType
    _min?: AdmUsersMinAggregateInputType
    _max?: AdmUsersMaxAggregateInputType
  }

  export type AdmUsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string | null
    recoveryToken: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdmUsersCountAggregateOutputType | null
    _avg: AdmUsersAvgAggregateOutputType | null
    _sum: AdmUsersSumAggregateOutputType | null
    _min: AdmUsersMinAggregateOutputType | null
    _max: AdmUsersMaxAggregateOutputType | null
  }

  type GetAdmUsersGroupByPayload<T extends AdmUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmUsersGroupByOutputType[P]>
            : GetScalarType<T[P], AdmUsersGroupByOutputType[P]>
        }
      >
    >


  export type AdmUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    recoveryToken?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admUsers"]>



  export type AdmUsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    recoveryToken?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdmUsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "recoveryToken" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["admUsers"]>

  export type $AdmUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdmUsers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string | null
      recoveryToken: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admUsers"]>
    composites: {}
  }

  type AdmUsersGetPayload<S extends boolean | null | undefined | AdmUsersDefaultArgs> = $Result.GetResult<Prisma.$AdmUsersPayload, S>

  type AdmUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmUsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmUsersCountAggregateInputType | true
    }

  export interface AdmUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdmUsers'], meta: { name: 'AdmUsers' } }
    /**
     * Find zero or one AdmUsers that matches the filter.
     * @param {AdmUsersFindUniqueArgs} args - Arguments to find a AdmUsers
     * @example
     * // Get one AdmUsers
     * const admUsers = await prisma.admUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmUsersFindUniqueArgs>(args: SelectSubset<T, AdmUsersFindUniqueArgs<ExtArgs>>): Prisma__AdmUsersClient<$Result.GetResult<Prisma.$AdmUsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdmUsers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmUsersFindUniqueOrThrowArgs} args - Arguments to find a AdmUsers
     * @example
     * // Get one AdmUsers
     * const admUsers = await prisma.admUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmUsersClient<$Result.GetResult<Prisma.$AdmUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmUsersFindFirstArgs} args - Arguments to find a AdmUsers
     * @example
     * // Get one AdmUsers
     * const admUsers = await prisma.admUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmUsersFindFirstArgs>(args?: SelectSubset<T, AdmUsersFindFirstArgs<ExtArgs>>): Prisma__AdmUsersClient<$Result.GetResult<Prisma.$AdmUsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmUsersFindFirstOrThrowArgs} args - Arguments to find a AdmUsers
     * @example
     * // Get one AdmUsers
     * const admUsers = await prisma.admUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmUsersClient<$Result.GetResult<Prisma.$AdmUsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdmUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdmUsers
     * const admUsers = await prisma.admUsers.findMany()
     * 
     * // Get first 10 AdmUsers
     * const admUsers = await prisma.admUsers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admUsersWithIdOnly = await prisma.admUsers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmUsersFindManyArgs>(args?: SelectSubset<T, AdmUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdmUsers.
     * @param {AdmUsersCreateArgs} args - Arguments to create a AdmUsers.
     * @example
     * // Create one AdmUsers
     * const AdmUsers = await prisma.admUsers.create({
     *   data: {
     *     // ... data to create a AdmUsers
     *   }
     * })
     * 
     */
    create<T extends AdmUsersCreateArgs>(args: SelectSubset<T, AdmUsersCreateArgs<ExtArgs>>): Prisma__AdmUsersClient<$Result.GetResult<Prisma.$AdmUsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdmUsers.
     * @param {AdmUsersCreateManyArgs} args - Arguments to create many AdmUsers.
     * @example
     * // Create many AdmUsers
     * const admUsers = await prisma.admUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmUsersCreateManyArgs>(args?: SelectSubset<T, AdmUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdmUsers.
     * @param {AdmUsersDeleteArgs} args - Arguments to delete one AdmUsers.
     * @example
     * // Delete one AdmUsers
     * const AdmUsers = await prisma.admUsers.delete({
     *   where: {
     *     // ... filter to delete one AdmUsers
     *   }
     * })
     * 
     */
    delete<T extends AdmUsersDeleteArgs>(args: SelectSubset<T, AdmUsersDeleteArgs<ExtArgs>>): Prisma__AdmUsersClient<$Result.GetResult<Prisma.$AdmUsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdmUsers.
     * @param {AdmUsersUpdateArgs} args - Arguments to update one AdmUsers.
     * @example
     * // Update one AdmUsers
     * const admUsers = await prisma.admUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmUsersUpdateArgs>(args: SelectSubset<T, AdmUsersUpdateArgs<ExtArgs>>): Prisma__AdmUsersClient<$Result.GetResult<Prisma.$AdmUsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdmUsers.
     * @param {AdmUsersDeleteManyArgs} args - Arguments to filter AdmUsers to delete.
     * @example
     * // Delete a few AdmUsers
     * const { count } = await prisma.admUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmUsersDeleteManyArgs>(args?: SelectSubset<T, AdmUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdmUsers
     * const admUsers = await prisma.admUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmUsersUpdateManyArgs>(args: SelectSubset<T, AdmUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdmUsers.
     * @param {AdmUsersUpsertArgs} args - Arguments to update or create a AdmUsers.
     * @example
     * // Update or create a AdmUsers
     * const admUsers = await prisma.admUsers.upsert({
     *   create: {
     *     // ... data to create a AdmUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdmUsers we want to update
     *   }
     * })
     */
    upsert<T extends AdmUsersUpsertArgs>(args: SelectSubset<T, AdmUsersUpsertArgs<ExtArgs>>): Prisma__AdmUsersClient<$Result.GetResult<Prisma.$AdmUsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdmUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmUsersCountArgs} args - Arguments to filter AdmUsers to count.
     * @example
     * // Count the number of AdmUsers
     * const count = await prisma.admUsers.count({
     *   where: {
     *     // ... the filter for the AdmUsers we want to count
     *   }
     * })
    **/
    count<T extends AdmUsersCountArgs>(
      args?: Subset<T, AdmUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdmUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdmUsersAggregateArgs>(args: Subset<T, AdmUsersAggregateArgs>): Prisma.PrismaPromise<GetAdmUsersAggregateType<T>>

    /**
     * Group by AdmUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdmUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmUsersGroupByArgs['orderBy'] }
        : { orderBy?: AdmUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdmUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdmUsers model
   */
  readonly fields: AdmUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdmUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdmUsers model
   */
  interface AdmUsersFieldRefs {
    readonly id: FieldRef<"AdmUsers", 'Int'>
    readonly name: FieldRef<"AdmUsers", 'String'>
    readonly email: FieldRef<"AdmUsers", 'String'>
    readonly password: FieldRef<"AdmUsers", 'String'>
    readonly recoveryToken: FieldRef<"AdmUsers", 'String'>
    readonly isActive: FieldRef<"AdmUsers", 'Boolean'>
    readonly createdAt: FieldRef<"AdmUsers", 'DateTime'>
    readonly updatedAt: FieldRef<"AdmUsers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdmUsers findUnique
   */
  export type AdmUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
    /**
     * Filter, which AdmUsers to fetch.
     */
    where: AdmUsersWhereUniqueInput
  }

  /**
   * AdmUsers findUniqueOrThrow
   */
  export type AdmUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
    /**
     * Filter, which AdmUsers to fetch.
     */
    where: AdmUsersWhereUniqueInput
  }

  /**
   * AdmUsers findFirst
   */
  export type AdmUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
    /**
     * Filter, which AdmUsers to fetch.
     */
    where?: AdmUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmUsers to fetch.
     */
    orderBy?: AdmUsersOrderByWithRelationInput | AdmUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmUsers.
     */
    cursor?: AdmUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmUsers.
     */
    distinct?: AdmUsersScalarFieldEnum | AdmUsersScalarFieldEnum[]
  }

  /**
   * AdmUsers findFirstOrThrow
   */
  export type AdmUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
    /**
     * Filter, which AdmUsers to fetch.
     */
    where?: AdmUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmUsers to fetch.
     */
    orderBy?: AdmUsersOrderByWithRelationInput | AdmUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmUsers.
     */
    cursor?: AdmUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmUsers.
     */
    distinct?: AdmUsersScalarFieldEnum | AdmUsersScalarFieldEnum[]
  }

  /**
   * AdmUsers findMany
   */
  export type AdmUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
    /**
     * Filter, which AdmUsers to fetch.
     */
    where?: AdmUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmUsers to fetch.
     */
    orderBy?: AdmUsersOrderByWithRelationInput | AdmUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdmUsers.
     */
    cursor?: AdmUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmUsers.
     */
    skip?: number
    distinct?: AdmUsersScalarFieldEnum | AdmUsersScalarFieldEnum[]
  }

  /**
   * AdmUsers create
   */
  export type AdmUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
    /**
     * The data needed to create a AdmUsers.
     */
    data: XOR<AdmUsersCreateInput, AdmUsersUncheckedCreateInput>
  }

  /**
   * AdmUsers createMany
   */
  export type AdmUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdmUsers.
     */
    data: AdmUsersCreateManyInput | AdmUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdmUsers update
   */
  export type AdmUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
    /**
     * The data needed to update a AdmUsers.
     */
    data: XOR<AdmUsersUpdateInput, AdmUsersUncheckedUpdateInput>
    /**
     * Choose, which AdmUsers to update.
     */
    where: AdmUsersWhereUniqueInput
  }

  /**
   * AdmUsers updateMany
   */
  export type AdmUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdmUsers.
     */
    data: XOR<AdmUsersUpdateManyMutationInput, AdmUsersUncheckedUpdateManyInput>
    /**
     * Filter which AdmUsers to update
     */
    where?: AdmUsersWhereInput
    /**
     * Limit how many AdmUsers to update.
     */
    limit?: number
  }

  /**
   * AdmUsers upsert
   */
  export type AdmUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
    /**
     * The filter to search for the AdmUsers to update in case it exists.
     */
    where: AdmUsersWhereUniqueInput
    /**
     * In case the AdmUsers found by the `where` argument doesn't exist, create a new AdmUsers with this data.
     */
    create: XOR<AdmUsersCreateInput, AdmUsersUncheckedCreateInput>
    /**
     * In case the AdmUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmUsersUpdateInput, AdmUsersUncheckedUpdateInput>
  }

  /**
   * AdmUsers delete
   */
  export type AdmUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
    /**
     * Filter which AdmUsers to delete.
     */
    where: AdmUsersWhereUniqueInput
  }

  /**
   * AdmUsers deleteMany
   */
  export type AdmUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmUsers to delete
     */
    where?: AdmUsersWhereInput
    /**
     * Limit how many AdmUsers to delete.
     */
    limit?: number
  }

  /**
   * AdmUsers without action
   */
  export type AdmUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmUsers
     */
    select?: AdmUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmUsers
     */
    omit?: AdmUsersOmit<ExtArgs> | null
  }


  /**
   * Model Clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientsSumAggregateOutputType = {
    id: number | null
  }

  export type ClientsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    cpfCnpj: string | null
    type: string | null
    phoneNumber: string | null
    street: string | null
    district: string | null
    number: string | null
    city: string | null
    zipCode: string | null
    state: string | null
    isActive: boolean | null
    observation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    cpfCnpj: string | null
    type: string | null
    phoneNumber: string | null
    street: string | null
    district: string | null
    number: string | null
    city: string | null
    zipCode: string | null
    state: string | null
    isActive: boolean | null
    observation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    cpfCnpj: number
    type: number
    phoneNumber: number
    street: number
    district: number
    number: number
    city: number
    zipCode: number
    state: number
    isActive: number
    observation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    id?: true
  }

  export type ClientsSumAggregateInputType = {
    id?: true
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpfCnpj?: true
    type?: true
    phoneNumber?: true
    street?: true
    district?: true
    number?: true
    city?: true
    zipCode?: true
    state?: true
    isActive?: true
    observation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpfCnpj?: true
    type?: true
    phoneNumber?: true
    street?: true
    district?: true
    number?: true
    city?: true
    zipCode?: true
    state?: true
    isActive?: true
    observation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpfCnpj?: true
    type?: true
    phoneNumber?: true
    street?: true
    district?: true
    number?: true
    city?: true
    zipCode?: true
    state?: true
    isActive?: true
    observation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to aggregate.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type ClientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithAggregationInput | ClientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: ClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: number
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type ClientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cpfCnpj?: boolean
    type?: boolean
    phoneNumber?: boolean
    street?: boolean
    district?: boolean
    number?: boolean
    city?: boolean
    zipCode?: boolean
    state?: boolean
    isActive?: boolean
    observation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | Clients$UsersArgs<ExtArgs>
    Contracts?: boolean | Clients$ContractsArgs<ExtArgs>
    Extensions?: boolean | Clients$ExtensionsArgs<ExtArgs>
    Queues?: boolean | Clients$QueuesArgs<ExtArgs>
    Numbers?: boolean | Clients$NumbersArgs<ExtArgs>
    Cdr?: boolean | Clients$CdrArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>



  export type ClientsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    cpfCnpj?: boolean
    type?: boolean
    phoneNumber?: boolean
    street?: boolean
    district?: boolean
    number?: boolean
    city?: boolean
    zipCode?: boolean
    state?: boolean
    isActive?: boolean
    observation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "cpfCnpj" | "type" | "phoneNumber" | "street" | "district" | "number" | "city" | "zipCode" | "state" | "isActive" | "observation" | "createdAt" | "updatedAt", ExtArgs["result"]["clients"]>
  export type ClientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Clients$UsersArgs<ExtArgs>
    Contracts?: boolean | Clients$ContractsArgs<ExtArgs>
    Extensions?: boolean | Clients$ExtensionsArgs<ExtArgs>
    Queues?: boolean | Clients$QueuesArgs<ExtArgs>
    Numbers?: boolean | Clients$NumbersArgs<ExtArgs>
    Cdr?: boolean | Clients$CdrArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clients"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>[]
      Contracts: Prisma.$ContractsPayload<ExtArgs>[]
      Extensions: Prisma.$ExtensionsPayload<ExtArgs>[]
      Queues: Prisma.$QueuesPayload<ExtArgs>[]
      Numbers: Prisma.$NumbersPayload<ExtArgs>[]
      Cdr: Prisma.$CdrPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      cpfCnpj: string
      type: string
      phoneNumber: string
      street: string
      district: string
      number: string | null
      city: string
      zipCode: string
      state: string
      isActive: boolean
      observation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type ClientsGetPayload<S extends boolean | null | undefined | ClientsDefaultArgs> = $Result.GetResult<Prisma.$ClientsPayload, S>

  type ClientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface ClientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clients'], meta: { name: 'Clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {ClientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientsFindUniqueArgs>(args: SelectSubset<T, ClientsFindUniqueArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientsFindFirstArgs>(args?: SelectSubset<T, ClientsFindFirstArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientsFindManyArgs>(args?: SelectSubset<T, ClientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clients.
     * @param {ClientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends ClientsCreateArgs>(args: SelectSubset<T, ClientsCreateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientsCreateManyArgs>(args?: SelectSubset<T, ClientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clients.
     * @param {ClientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends ClientsDeleteArgs>(args: SelectSubset<T, ClientsDeleteArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clients.
     * @param {ClientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientsUpdateArgs>(args: SelectSubset<T, ClientsUpdateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientsDeleteManyArgs>(args?: SelectSubset<T, ClientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientsUpdateManyArgs>(args: SelectSubset<T, ClientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clients.
     * @param {ClientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends ClientsUpsertArgs>(args: SelectSubset<T, ClientsUpsertArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientsCountArgs>(
      args?: Subset<T, ClientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clients model
   */
  readonly fields: ClientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Clients$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Clients$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Contracts<T extends Clients$ContractsArgs<ExtArgs> = {}>(args?: Subset<T, Clients$ContractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Extensions<T extends Clients$ExtensionsArgs<ExtArgs> = {}>(args?: Subset<T, Clients$ExtensionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Queues<T extends Clients$QueuesArgs<ExtArgs> = {}>(args?: Subset<T, Clients$QueuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Numbers<T extends Clients$NumbersArgs<ExtArgs> = {}>(args?: Subset<T, Clients$NumbersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cdr<T extends Clients$CdrArgs<ExtArgs> = {}>(args?: Subset<T, Clients$CdrArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clients model
   */
  interface ClientsFieldRefs {
    readonly id: FieldRef<"Clients", 'Int'>
    readonly name: FieldRef<"Clients", 'String'>
    readonly email: FieldRef<"Clients", 'String'>
    readonly cpfCnpj: FieldRef<"Clients", 'String'>
    readonly type: FieldRef<"Clients", 'String'>
    readonly phoneNumber: FieldRef<"Clients", 'String'>
    readonly street: FieldRef<"Clients", 'String'>
    readonly district: FieldRef<"Clients", 'String'>
    readonly number: FieldRef<"Clients", 'String'>
    readonly city: FieldRef<"Clients", 'String'>
    readonly zipCode: FieldRef<"Clients", 'String'>
    readonly state: FieldRef<"Clients", 'String'>
    readonly isActive: FieldRef<"Clients", 'Boolean'>
    readonly observation: FieldRef<"Clients", 'String'>
    readonly createdAt: FieldRef<"Clients", 'DateTime'>
    readonly updatedAt: FieldRef<"Clients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clients findUnique
   */
  export type ClientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findUniqueOrThrow
   */
  export type ClientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findFirst
   */
  export type ClientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findFirstOrThrow
   */
  export type ClientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findMany
   */
  export type ClientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients create
   */
  export type ClientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clients.
     */
    data: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
  }

  /**
   * Clients createMany
   */
  export type ClientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients update
   */
  export type ClientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clients.
     */
    data: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
    /**
     * Choose, which Clients to update.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients updateMany
   */
  export type ClientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients upsert
   */
  export type ClientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clients to update in case it exists.
     */
    where: ClientsWhereUniqueInput
    /**
     * In case the Clients found by the `where` argument doesn't exist, create a new Clients with this data.
     */
    create: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
    /**
     * In case the Clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
  }

  /**
   * Clients delete
   */
  export type ClientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter which Clients to delete.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients deleteMany
   */
  export type ClientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Clients.Users
   */
  export type Clients$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Clients.Contracts
   */
  export type Clients$ContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    where?: ContractsWhereInput
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    cursor?: ContractsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Clients.Extensions
   */
  export type Clients$ExtensionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    where?: ExtensionsWhereInput
    orderBy?: ExtensionsOrderByWithRelationInput | ExtensionsOrderByWithRelationInput[]
    cursor?: ExtensionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExtensionsScalarFieldEnum | ExtensionsScalarFieldEnum[]
  }

  /**
   * Clients.Queues
   */
  export type Clients$QueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    where?: QueuesWhereInput
    orderBy?: QueuesOrderByWithRelationInput | QueuesOrderByWithRelationInput[]
    cursor?: QueuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueuesScalarFieldEnum | QueuesScalarFieldEnum[]
  }

  /**
   * Clients.Numbers
   */
  export type Clients$NumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    where?: NumbersWhereInput
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    cursor?: NumbersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NumbersScalarFieldEnum | NumbersScalarFieldEnum[]
  }

  /**
   * Clients.Cdr
   */
  export type Clients$CdrArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    where?: CdrWhereInput
    orderBy?: CdrOrderByWithRelationInput | CdrOrderByWithRelationInput[]
    cursor?: CdrWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CdrScalarFieldEnum | CdrScalarFieldEnum[]
  }

  /**
   * Clients without action
   */
  export type ClientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    cpf: string | null
    phoneNumber: string | null
    password: string | null
    recoveryToken: string | null
    accessType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    cpf: string | null
    phoneNumber: string | null
    password: string | null
    recoveryToken: string | null
    accessType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    cpf: number
    phoneNumber: number
    password: number
    recoveryToken: number
    accessType: number
    isActive: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpf?: true
    phoneNumber?: true
    password?: true
    recoveryToken?: true
    accessType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpf?: true
    phoneNumber?: true
    password?: true
    recoveryToken?: true
    accessType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpf?: true
    phoneNumber?: true
    password?: true
    recoveryToken?: true
    accessType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    cpf: string
    phoneNumber: string
    password: string | null
    recoveryToken: string | null
    accessType: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    clientId: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cpf?: boolean
    phoneNumber?: boolean
    password?: boolean
    recoveryToken?: boolean
    accessType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    cpf?: boolean
    phoneNumber?: boolean
    password?: boolean
    recoveryToken?: boolean
    accessType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "cpf" | "phoneNumber" | "password" | "recoveryToken" | "accessType" | "isActive" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      cpf: string
      phoneNumber: string
      password: string | null
      recoveryToken: string | null
      accessType: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly cpf: FieldRef<"Users", 'String'>
    readonly phoneNumber: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly recoveryToken: FieldRef<"Users", 'String'>
    readonly accessType: FieldRef<"Users", 'String'>
    readonly isActive: FieldRef<"Users", 'Boolean'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly clientId: FieldRef<"Users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Contracts
   */

  export type AggregateContracts = {
    _count: ContractsCountAggregateOutputType | null
    _avg: ContractsAvgAggregateOutputType | null
    _sum: ContractsSumAggregateOutputType | null
    _min: ContractsMinAggregateOutputType | null
    _max: ContractsMaxAggregateOutputType | null
  }

  export type ContractsAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type ContractsSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type ContractsMinAggregateOutputType = {
    id: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type ContractsMaxAggregateOutputType = {
    id: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type ContractsCountAggregateOutputType = {
    id: number
    startedAt: number
    finishedAt: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type ContractsAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type ContractsSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type ContractsMinAggregateInputType = {
    id?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type ContractsMaxAggregateInputType = {
    id?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type ContractsCountAggregateInputType = {
    id?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type ContractsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to aggregate.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractsMaxAggregateInputType
  }

  export type GetContractsAggregateType<T extends ContractsAggregateArgs> = {
        [P in keyof T & keyof AggregateContracts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContracts[P]>
      : GetScalarType<T[P], AggregateContracts[P]>
  }




  export type ContractsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractsWhereInput
    orderBy?: ContractsOrderByWithAggregationInput | ContractsOrderByWithAggregationInput[]
    by: ContractsScalarFieldEnum[] | ContractsScalarFieldEnum
    having?: ContractsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractsCountAggregateInputType | true
    _avg?: ContractsAvgAggregateInputType
    _sum?: ContractsSumAggregateInputType
    _min?: ContractsMinAggregateInputType
    _max?: ContractsMaxAggregateInputType
  }

  export type ContractsGroupByOutputType = {
    id: number
    startedAt: Date
    finishedAt: Date
    createdAt: Date
    updatedAt: Date
    clientId: number
    _count: ContractsCountAggregateOutputType | null
    _avg: ContractsAvgAggregateOutputType | null
    _sum: ContractsSumAggregateOutputType | null
    _min: ContractsMinAggregateOutputType | null
    _max: ContractsMaxAggregateOutputType | null
  }

  type GetContractsGroupByPayload<T extends ContractsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractsGroupByOutputType[P]>
            : GetScalarType<T[P], ContractsGroupByOutputType[P]>
        }
      >
    >


  export type ContractsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    Devices?: boolean | Contracts$DevicesArgs<ExtArgs>
    Invoices?: boolean | Contracts$InvoicesArgs<ExtArgs>
    _count?: boolean | ContractsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contracts"]>



  export type ContractsSelectScalar = {
    id?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type ContractsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startedAt" | "finishedAt" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["contracts"]>
  export type ContractsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    Devices?: boolean | Contracts$DevicesArgs<ExtArgs>
    Invoices?: boolean | Contracts$InvoicesArgs<ExtArgs>
    _count?: boolean | ContractsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContractsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contracts"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
      Devices: Prisma.$DevicesPayload<ExtArgs>[]
      Invoices: Prisma.$InvoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startedAt: Date
      finishedAt: Date
      createdAt: Date
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["contracts"]>
    composites: {}
  }

  type ContractsGetPayload<S extends boolean | null | undefined | ContractsDefaultArgs> = $Result.GetResult<Prisma.$ContractsPayload, S>

  type ContractsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractsCountAggregateInputType | true
    }

  export interface ContractsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contracts'], meta: { name: 'Contracts' } }
    /**
     * Find zero or one Contracts that matches the filter.
     * @param {ContractsFindUniqueArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractsFindUniqueArgs>(args: SelectSubset<T, ContractsFindUniqueArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contracts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractsFindUniqueOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsFindFirstArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractsFindFirstArgs>(args?: SelectSubset<T, ContractsFindFirstArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contracts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsFindFirstOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contracts.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contracts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractsWithIdOnly = await prisma.contracts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractsFindManyArgs>(args?: SelectSubset<T, ContractsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contracts.
     * @param {ContractsCreateArgs} args - Arguments to create a Contracts.
     * @example
     * // Create one Contracts
     * const Contracts = await prisma.contracts.create({
     *   data: {
     *     // ... data to create a Contracts
     *   }
     * })
     * 
     */
    create<T extends ContractsCreateArgs>(args: SelectSubset<T, ContractsCreateArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractsCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contracts = await prisma.contracts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractsCreateManyArgs>(args?: SelectSubset<T, ContractsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contracts.
     * @param {ContractsDeleteArgs} args - Arguments to delete one Contracts.
     * @example
     * // Delete one Contracts
     * const Contracts = await prisma.contracts.delete({
     *   where: {
     *     // ... filter to delete one Contracts
     *   }
     * })
     * 
     */
    delete<T extends ContractsDeleteArgs>(args: SelectSubset<T, ContractsDeleteArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contracts.
     * @param {ContractsUpdateArgs} args - Arguments to update one Contracts.
     * @example
     * // Update one Contracts
     * const contracts = await prisma.contracts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractsUpdateArgs>(args: SelectSubset<T, ContractsUpdateArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractsDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contracts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractsDeleteManyArgs>(args?: SelectSubset<T, ContractsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contracts = await prisma.contracts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractsUpdateManyArgs>(args: SelectSubset<T, ContractsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contracts.
     * @param {ContractsUpsertArgs} args - Arguments to update or create a Contracts.
     * @example
     * // Update or create a Contracts
     * const contracts = await prisma.contracts.upsert({
     *   create: {
     *     // ... data to create a Contracts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contracts we want to update
     *   }
     * })
     */
    upsert<T extends ContractsUpsertArgs>(args: SelectSubset<T, ContractsUpsertArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contracts.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractsCountArgs>(
      args?: Subset<T, ContractsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractsAggregateArgs>(args: Subset<T, ContractsAggregateArgs>): Prisma.PrismaPromise<GetContractsAggregateType<T>>

    /**
     * Group by Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractsGroupByArgs['orderBy'] }
        : { orderBy?: ContractsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contracts model
   */
  readonly fields: ContractsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contracts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Devices<T extends Contracts$DevicesArgs<ExtArgs> = {}>(args?: Subset<T, Contracts$DevicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invoices<T extends Contracts$InvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Contracts$InvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contracts model
   */
  interface ContractsFieldRefs {
    readonly id: FieldRef<"Contracts", 'Int'>
    readonly startedAt: FieldRef<"Contracts", 'DateTime'>
    readonly finishedAt: FieldRef<"Contracts", 'DateTime'>
    readonly createdAt: FieldRef<"Contracts", 'DateTime'>
    readonly updatedAt: FieldRef<"Contracts", 'DateTime'>
    readonly clientId: FieldRef<"Contracts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Contracts findUnique
   */
  export type ContractsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts findUniqueOrThrow
   */
  export type ContractsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts findFirst
   */
  export type ContractsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Contracts findFirstOrThrow
   */
  export type ContractsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Contracts findMany
   */
  export type ContractsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Contracts create
   */
  export type ContractsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contracts.
     */
    data: XOR<ContractsCreateInput, ContractsUncheckedCreateInput>
  }

  /**
   * Contracts createMany
   */
  export type ContractsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractsCreateManyInput | ContractsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contracts update
   */
  export type ContractsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contracts.
     */
    data: XOR<ContractsUpdateInput, ContractsUncheckedUpdateInput>
    /**
     * Choose, which Contracts to update.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts updateMany
   */
  export type ContractsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractsUpdateManyMutationInput, ContractsUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractsWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contracts upsert
   */
  export type ContractsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contracts to update in case it exists.
     */
    where: ContractsWhereUniqueInput
    /**
     * In case the Contracts found by the `where` argument doesn't exist, create a new Contracts with this data.
     */
    create: XOR<ContractsCreateInput, ContractsUncheckedCreateInput>
    /**
     * In case the Contracts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractsUpdateInput, ContractsUncheckedUpdateInput>
  }

  /**
   * Contracts delete
   */
  export type ContractsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter which Contracts to delete.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts deleteMany
   */
  export type ContractsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractsWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contracts.Devices
   */
  export type Contracts$DevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    where?: DevicesWhereInput
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    cursor?: DevicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Contracts.Invoices
   */
  export type Contracts$InvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    cursor?: InvoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Contracts without action
   */
  export type ContractsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
  }


  /**
   * Model Extensions
   */

  export type AggregateExtensions = {
    _count: ExtensionsCountAggregateOutputType | null
    _avg: ExtensionsAvgAggregateOutputType | null
    _sum: ExtensionsSumAggregateOutputType | null
    _min: ExtensionsMinAggregateOutputType | null
    _max: ExtensionsMaxAggregateOutputType | null
  }

  export type ExtensionsAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type ExtensionsSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type ExtensionsMinAggregateOutputType = {
    id: number | null
    ramal: string | null
    description: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type ExtensionsMaxAggregateOutputType = {
    id: number | null
    ramal: string | null
    description: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type ExtensionsCountAggregateOutputType = {
    id: number
    ramal: number
    description: number
    password: number
    isActive: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type ExtensionsAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type ExtensionsSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type ExtensionsMinAggregateInputType = {
    id?: true
    ramal?: true
    description?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type ExtensionsMaxAggregateInputType = {
    id?: true
    ramal?: true
    description?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type ExtensionsCountAggregateInputType = {
    id?: true
    ramal?: true
    description?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type ExtensionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extensions to aggregate.
     */
    where?: ExtensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extensions to fetch.
     */
    orderBy?: ExtensionsOrderByWithRelationInput | ExtensionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExtensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Extensions
    **/
    _count?: true | ExtensionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtensionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtensionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtensionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtensionsMaxAggregateInputType
  }

  export type GetExtensionsAggregateType<T extends ExtensionsAggregateArgs> = {
        [P in keyof T & keyof AggregateExtensions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtensions[P]>
      : GetScalarType<T[P], AggregateExtensions[P]>
  }




  export type ExtensionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtensionsWhereInput
    orderBy?: ExtensionsOrderByWithAggregationInput | ExtensionsOrderByWithAggregationInput[]
    by: ExtensionsScalarFieldEnum[] | ExtensionsScalarFieldEnum
    having?: ExtensionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtensionsCountAggregateInputType | true
    _avg?: ExtensionsAvgAggregateInputType
    _sum?: ExtensionsSumAggregateInputType
    _min?: ExtensionsMinAggregateInputType
    _max?: ExtensionsMaxAggregateInputType
  }

  export type ExtensionsGroupByOutputType = {
    id: number
    ramal: string
    description: string | null
    password: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    clientId: number
    _count: ExtensionsCountAggregateOutputType | null
    _avg: ExtensionsAvgAggregateOutputType | null
    _sum: ExtensionsSumAggregateOutputType | null
    _min: ExtensionsMinAggregateOutputType | null
    _max: ExtensionsMaxAggregateOutputType | null
  }

  type GetExtensionsGroupByPayload<T extends ExtensionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtensionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtensionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtensionsGroupByOutputType[P]>
            : GetScalarType<T[P], ExtensionsGroupByOutputType[P]>
        }
      >
    >


  export type ExtensionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ramal?: boolean
    description?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["extensions"]>



  export type ExtensionsSelectScalar = {
    id?: boolean
    ramal?: boolean
    description?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type ExtensionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ramal" | "description" | "password" | "isActive" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["extensions"]>
  export type ExtensionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $ExtensionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Extensions"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ramal: string
      description: string | null
      password: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["extensions"]>
    composites: {}
  }

  type ExtensionsGetPayload<S extends boolean | null | undefined | ExtensionsDefaultArgs> = $Result.GetResult<Prisma.$ExtensionsPayload, S>

  type ExtensionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExtensionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtensionsCountAggregateInputType | true
    }

  export interface ExtensionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Extensions'], meta: { name: 'Extensions' } }
    /**
     * Find zero or one Extensions that matches the filter.
     * @param {ExtensionsFindUniqueArgs} args - Arguments to find a Extensions
     * @example
     * // Get one Extensions
     * const extensions = await prisma.extensions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExtensionsFindUniqueArgs>(args: SelectSubset<T, ExtensionsFindUniqueArgs<ExtArgs>>): Prisma__ExtensionsClient<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extensions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExtensionsFindUniqueOrThrowArgs} args - Arguments to find a Extensions
     * @example
     * // Get one Extensions
     * const extensions = await prisma.extensions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExtensionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ExtensionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExtensionsClient<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsFindFirstArgs} args - Arguments to find a Extensions
     * @example
     * // Get one Extensions
     * const extensions = await prisma.extensions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExtensionsFindFirstArgs>(args?: SelectSubset<T, ExtensionsFindFirstArgs<ExtArgs>>): Prisma__ExtensionsClient<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extensions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsFindFirstOrThrowArgs} args - Arguments to find a Extensions
     * @example
     * // Get one Extensions
     * const extensions = await prisma.extensions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExtensionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ExtensionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExtensionsClient<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extensions
     * const extensions = await prisma.extensions.findMany()
     * 
     * // Get first 10 Extensions
     * const extensions = await prisma.extensions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extensionsWithIdOnly = await prisma.extensions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExtensionsFindManyArgs>(args?: SelectSubset<T, ExtensionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extensions.
     * @param {ExtensionsCreateArgs} args - Arguments to create a Extensions.
     * @example
     * // Create one Extensions
     * const Extensions = await prisma.extensions.create({
     *   data: {
     *     // ... data to create a Extensions
     *   }
     * })
     * 
     */
    create<T extends ExtensionsCreateArgs>(args: SelectSubset<T, ExtensionsCreateArgs<ExtArgs>>): Prisma__ExtensionsClient<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extensions.
     * @param {ExtensionsCreateManyArgs} args - Arguments to create many Extensions.
     * @example
     * // Create many Extensions
     * const extensions = await prisma.extensions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExtensionsCreateManyArgs>(args?: SelectSubset<T, ExtensionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Extensions.
     * @param {ExtensionsDeleteArgs} args - Arguments to delete one Extensions.
     * @example
     * // Delete one Extensions
     * const Extensions = await prisma.extensions.delete({
     *   where: {
     *     // ... filter to delete one Extensions
     *   }
     * })
     * 
     */
    delete<T extends ExtensionsDeleteArgs>(args: SelectSubset<T, ExtensionsDeleteArgs<ExtArgs>>): Prisma__ExtensionsClient<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extensions.
     * @param {ExtensionsUpdateArgs} args - Arguments to update one Extensions.
     * @example
     * // Update one Extensions
     * const extensions = await prisma.extensions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExtensionsUpdateArgs>(args: SelectSubset<T, ExtensionsUpdateArgs<ExtArgs>>): Prisma__ExtensionsClient<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extensions.
     * @param {ExtensionsDeleteManyArgs} args - Arguments to filter Extensions to delete.
     * @example
     * // Delete a few Extensions
     * const { count } = await prisma.extensions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExtensionsDeleteManyArgs>(args?: SelectSubset<T, ExtensionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extensions
     * const extensions = await prisma.extensions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExtensionsUpdateManyArgs>(args: SelectSubset<T, ExtensionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Extensions.
     * @param {ExtensionsUpsertArgs} args - Arguments to update or create a Extensions.
     * @example
     * // Update or create a Extensions
     * const extensions = await prisma.extensions.upsert({
     *   create: {
     *     // ... data to create a Extensions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extensions we want to update
     *   }
     * })
     */
    upsert<T extends ExtensionsUpsertArgs>(args: SelectSubset<T, ExtensionsUpsertArgs<ExtArgs>>): Prisma__ExtensionsClient<$Result.GetResult<Prisma.$ExtensionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsCountArgs} args - Arguments to filter Extensions to count.
     * @example
     * // Count the number of Extensions
     * const count = await prisma.extensions.count({
     *   where: {
     *     // ... the filter for the Extensions we want to count
     *   }
     * })
    **/
    count<T extends ExtensionsCountArgs>(
      args?: Subset<T, ExtensionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtensionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExtensionsAggregateArgs>(args: Subset<T, ExtensionsAggregateArgs>): Prisma.PrismaPromise<GetExtensionsAggregateType<T>>

    /**
     * Group by Extensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExtensionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExtensionsGroupByArgs['orderBy'] }
        : { orderBy?: ExtensionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExtensionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtensionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Extensions model
   */
  readonly fields: ExtensionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Extensions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExtensionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Extensions model
   */
  interface ExtensionsFieldRefs {
    readonly id: FieldRef<"Extensions", 'Int'>
    readonly ramal: FieldRef<"Extensions", 'String'>
    readonly description: FieldRef<"Extensions", 'String'>
    readonly password: FieldRef<"Extensions", 'String'>
    readonly isActive: FieldRef<"Extensions", 'Boolean'>
    readonly createdAt: FieldRef<"Extensions", 'DateTime'>
    readonly updatedAt: FieldRef<"Extensions", 'DateTime'>
    readonly clientId: FieldRef<"Extensions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Extensions findUnique
   */
  export type ExtensionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    /**
     * Filter, which Extensions to fetch.
     */
    where: ExtensionsWhereUniqueInput
  }

  /**
   * Extensions findUniqueOrThrow
   */
  export type ExtensionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    /**
     * Filter, which Extensions to fetch.
     */
    where: ExtensionsWhereUniqueInput
  }

  /**
   * Extensions findFirst
   */
  export type ExtensionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    /**
     * Filter, which Extensions to fetch.
     */
    where?: ExtensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extensions to fetch.
     */
    orderBy?: ExtensionsOrderByWithRelationInput | ExtensionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extensions.
     */
    cursor?: ExtensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extensions.
     */
    distinct?: ExtensionsScalarFieldEnum | ExtensionsScalarFieldEnum[]
  }

  /**
   * Extensions findFirstOrThrow
   */
  export type ExtensionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    /**
     * Filter, which Extensions to fetch.
     */
    where?: ExtensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extensions to fetch.
     */
    orderBy?: ExtensionsOrderByWithRelationInput | ExtensionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extensions.
     */
    cursor?: ExtensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extensions.
     */
    distinct?: ExtensionsScalarFieldEnum | ExtensionsScalarFieldEnum[]
  }

  /**
   * Extensions findMany
   */
  export type ExtensionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    /**
     * Filter, which Extensions to fetch.
     */
    where?: ExtensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extensions to fetch.
     */
    orderBy?: ExtensionsOrderByWithRelationInput | ExtensionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Extensions.
     */
    cursor?: ExtensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extensions.
     */
    skip?: number
    distinct?: ExtensionsScalarFieldEnum | ExtensionsScalarFieldEnum[]
  }

  /**
   * Extensions create
   */
  export type ExtensionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Extensions.
     */
    data: XOR<ExtensionsCreateInput, ExtensionsUncheckedCreateInput>
  }

  /**
   * Extensions createMany
   */
  export type ExtensionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Extensions.
     */
    data: ExtensionsCreateManyInput | ExtensionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Extensions update
   */
  export type ExtensionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Extensions.
     */
    data: XOR<ExtensionsUpdateInput, ExtensionsUncheckedUpdateInput>
    /**
     * Choose, which Extensions to update.
     */
    where: ExtensionsWhereUniqueInput
  }

  /**
   * Extensions updateMany
   */
  export type ExtensionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Extensions.
     */
    data: XOR<ExtensionsUpdateManyMutationInput, ExtensionsUncheckedUpdateManyInput>
    /**
     * Filter which Extensions to update
     */
    where?: ExtensionsWhereInput
    /**
     * Limit how many Extensions to update.
     */
    limit?: number
  }

  /**
   * Extensions upsert
   */
  export type ExtensionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Extensions to update in case it exists.
     */
    where: ExtensionsWhereUniqueInput
    /**
     * In case the Extensions found by the `where` argument doesn't exist, create a new Extensions with this data.
     */
    create: XOR<ExtensionsCreateInput, ExtensionsUncheckedCreateInput>
    /**
     * In case the Extensions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExtensionsUpdateInput, ExtensionsUncheckedUpdateInput>
  }

  /**
   * Extensions delete
   */
  export type ExtensionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
    /**
     * Filter which Extensions to delete.
     */
    where: ExtensionsWhereUniqueInput
  }

  /**
   * Extensions deleteMany
   */
  export type ExtensionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extensions to delete
     */
    where?: ExtensionsWhereInput
    /**
     * Limit how many Extensions to delete.
     */
    limit?: number
  }

  /**
   * Extensions without action
   */
  export type ExtensionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extensions
     */
    omit?: ExtensionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtensionsInclude<ExtArgs> | null
  }


  /**
   * Model Queues
   */

  export type AggregateQueues = {
    _count: QueuesCountAggregateOutputType | null
    _avg: QueuesAvgAggregateOutputType | null
    _sum: QueuesSumAggregateOutputType | null
    _min: QueuesMinAggregateOutputType | null
    _max: QueuesMaxAggregateOutputType | null
  }

  export type QueuesAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type QueuesSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type QueuesMinAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type QueuesMaxAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type QueuesCountAggregateOutputType = {
    id: number
    code: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type QueuesAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type QueuesSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type QueuesMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type QueuesMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type QueuesCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type QueuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queues to aggregate.
     */
    where?: QueuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueuesOrderByWithRelationInput | QueuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Queues
    **/
    _count?: true | QueuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QueuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueuesMaxAggregateInputType
  }

  export type GetQueuesAggregateType<T extends QueuesAggregateArgs> = {
        [P in keyof T & keyof AggregateQueues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueues[P]>
      : GetScalarType<T[P], AggregateQueues[P]>
  }




  export type QueuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueuesWhereInput
    orderBy?: QueuesOrderByWithAggregationInput | QueuesOrderByWithAggregationInput[]
    by: QueuesScalarFieldEnum[] | QueuesScalarFieldEnum
    having?: QueuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueuesCountAggregateInputType | true
    _avg?: QueuesAvgAggregateInputType
    _sum?: QueuesSumAggregateInputType
    _min?: QueuesMinAggregateInputType
    _max?: QueuesMaxAggregateInputType
  }

  export type QueuesGroupByOutputType = {
    id: number
    code: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    clientId: number
    _count: QueuesCountAggregateOutputType | null
    _avg: QueuesAvgAggregateOutputType | null
    _sum: QueuesSumAggregateOutputType | null
    _min: QueuesMinAggregateOutputType | null
    _max: QueuesMaxAggregateOutputType | null
  }

  type GetQueuesGroupByPayload<T extends QueuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueuesGroupByOutputType[P]>
            : GetScalarType<T[P], QueuesGroupByOutputType[P]>
        }
      >
    >


  export type QueuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queues"]>



  export type QueuesSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type QueuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "description" | "isActive" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["queues"]>
  export type QueuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $QueuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Queues"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["queues"]>
    composites: {}
  }

  type QueuesGetPayload<S extends boolean | null | undefined | QueuesDefaultArgs> = $Result.GetResult<Prisma.$QueuesPayload, S>

  type QueuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueuesCountAggregateInputType | true
    }

  export interface QueuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Queues'], meta: { name: 'Queues' } }
    /**
     * Find zero or one Queues that matches the filter.
     * @param {QueuesFindUniqueArgs} args - Arguments to find a Queues
     * @example
     * // Get one Queues
     * const queues = await prisma.queues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueuesFindUniqueArgs>(args: SelectSubset<T, QueuesFindUniqueArgs<ExtArgs>>): Prisma__QueuesClient<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Queues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueuesFindUniqueOrThrowArgs} args - Arguments to find a Queues
     * @example
     * // Get one Queues
     * const queues = await prisma.queues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueuesFindUniqueOrThrowArgs>(args: SelectSubset<T, QueuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueuesClient<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueuesFindFirstArgs} args - Arguments to find a Queues
     * @example
     * // Get one Queues
     * const queues = await prisma.queues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueuesFindFirstArgs>(args?: SelectSubset<T, QueuesFindFirstArgs<ExtArgs>>): Prisma__QueuesClient<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueuesFindFirstOrThrowArgs} args - Arguments to find a Queues
     * @example
     * // Get one Queues
     * const queues = await prisma.queues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueuesFindFirstOrThrowArgs>(args?: SelectSubset<T, QueuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueuesClient<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queues
     * const queues = await prisma.queues.findMany()
     * 
     * // Get first 10 Queues
     * const queues = await prisma.queues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queuesWithIdOnly = await prisma.queues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueuesFindManyArgs>(args?: SelectSubset<T, QueuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Queues.
     * @param {QueuesCreateArgs} args - Arguments to create a Queues.
     * @example
     * // Create one Queues
     * const Queues = await prisma.queues.create({
     *   data: {
     *     // ... data to create a Queues
     *   }
     * })
     * 
     */
    create<T extends QueuesCreateArgs>(args: SelectSubset<T, QueuesCreateArgs<ExtArgs>>): Prisma__QueuesClient<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queues.
     * @param {QueuesCreateManyArgs} args - Arguments to create many Queues.
     * @example
     * // Create many Queues
     * const queues = await prisma.queues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueuesCreateManyArgs>(args?: SelectSubset<T, QueuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Queues.
     * @param {QueuesDeleteArgs} args - Arguments to delete one Queues.
     * @example
     * // Delete one Queues
     * const Queues = await prisma.queues.delete({
     *   where: {
     *     // ... filter to delete one Queues
     *   }
     * })
     * 
     */
    delete<T extends QueuesDeleteArgs>(args: SelectSubset<T, QueuesDeleteArgs<ExtArgs>>): Prisma__QueuesClient<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Queues.
     * @param {QueuesUpdateArgs} args - Arguments to update one Queues.
     * @example
     * // Update one Queues
     * const queues = await prisma.queues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueuesUpdateArgs>(args: SelectSubset<T, QueuesUpdateArgs<ExtArgs>>): Prisma__QueuesClient<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queues.
     * @param {QueuesDeleteManyArgs} args - Arguments to filter Queues to delete.
     * @example
     * // Delete a few Queues
     * const { count } = await prisma.queues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueuesDeleteManyArgs>(args?: SelectSubset<T, QueuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queues
     * const queues = await prisma.queues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueuesUpdateManyArgs>(args: SelectSubset<T, QueuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Queues.
     * @param {QueuesUpsertArgs} args - Arguments to update or create a Queues.
     * @example
     * // Update or create a Queues
     * const queues = await prisma.queues.upsert({
     *   create: {
     *     // ... data to create a Queues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Queues we want to update
     *   }
     * })
     */
    upsert<T extends QueuesUpsertArgs>(args: SelectSubset<T, QueuesUpsertArgs<ExtArgs>>): Prisma__QueuesClient<$Result.GetResult<Prisma.$QueuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueuesCountArgs} args - Arguments to filter Queues to count.
     * @example
     * // Count the number of Queues
     * const count = await prisma.queues.count({
     *   where: {
     *     // ... the filter for the Queues we want to count
     *   }
     * })
    **/
    count<T extends QueuesCountArgs>(
      args?: Subset<T, QueuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QueuesAggregateArgs>(args: Subset<T, QueuesAggregateArgs>): Prisma.PrismaPromise<GetQueuesAggregateType<T>>

    /**
     * Group by Queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueuesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QueuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueuesGroupByArgs['orderBy'] }
        : { orderBy?: QueuesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QueuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Queues model
   */
  readonly fields: QueuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Queues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Queues model
   */
  interface QueuesFieldRefs {
    readonly id: FieldRef<"Queues", 'Int'>
    readonly code: FieldRef<"Queues", 'String'>
    readonly description: FieldRef<"Queues", 'String'>
    readonly isActive: FieldRef<"Queues", 'Boolean'>
    readonly createdAt: FieldRef<"Queues", 'DateTime'>
    readonly updatedAt: FieldRef<"Queues", 'DateTime'>
    readonly clientId: FieldRef<"Queues", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Queues findUnique
   */
  export type QueuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    /**
     * Filter, which Queues to fetch.
     */
    where: QueuesWhereUniqueInput
  }

  /**
   * Queues findUniqueOrThrow
   */
  export type QueuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    /**
     * Filter, which Queues to fetch.
     */
    where: QueuesWhereUniqueInput
  }

  /**
   * Queues findFirst
   */
  export type QueuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    /**
     * Filter, which Queues to fetch.
     */
    where?: QueuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueuesOrderByWithRelationInput | QueuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queues.
     */
    cursor?: QueuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queues.
     */
    distinct?: QueuesScalarFieldEnum | QueuesScalarFieldEnum[]
  }

  /**
   * Queues findFirstOrThrow
   */
  export type QueuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    /**
     * Filter, which Queues to fetch.
     */
    where?: QueuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueuesOrderByWithRelationInput | QueuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queues.
     */
    cursor?: QueuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queues.
     */
    distinct?: QueuesScalarFieldEnum | QueuesScalarFieldEnum[]
  }

  /**
   * Queues findMany
   */
  export type QueuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    /**
     * Filter, which Queues to fetch.
     */
    where?: QueuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueuesOrderByWithRelationInput | QueuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Queues.
     */
    cursor?: QueuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    distinct?: QueuesScalarFieldEnum | QueuesScalarFieldEnum[]
  }

  /**
   * Queues create
   */
  export type QueuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Queues.
     */
    data: XOR<QueuesCreateInput, QueuesUncheckedCreateInput>
  }

  /**
   * Queues createMany
   */
  export type QueuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Queues.
     */
    data: QueuesCreateManyInput | QueuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Queues update
   */
  export type QueuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Queues.
     */
    data: XOR<QueuesUpdateInput, QueuesUncheckedUpdateInput>
    /**
     * Choose, which Queues to update.
     */
    where: QueuesWhereUniqueInput
  }

  /**
   * Queues updateMany
   */
  export type QueuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Queues.
     */
    data: XOR<QueuesUpdateManyMutationInput, QueuesUncheckedUpdateManyInput>
    /**
     * Filter which Queues to update
     */
    where?: QueuesWhereInput
    /**
     * Limit how many Queues to update.
     */
    limit?: number
  }

  /**
   * Queues upsert
   */
  export type QueuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Queues to update in case it exists.
     */
    where: QueuesWhereUniqueInput
    /**
     * In case the Queues found by the `where` argument doesn't exist, create a new Queues with this data.
     */
    create: XOR<QueuesCreateInput, QueuesUncheckedCreateInput>
    /**
     * In case the Queues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueuesUpdateInput, QueuesUncheckedUpdateInput>
  }

  /**
   * Queues delete
   */
  export type QueuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
    /**
     * Filter which Queues to delete.
     */
    where: QueuesWhereUniqueInput
  }

  /**
   * Queues deleteMany
   */
  export type QueuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queues to delete
     */
    where?: QueuesWhereInput
    /**
     * Limit how many Queues to delete.
     */
    limit?: number
  }

  /**
   * Queues without action
   */
  export type QueuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queues
     */
    select?: QueuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queues
     */
    omit?: QueuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueuesInclude<ExtArgs> | null
  }


  /**
   * Model Numbers
   */

  export type AggregateNumbers = {
    _count: NumbersCountAggregateOutputType | null
    _avg: NumbersAvgAggregateOutputType | null
    _sum: NumbersSumAggregateOutputType | null
    _min: NumbersMinAggregateOutputType | null
    _max: NumbersMaxAggregateOutputType | null
  }

  export type NumbersAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type NumbersSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type NumbersMinAggregateOutputType = {
    id: number | null
    number: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type NumbersMaxAggregateOutputType = {
    id: number | null
    number: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type NumbersCountAggregateOutputType = {
    id: number
    number: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type NumbersAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type NumbersSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type NumbersMinAggregateInputType = {
    id?: true
    number?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type NumbersMaxAggregateInputType = {
    id?: true
    number?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type NumbersCountAggregateInputType = {
    id?: true
    number?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type NumbersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Numbers to aggregate.
     */
    where?: NumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Numbers to fetch.
     */
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Numbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Numbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Numbers
    **/
    _count?: true | NumbersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NumbersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NumbersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NumbersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NumbersMaxAggregateInputType
  }

  export type GetNumbersAggregateType<T extends NumbersAggregateArgs> = {
        [P in keyof T & keyof AggregateNumbers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNumbers[P]>
      : GetScalarType<T[P], AggregateNumbers[P]>
  }




  export type NumbersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumbersWhereInput
    orderBy?: NumbersOrderByWithAggregationInput | NumbersOrderByWithAggregationInput[]
    by: NumbersScalarFieldEnum[] | NumbersScalarFieldEnum
    having?: NumbersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NumbersCountAggregateInputType | true
    _avg?: NumbersAvgAggregateInputType
    _sum?: NumbersSumAggregateInputType
    _min?: NumbersMinAggregateInputType
    _max?: NumbersMaxAggregateInputType
  }

  export type NumbersGroupByOutputType = {
    id: number
    number: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    clientId: number
    _count: NumbersCountAggregateOutputType | null
    _avg: NumbersAvgAggregateOutputType | null
    _sum: NumbersSumAggregateOutputType | null
    _min: NumbersMinAggregateOutputType | null
    _max: NumbersMaxAggregateOutputType | null
  }

  type GetNumbersGroupByPayload<T extends NumbersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NumbersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NumbersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NumbersGroupByOutputType[P]>
            : GetScalarType<T[P], NumbersGroupByOutputType[P]>
        }
      >
    >


  export type NumbersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numbers"]>



  export type NumbersSelectScalar = {
    id?: boolean
    number?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type NumbersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "description" | "isActive" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["numbers"]>
  export type NumbersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $NumbersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Numbers"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["numbers"]>
    composites: {}
  }

  type NumbersGetPayload<S extends boolean | null | undefined | NumbersDefaultArgs> = $Result.GetResult<Prisma.$NumbersPayload, S>

  type NumbersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NumbersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NumbersCountAggregateInputType | true
    }

  export interface NumbersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Numbers'], meta: { name: 'Numbers' } }
    /**
     * Find zero or one Numbers that matches the filter.
     * @param {NumbersFindUniqueArgs} args - Arguments to find a Numbers
     * @example
     * // Get one Numbers
     * const numbers = await prisma.numbers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NumbersFindUniqueArgs>(args: SelectSubset<T, NumbersFindUniqueArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Numbers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NumbersFindUniqueOrThrowArgs} args - Arguments to find a Numbers
     * @example
     * // Get one Numbers
     * const numbers = await prisma.numbers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NumbersFindUniqueOrThrowArgs>(args: SelectSubset<T, NumbersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Numbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersFindFirstArgs} args - Arguments to find a Numbers
     * @example
     * // Get one Numbers
     * const numbers = await prisma.numbers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NumbersFindFirstArgs>(args?: SelectSubset<T, NumbersFindFirstArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Numbers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersFindFirstOrThrowArgs} args - Arguments to find a Numbers
     * @example
     * // Get one Numbers
     * const numbers = await prisma.numbers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NumbersFindFirstOrThrowArgs>(args?: SelectSubset<T, NumbersFindFirstOrThrowArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Numbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Numbers
     * const numbers = await prisma.numbers.findMany()
     * 
     * // Get first 10 Numbers
     * const numbers = await prisma.numbers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const numbersWithIdOnly = await prisma.numbers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NumbersFindManyArgs>(args?: SelectSubset<T, NumbersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Numbers.
     * @param {NumbersCreateArgs} args - Arguments to create a Numbers.
     * @example
     * // Create one Numbers
     * const Numbers = await prisma.numbers.create({
     *   data: {
     *     // ... data to create a Numbers
     *   }
     * })
     * 
     */
    create<T extends NumbersCreateArgs>(args: SelectSubset<T, NumbersCreateArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Numbers.
     * @param {NumbersCreateManyArgs} args - Arguments to create many Numbers.
     * @example
     * // Create many Numbers
     * const numbers = await prisma.numbers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NumbersCreateManyArgs>(args?: SelectSubset<T, NumbersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Numbers.
     * @param {NumbersDeleteArgs} args - Arguments to delete one Numbers.
     * @example
     * // Delete one Numbers
     * const Numbers = await prisma.numbers.delete({
     *   where: {
     *     // ... filter to delete one Numbers
     *   }
     * })
     * 
     */
    delete<T extends NumbersDeleteArgs>(args: SelectSubset<T, NumbersDeleteArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Numbers.
     * @param {NumbersUpdateArgs} args - Arguments to update one Numbers.
     * @example
     * // Update one Numbers
     * const numbers = await prisma.numbers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NumbersUpdateArgs>(args: SelectSubset<T, NumbersUpdateArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Numbers.
     * @param {NumbersDeleteManyArgs} args - Arguments to filter Numbers to delete.
     * @example
     * // Delete a few Numbers
     * const { count } = await prisma.numbers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NumbersDeleteManyArgs>(args?: SelectSubset<T, NumbersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Numbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Numbers
     * const numbers = await prisma.numbers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NumbersUpdateManyArgs>(args: SelectSubset<T, NumbersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Numbers.
     * @param {NumbersUpsertArgs} args - Arguments to update or create a Numbers.
     * @example
     * // Update or create a Numbers
     * const numbers = await prisma.numbers.upsert({
     *   create: {
     *     // ... data to create a Numbers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Numbers we want to update
     *   }
     * })
     */
    upsert<T extends NumbersUpsertArgs>(args: SelectSubset<T, NumbersUpsertArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Numbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersCountArgs} args - Arguments to filter Numbers to count.
     * @example
     * // Count the number of Numbers
     * const count = await prisma.numbers.count({
     *   where: {
     *     // ... the filter for the Numbers we want to count
     *   }
     * })
    **/
    count<T extends NumbersCountArgs>(
      args?: Subset<T, NumbersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NumbersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Numbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NumbersAggregateArgs>(args: Subset<T, NumbersAggregateArgs>): Prisma.PrismaPromise<GetNumbersAggregateType<T>>

    /**
     * Group by Numbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NumbersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NumbersGroupByArgs['orderBy'] }
        : { orderBy?: NumbersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NumbersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumbersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Numbers model
   */
  readonly fields: NumbersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Numbers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NumbersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Numbers model
   */
  interface NumbersFieldRefs {
    readonly id: FieldRef<"Numbers", 'Int'>
    readonly number: FieldRef<"Numbers", 'String'>
    readonly description: FieldRef<"Numbers", 'String'>
    readonly isActive: FieldRef<"Numbers", 'Boolean'>
    readonly createdAt: FieldRef<"Numbers", 'DateTime'>
    readonly updatedAt: FieldRef<"Numbers", 'DateTime'>
    readonly clientId: FieldRef<"Numbers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Numbers findUnique
   */
  export type NumbersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where: NumbersWhereUniqueInput
  }

  /**
   * Numbers findUniqueOrThrow
   */
  export type NumbersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where: NumbersWhereUniqueInput
  }

  /**
   * Numbers findFirst
   */
  export type NumbersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where?: NumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Numbers to fetch.
     */
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Numbers.
     */
    cursor?: NumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Numbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Numbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Numbers.
     */
    distinct?: NumbersScalarFieldEnum | NumbersScalarFieldEnum[]
  }

  /**
   * Numbers findFirstOrThrow
   */
  export type NumbersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where?: NumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Numbers to fetch.
     */
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Numbers.
     */
    cursor?: NumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Numbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Numbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Numbers.
     */
    distinct?: NumbersScalarFieldEnum | NumbersScalarFieldEnum[]
  }

  /**
   * Numbers findMany
   */
  export type NumbersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where?: NumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Numbers to fetch.
     */
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Numbers.
     */
    cursor?: NumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Numbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Numbers.
     */
    skip?: number
    distinct?: NumbersScalarFieldEnum | NumbersScalarFieldEnum[]
  }

  /**
   * Numbers create
   */
  export type NumbersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * The data needed to create a Numbers.
     */
    data: XOR<NumbersCreateInput, NumbersUncheckedCreateInput>
  }

  /**
   * Numbers createMany
   */
  export type NumbersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Numbers.
     */
    data: NumbersCreateManyInput | NumbersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Numbers update
   */
  export type NumbersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * The data needed to update a Numbers.
     */
    data: XOR<NumbersUpdateInput, NumbersUncheckedUpdateInput>
    /**
     * Choose, which Numbers to update.
     */
    where: NumbersWhereUniqueInput
  }

  /**
   * Numbers updateMany
   */
  export type NumbersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Numbers.
     */
    data: XOR<NumbersUpdateManyMutationInput, NumbersUncheckedUpdateManyInput>
    /**
     * Filter which Numbers to update
     */
    where?: NumbersWhereInput
    /**
     * Limit how many Numbers to update.
     */
    limit?: number
  }

  /**
   * Numbers upsert
   */
  export type NumbersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * The filter to search for the Numbers to update in case it exists.
     */
    where: NumbersWhereUniqueInput
    /**
     * In case the Numbers found by the `where` argument doesn't exist, create a new Numbers with this data.
     */
    create: XOR<NumbersCreateInput, NumbersUncheckedCreateInput>
    /**
     * In case the Numbers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NumbersUpdateInput, NumbersUncheckedUpdateInput>
  }

  /**
   * Numbers delete
   */
  export type NumbersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter which Numbers to delete.
     */
    where: NumbersWhereUniqueInput
  }

  /**
   * Numbers deleteMany
   */
  export type NumbersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Numbers to delete
     */
    where?: NumbersWhereInput
    /**
     * Limit how many Numbers to delete.
     */
    limit?: number
  }

  /**
   * Numbers without action
   */
  export type NumbersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
  }


  /**
   * Model Cdr
   */

  export type AggregateCdr = {
    _count: CdrCountAggregateOutputType | null
    _avg: CdrAvgAggregateOutputType | null
    _sum: CdrSumAggregateOutputType | null
    _min: CdrMinAggregateOutputType | null
    _max: CdrMaxAggregateOutputType | null
  }

  export type CdrAvgAggregateOutputType = {
    id: number | null
    linkedid: number | null
    duration: number | null
    waitingTime: number | null
    serviceTime: number | null
    clientId: number | null
  }

  export type CdrSumAggregateOutputType = {
    id: number | null
    linkedid: number | null
    duration: number | null
    waitingTime: number | null
    serviceTime: number | null
    clientId: number | null
  }

  export type CdrMinAggregateOutputType = {
    id: number | null
    linkedid: number | null
    callDate: Date | null
    source: string | null
    destination: string | null
    channel: string | null
    queue: string | null
    queueName: string | null
    agent: string | null
    direction: string | null
    status: string | null
    recordingFile: string | null
    duration: number | null
    waitingTime: number | null
    serviceTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type CdrMaxAggregateOutputType = {
    id: number | null
    linkedid: number | null
    callDate: Date | null
    source: string | null
    destination: string | null
    channel: string | null
    queue: string | null
    queueName: string | null
    agent: string | null
    direction: string | null
    status: string | null
    recordingFile: string | null
    duration: number | null
    waitingTime: number | null
    serviceTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type CdrCountAggregateOutputType = {
    id: number
    linkedid: number
    callDate: number
    source: number
    destination: number
    channel: number
    queue: number
    queueName: number
    agent: number
    direction: number
    status: number
    recordingFile: number
    duration: number
    waitingTime: number
    serviceTime: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type CdrAvgAggregateInputType = {
    id?: true
    linkedid?: true
    duration?: true
    waitingTime?: true
    serviceTime?: true
    clientId?: true
  }

  export type CdrSumAggregateInputType = {
    id?: true
    linkedid?: true
    duration?: true
    waitingTime?: true
    serviceTime?: true
    clientId?: true
  }

  export type CdrMinAggregateInputType = {
    id?: true
    linkedid?: true
    callDate?: true
    source?: true
    destination?: true
    channel?: true
    queue?: true
    queueName?: true
    agent?: true
    direction?: true
    status?: true
    recordingFile?: true
    duration?: true
    waitingTime?: true
    serviceTime?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type CdrMaxAggregateInputType = {
    id?: true
    linkedid?: true
    callDate?: true
    source?: true
    destination?: true
    channel?: true
    queue?: true
    queueName?: true
    agent?: true
    direction?: true
    status?: true
    recordingFile?: true
    duration?: true
    waitingTime?: true
    serviceTime?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type CdrCountAggregateInputType = {
    id?: true
    linkedid?: true
    callDate?: true
    source?: true
    destination?: true
    channel?: true
    queue?: true
    queueName?: true
    agent?: true
    direction?: true
    status?: true
    recordingFile?: true
    duration?: true
    waitingTime?: true
    serviceTime?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type CdrAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cdr to aggregate.
     */
    where?: CdrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cdrs to fetch.
     */
    orderBy?: CdrOrderByWithRelationInput | CdrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CdrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cdrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cdrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cdrs
    **/
    _count?: true | CdrCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CdrAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CdrSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CdrMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CdrMaxAggregateInputType
  }

  export type GetCdrAggregateType<T extends CdrAggregateArgs> = {
        [P in keyof T & keyof AggregateCdr]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCdr[P]>
      : GetScalarType<T[P], AggregateCdr[P]>
  }




  export type CdrGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CdrWhereInput
    orderBy?: CdrOrderByWithAggregationInput | CdrOrderByWithAggregationInput[]
    by: CdrScalarFieldEnum[] | CdrScalarFieldEnum
    having?: CdrScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CdrCountAggregateInputType | true
    _avg?: CdrAvgAggregateInputType
    _sum?: CdrSumAggregateInputType
    _min?: CdrMinAggregateInputType
    _max?: CdrMaxAggregateInputType
  }

  export type CdrGroupByOutputType = {
    id: number
    linkedid: number
    callDate: Date | null
    source: string | null
    destination: string | null
    channel: string | null
    queue: string | null
    queueName: string | null
    agent: string | null
    direction: string | null
    status: string | null
    recordingFile: string | null
    duration: number | null
    waitingTime: number | null
    serviceTime: number | null
    createdAt: Date
    updatedAt: Date
    clientId: number
    _count: CdrCountAggregateOutputType | null
    _avg: CdrAvgAggregateOutputType | null
    _sum: CdrSumAggregateOutputType | null
    _min: CdrMinAggregateOutputType | null
    _max: CdrMaxAggregateOutputType | null
  }

  type GetCdrGroupByPayload<T extends CdrGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CdrGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CdrGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CdrGroupByOutputType[P]>
            : GetScalarType<T[P], CdrGroupByOutputType[P]>
        }
      >
    >


  export type CdrSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    linkedid?: boolean
    callDate?: boolean
    source?: boolean
    destination?: boolean
    channel?: boolean
    queue?: boolean
    queueName?: boolean
    agent?: boolean
    direction?: boolean
    status?: boolean
    recordingFile?: boolean
    duration?: boolean
    waitingTime?: boolean
    serviceTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cdr"]>



  export type CdrSelectScalar = {
    id?: boolean
    linkedid?: boolean
    callDate?: boolean
    source?: boolean
    destination?: boolean
    channel?: boolean
    queue?: boolean
    queueName?: boolean
    agent?: boolean
    direction?: boolean
    status?: boolean
    recordingFile?: boolean
    duration?: boolean
    waitingTime?: boolean
    serviceTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type CdrOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "linkedid" | "callDate" | "source" | "destination" | "channel" | "queue" | "queueName" | "agent" | "direction" | "status" | "recordingFile" | "duration" | "waitingTime" | "serviceTime" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["cdr"]>
  export type CdrInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $CdrPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cdr"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      linkedid: number
      callDate: Date | null
      source: string | null
      destination: string | null
      channel: string | null
      queue: string | null
      queueName: string | null
      agent: string | null
      direction: string | null
      status: string | null
      recordingFile: string | null
      duration: number | null
      waitingTime: number | null
      serviceTime: number | null
      createdAt: Date
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["cdr"]>
    composites: {}
  }

  type CdrGetPayload<S extends boolean | null | undefined | CdrDefaultArgs> = $Result.GetResult<Prisma.$CdrPayload, S>

  type CdrCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CdrFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CdrCountAggregateInputType | true
    }

  export interface CdrDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cdr'], meta: { name: 'Cdr' } }
    /**
     * Find zero or one Cdr that matches the filter.
     * @param {CdrFindUniqueArgs} args - Arguments to find a Cdr
     * @example
     * // Get one Cdr
     * const cdr = await prisma.cdr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CdrFindUniqueArgs>(args: SelectSubset<T, CdrFindUniqueArgs<ExtArgs>>): Prisma__CdrClient<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cdr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CdrFindUniqueOrThrowArgs} args - Arguments to find a Cdr
     * @example
     * // Get one Cdr
     * const cdr = await prisma.cdr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CdrFindUniqueOrThrowArgs>(args: SelectSubset<T, CdrFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CdrClient<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cdr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CdrFindFirstArgs} args - Arguments to find a Cdr
     * @example
     * // Get one Cdr
     * const cdr = await prisma.cdr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CdrFindFirstArgs>(args?: SelectSubset<T, CdrFindFirstArgs<ExtArgs>>): Prisma__CdrClient<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cdr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CdrFindFirstOrThrowArgs} args - Arguments to find a Cdr
     * @example
     * // Get one Cdr
     * const cdr = await prisma.cdr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CdrFindFirstOrThrowArgs>(args?: SelectSubset<T, CdrFindFirstOrThrowArgs<ExtArgs>>): Prisma__CdrClient<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cdrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CdrFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cdrs
     * const cdrs = await prisma.cdr.findMany()
     * 
     * // Get first 10 Cdrs
     * const cdrs = await prisma.cdr.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cdrWithIdOnly = await prisma.cdr.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CdrFindManyArgs>(args?: SelectSubset<T, CdrFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cdr.
     * @param {CdrCreateArgs} args - Arguments to create a Cdr.
     * @example
     * // Create one Cdr
     * const Cdr = await prisma.cdr.create({
     *   data: {
     *     // ... data to create a Cdr
     *   }
     * })
     * 
     */
    create<T extends CdrCreateArgs>(args: SelectSubset<T, CdrCreateArgs<ExtArgs>>): Prisma__CdrClient<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cdrs.
     * @param {CdrCreateManyArgs} args - Arguments to create many Cdrs.
     * @example
     * // Create many Cdrs
     * const cdr = await prisma.cdr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CdrCreateManyArgs>(args?: SelectSubset<T, CdrCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cdr.
     * @param {CdrDeleteArgs} args - Arguments to delete one Cdr.
     * @example
     * // Delete one Cdr
     * const Cdr = await prisma.cdr.delete({
     *   where: {
     *     // ... filter to delete one Cdr
     *   }
     * })
     * 
     */
    delete<T extends CdrDeleteArgs>(args: SelectSubset<T, CdrDeleteArgs<ExtArgs>>): Prisma__CdrClient<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cdr.
     * @param {CdrUpdateArgs} args - Arguments to update one Cdr.
     * @example
     * // Update one Cdr
     * const cdr = await prisma.cdr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CdrUpdateArgs>(args: SelectSubset<T, CdrUpdateArgs<ExtArgs>>): Prisma__CdrClient<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cdrs.
     * @param {CdrDeleteManyArgs} args - Arguments to filter Cdrs to delete.
     * @example
     * // Delete a few Cdrs
     * const { count } = await prisma.cdr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CdrDeleteManyArgs>(args?: SelectSubset<T, CdrDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cdrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CdrUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cdrs
     * const cdr = await prisma.cdr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CdrUpdateManyArgs>(args: SelectSubset<T, CdrUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cdr.
     * @param {CdrUpsertArgs} args - Arguments to update or create a Cdr.
     * @example
     * // Update or create a Cdr
     * const cdr = await prisma.cdr.upsert({
     *   create: {
     *     // ... data to create a Cdr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cdr we want to update
     *   }
     * })
     */
    upsert<T extends CdrUpsertArgs>(args: SelectSubset<T, CdrUpsertArgs<ExtArgs>>): Prisma__CdrClient<$Result.GetResult<Prisma.$CdrPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cdrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CdrCountArgs} args - Arguments to filter Cdrs to count.
     * @example
     * // Count the number of Cdrs
     * const count = await prisma.cdr.count({
     *   where: {
     *     // ... the filter for the Cdrs we want to count
     *   }
     * })
    **/
    count<T extends CdrCountArgs>(
      args?: Subset<T, CdrCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CdrCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cdr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CdrAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CdrAggregateArgs>(args: Subset<T, CdrAggregateArgs>): Prisma.PrismaPromise<GetCdrAggregateType<T>>

    /**
     * Group by Cdr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CdrGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CdrGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CdrGroupByArgs['orderBy'] }
        : { orderBy?: CdrGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CdrGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCdrGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cdr model
   */
  readonly fields: CdrFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cdr.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CdrClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cdr model
   */
  interface CdrFieldRefs {
    readonly id: FieldRef<"Cdr", 'Int'>
    readonly linkedid: FieldRef<"Cdr", 'Int'>
    readonly callDate: FieldRef<"Cdr", 'DateTime'>
    readonly source: FieldRef<"Cdr", 'String'>
    readonly destination: FieldRef<"Cdr", 'String'>
    readonly channel: FieldRef<"Cdr", 'String'>
    readonly queue: FieldRef<"Cdr", 'String'>
    readonly queueName: FieldRef<"Cdr", 'String'>
    readonly agent: FieldRef<"Cdr", 'String'>
    readonly direction: FieldRef<"Cdr", 'String'>
    readonly status: FieldRef<"Cdr", 'String'>
    readonly recordingFile: FieldRef<"Cdr", 'String'>
    readonly duration: FieldRef<"Cdr", 'Int'>
    readonly waitingTime: FieldRef<"Cdr", 'Int'>
    readonly serviceTime: FieldRef<"Cdr", 'Int'>
    readonly createdAt: FieldRef<"Cdr", 'DateTime'>
    readonly updatedAt: FieldRef<"Cdr", 'DateTime'>
    readonly clientId: FieldRef<"Cdr", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cdr findUnique
   */
  export type CdrFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    /**
     * Filter, which Cdr to fetch.
     */
    where: CdrWhereUniqueInput
  }

  /**
   * Cdr findUniqueOrThrow
   */
  export type CdrFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    /**
     * Filter, which Cdr to fetch.
     */
    where: CdrWhereUniqueInput
  }

  /**
   * Cdr findFirst
   */
  export type CdrFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    /**
     * Filter, which Cdr to fetch.
     */
    where?: CdrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cdrs to fetch.
     */
    orderBy?: CdrOrderByWithRelationInput | CdrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cdrs.
     */
    cursor?: CdrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cdrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cdrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cdrs.
     */
    distinct?: CdrScalarFieldEnum | CdrScalarFieldEnum[]
  }

  /**
   * Cdr findFirstOrThrow
   */
  export type CdrFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    /**
     * Filter, which Cdr to fetch.
     */
    where?: CdrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cdrs to fetch.
     */
    orderBy?: CdrOrderByWithRelationInput | CdrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cdrs.
     */
    cursor?: CdrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cdrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cdrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cdrs.
     */
    distinct?: CdrScalarFieldEnum | CdrScalarFieldEnum[]
  }

  /**
   * Cdr findMany
   */
  export type CdrFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    /**
     * Filter, which Cdrs to fetch.
     */
    where?: CdrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cdrs to fetch.
     */
    orderBy?: CdrOrderByWithRelationInput | CdrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cdrs.
     */
    cursor?: CdrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cdrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cdrs.
     */
    skip?: number
    distinct?: CdrScalarFieldEnum | CdrScalarFieldEnum[]
  }

  /**
   * Cdr create
   */
  export type CdrCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    /**
     * The data needed to create a Cdr.
     */
    data: XOR<CdrCreateInput, CdrUncheckedCreateInput>
  }

  /**
   * Cdr createMany
   */
  export type CdrCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cdrs.
     */
    data: CdrCreateManyInput | CdrCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cdr update
   */
  export type CdrUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    /**
     * The data needed to update a Cdr.
     */
    data: XOR<CdrUpdateInput, CdrUncheckedUpdateInput>
    /**
     * Choose, which Cdr to update.
     */
    where: CdrWhereUniqueInput
  }

  /**
   * Cdr updateMany
   */
  export type CdrUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cdrs.
     */
    data: XOR<CdrUpdateManyMutationInput, CdrUncheckedUpdateManyInput>
    /**
     * Filter which Cdrs to update
     */
    where?: CdrWhereInput
    /**
     * Limit how many Cdrs to update.
     */
    limit?: number
  }

  /**
   * Cdr upsert
   */
  export type CdrUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    /**
     * The filter to search for the Cdr to update in case it exists.
     */
    where: CdrWhereUniqueInput
    /**
     * In case the Cdr found by the `where` argument doesn't exist, create a new Cdr with this data.
     */
    create: XOR<CdrCreateInput, CdrUncheckedCreateInput>
    /**
     * In case the Cdr was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CdrUpdateInput, CdrUncheckedUpdateInput>
  }

  /**
   * Cdr delete
   */
  export type CdrDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
    /**
     * Filter which Cdr to delete.
     */
    where: CdrWhereUniqueInput
  }

  /**
   * Cdr deleteMany
   */
  export type CdrDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cdrs to delete
     */
    where?: CdrWhereInput
    /**
     * Limit how many Cdrs to delete.
     */
    limit?: number
  }

  /**
   * Cdr without action
   */
  export type CdrDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cdr
     */
    select?: CdrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cdr
     */
    omit?: CdrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CdrInclude<ExtArgs> | null
  }


  /**
   * Model Devices
   */

  export type AggregateDevices = {
    _count: DevicesCountAggregateOutputType | null
    _avg: DevicesAvgAggregateOutputType | null
    _sum: DevicesSumAggregateOutputType | null
    _min: DevicesMinAggregateOutputType | null
    _max: DevicesMaxAggregateOutputType | null
  }

  export type DevicesAvgAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type DevicesSumAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type DevicesMinAggregateOutputType = {
    id: number | null
    description: string | null
    serialNumber: string | null
    mac: string | null
    brand: string | null
    model: string | null
    isNew: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contractId: number | null
  }

  export type DevicesMaxAggregateOutputType = {
    id: number | null
    description: string | null
    serialNumber: string | null
    mac: string | null
    brand: string | null
    model: string | null
    isNew: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contractId: number | null
  }

  export type DevicesCountAggregateOutputType = {
    id: number
    description: number
    serialNumber: number
    mac: number
    brand: number
    model: number
    isNew: number
    status: number
    createdAt: number
    updatedAt: number
    contractId: number
    _all: number
  }


  export type DevicesAvgAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type DevicesSumAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type DevicesMinAggregateInputType = {
    id?: true
    description?: true
    serialNumber?: true
    mac?: true
    brand?: true
    model?: true
    isNew?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
  }

  export type DevicesMaxAggregateInputType = {
    id?: true
    description?: true
    serialNumber?: true
    mac?: true
    brand?: true
    model?: true
    isNew?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
  }

  export type DevicesCountAggregateInputType = {
    id?: true
    description?: true
    serialNumber?: true
    mac?: true
    brand?: true
    model?: true
    isNew?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
    _all?: true
  }

  export type DevicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to aggregate.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DevicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevicesMaxAggregateInputType
  }

  export type GetDevicesAggregateType<T extends DevicesAggregateArgs> = {
        [P in keyof T & keyof AggregateDevices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevices[P]>
      : GetScalarType<T[P], AggregateDevices[P]>
  }




  export type DevicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevicesWhereInput
    orderBy?: DevicesOrderByWithAggregationInput | DevicesOrderByWithAggregationInput[]
    by: DevicesScalarFieldEnum[] | DevicesScalarFieldEnum
    having?: DevicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevicesCountAggregateInputType | true
    _avg?: DevicesAvgAggregateInputType
    _sum?: DevicesSumAggregateInputType
    _min?: DevicesMinAggregateInputType
    _max?: DevicesMaxAggregateInputType
  }

  export type DevicesGroupByOutputType = {
    id: number
    description: string
    serialNumber: string
    mac: string
    brand: string
    model: string
    isNew: boolean
    status: string
    createdAt: Date
    updatedAt: Date
    contractId: number
    _count: DevicesCountAggregateOutputType | null
    _avg: DevicesAvgAggregateOutputType | null
    _sum: DevicesSumAggregateOutputType | null
    _min: DevicesMinAggregateOutputType | null
    _max: DevicesMaxAggregateOutputType | null
  }

  type GetDevicesGroupByPayload<T extends DevicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevicesGroupByOutputType[P]>
            : GetScalarType<T[P], DevicesGroupByOutputType[P]>
        }
      >
    >


  export type DevicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    serialNumber?: boolean
    mac?: boolean
    brand?: boolean
    model?: boolean
    isNew?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devices"]>



  export type DevicesSelectScalar = {
    id?: boolean
    description?: boolean
    serialNumber?: boolean
    mac?: boolean
    brand?: boolean
    model?: boolean
    isNew?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
  }

  export type DevicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "serialNumber" | "mac" | "brand" | "model" | "isNew" | "status" | "createdAt" | "updatedAt" | "contractId", ExtArgs["result"]["devices"]>
  export type DevicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }

  export type $DevicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devices"
    objects: {
      contract: Prisma.$ContractsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      serialNumber: string
      mac: string
      brand: string
      model: string
      isNew: boolean
      status: string
      createdAt: Date
      updatedAt: Date
      contractId: number
    }, ExtArgs["result"]["devices"]>
    composites: {}
  }

  type DevicesGetPayload<S extends boolean | null | undefined | DevicesDefaultArgs> = $Result.GetResult<Prisma.$DevicesPayload, S>

  type DevicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevicesCountAggregateInputType | true
    }

  export interface DevicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devices'], meta: { name: 'Devices' } }
    /**
     * Find zero or one Devices that matches the filter.
     * @param {DevicesFindUniqueArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevicesFindUniqueArgs>(args: SelectSubset<T, DevicesFindUniqueArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevicesFindUniqueOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevicesFindUniqueOrThrowArgs>(args: SelectSubset<T, DevicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindFirstArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevicesFindFirstArgs>(args?: SelectSubset<T, DevicesFindFirstArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindFirstOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevicesFindFirstOrThrowArgs>(args?: SelectSubset<T, DevicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.devices.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.devices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devicesWithIdOnly = await prisma.devices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevicesFindManyArgs>(args?: SelectSubset<T, DevicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devices.
     * @param {DevicesCreateArgs} args - Arguments to create a Devices.
     * @example
     * // Create one Devices
     * const Devices = await prisma.devices.create({
     *   data: {
     *     // ... data to create a Devices
     *   }
     * })
     * 
     */
    create<T extends DevicesCreateArgs>(args: SelectSubset<T, DevicesCreateArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DevicesCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const devices = await prisma.devices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevicesCreateManyArgs>(args?: SelectSubset<T, DevicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Devices.
     * @param {DevicesDeleteArgs} args - Arguments to delete one Devices.
     * @example
     * // Delete one Devices
     * const Devices = await prisma.devices.delete({
     *   where: {
     *     // ... filter to delete one Devices
     *   }
     * })
     * 
     */
    delete<T extends DevicesDeleteArgs>(args: SelectSubset<T, DevicesDeleteArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devices.
     * @param {DevicesUpdateArgs} args - Arguments to update one Devices.
     * @example
     * // Update one Devices
     * const devices = await prisma.devices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevicesUpdateArgs>(args: SelectSubset<T, DevicesUpdateArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DevicesDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.devices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevicesDeleteManyArgs>(args?: SelectSubset<T, DevicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const devices = await prisma.devices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevicesUpdateManyArgs>(args: SelectSubset<T, DevicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Devices.
     * @param {DevicesUpsertArgs} args - Arguments to update or create a Devices.
     * @example
     * // Update or create a Devices
     * const devices = await prisma.devices.upsert({
     *   create: {
     *     // ... data to create a Devices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devices we want to update
     *   }
     * })
     */
    upsert<T extends DevicesUpsertArgs>(args: SelectSubset<T, DevicesUpsertArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.devices.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DevicesCountArgs>(
      args?: Subset<T, DevicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DevicesAggregateArgs>(args: Subset<T, DevicesAggregateArgs>): Prisma.PrismaPromise<GetDevicesAggregateType<T>>

    /**
     * Group by Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DevicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevicesGroupByArgs['orderBy'] }
        : { orderBy?: DevicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DevicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devices model
   */
  readonly fields: DevicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractsDefaultArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Devices model
   */
  interface DevicesFieldRefs {
    readonly id: FieldRef<"Devices", 'Int'>
    readonly description: FieldRef<"Devices", 'String'>
    readonly serialNumber: FieldRef<"Devices", 'String'>
    readonly mac: FieldRef<"Devices", 'String'>
    readonly brand: FieldRef<"Devices", 'String'>
    readonly model: FieldRef<"Devices", 'String'>
    readonly isNew: FieldRef<"Devices", 'Boolean'>
    readonly status: FieldRef<"Devices", 'String'>
    readonly createdAt: FieldRef<"Devices", 'DateTime'>
    readonly updatedAt: FieldRef<"Devices", 'DateTime'>
    readonly contractId: FieldRef<"Devices", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Devices findUnique
   */
  export type DevicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices findUniqueOrThrow
   */
  export type DevicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices findFirst
   */
  export type DevicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Devices findFirstOrThrow
   */
  export type DevicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Devices findMany
   */
  export type DevicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Devices create
   */
  export type DevicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Devices.
     */
    data: XOR<DevicesCreateInput, DevicesUncheckedCreateInput>
  }

  /**
   * Devices createMany
   */
  export type DevicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DevicesCreateManyInput | DevicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devices update
   */
  export type DevicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Devices.
     */
    data: XOR<DevicesUpdateInput, DevicesUncheckedUpdateInput>
    /**
     * Choose, which Devices to update.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices updateMany
   */
  export type DevicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DevicesWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Devices upsert
   */
  export type DevicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Devices to update in case it exists.
     */
    where: DevicesWhereUniqueInput
    /**
     * In case the Devices found by the `where` argument doesn't exist, create a new Devices with this data.
     */
    create: XOR<DevicesCreateInput, DevicesUncheckedCreateInput>
    /**
     * In case the Devices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevicesUpdateInput, DevicesUncheckedUpdateInput>
  }

  /**
   * Devices delete
   */
  export type DevicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter which Devices to delete.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices deleteMany
   */
  export type DevicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DevicesWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Devices without action
   */
  export type DevicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
  }


  /**
   * Model Invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    id: number | null
    value: number | null
    contractId: number | null
  }

  export type InvoicesSumAggregateOutputType = {
    id: number | null
    value: number | null
    contractId: number | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: number | null
    barcode: string | null
    value: number | null
    status: string | null
    dueDate: Date | null
    fileName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contractId: number | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: number | null
    barcode: string | null
    value: number | null
    status: string | null
    dueDate: Date | null
    fileName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contractId: number | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    barcode: number
    value: number
    status: number
    dueDate: number
    fileName: number
    createdAt: number
    updatedAt: number
    contractId: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    id?: true
    value?: true
    contractId?: true
  }

  export type InvoicesSumAggregateInputType = {
    id?: true
    value?: true
    contractId?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    barcode?: true
    value?: true
    status?: true
    dueDate?: true
    fileName?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    barcode?: true
    value?: true
    status?: true
    dueDate?: true
    fileName?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    barcode?: true
    value?: true
    status?: true
    dueDate?: true
    fileName?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to aggregate.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type InvoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithAggregationInput | InvoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: InvoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: number
    barcode: string
    value: number
    status: string
    dueDate: Date
    fileName: string
    createdAt: Date
    updatedAt: Date
    contractId: number
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends InvoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type InvoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barcode?: boolean
    value?: boolean
    status?: boolean
    dueDate?: boolean
    fileName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>



  export type InvoicesSelectScalar = {
    id?: boolean
    barcode?: boolean
    value?: boolean
    status?: boolean
    dueDate?: boolean
    fileName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
  }

  export type InvoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "barcode" | "value" | "status" | "dueDate" | "fileName" | "createdAt" | "updatedAt" | "contractId", ExtArgs["result"]["invoices"]>
  export type InvoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }

  export type $InvoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoices"
    objects: {
      contract: Prisma.$ContractsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      barcode: string
      value: number
      status: string
      dueDate: Date
      fileName: string
      createdAt: Date
      updatedAt: Date
      contractId: number
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type InvoicesGetPayload<S extends boolean | null | undefined | InvoicesDefaultArgs> = $Result.GetResult<Prisma.$InvoicesPayload, S>

  type InvoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface InvoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoices'], meta: { name: 'Invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {InvoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoicesFindUniqueArgs>(args: SelectSubset<T, InvoicesFindUniqueArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoicesFindFirstArgs>(args?: SelectSubset<T, InvoicesFindFirstArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoicesFindManyArgs>(args?: SelectSubset<T, InvoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {InvoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends InvoicesCreateArgs>(args: SelectSubset<T, InvoicesCreateArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoicesCreateManyArgs>(args?: SelectSubset<T, InvoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoices.
     * @param {InvoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends InvoicesDeleteArgs>(args: SelectSubset<T, InvoicesDeleteArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {InvoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoicesUpdateArgs>(args: SelectSubset<T, InvoicesUpdateArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoicesDeleteManyArgs>(args?: SelectSubset<T, InvoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoicesUpdateManyArgs>(args: SelectSubset<T, InvoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoices.
     * @param {InvoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends InvoicesUpsertArgs>(args: SelectSubset<T, InvoicesUpsertArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoicesCountArgs>(
      args?: Subset<T, InvoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoicesGroupByArgs['orderBy'] }
        : { orderBy?: InvoicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoices model
   */
  readonly fields: InvoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractsDefaultArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoices model
   */
  interface InvoicesFieldRefs {
    readonly id: FieldRef<"Invoices", 'Int'>
    readonly barcode: FieldRef<"Invoices", 'String'>
    readonly value: FieldRef<"Invoices", 'Float'>
    readonly status: FieldRef<"Invoices", 'String'>
    readonly dueDate: FieldRef<"Invoices", 'DateTime'>
    readonly fileName: FieldRef<"Invoices", 'String'>
    readonly createdAt: FieldRef<"Invoices", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoices", 'DateTime'>
    readonly contractId: FieldRef<"Invoices", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Invoices findUnique
   */
  export type InvoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices findUniqueOrThrow
   */
  export type InvoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices findFirst
   */
  export type InvoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices findFirstOrThrow
   */
  export type InvoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices findMany
   */
  export type InvoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices create
   */
  export type InvoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoices.
     */
    data: XOR<InvoicesCreateInput, InvoicesUncheckedCreateInput>
  }

  /**
   * Invoices createMany
   */
  export type InvoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoicesCreateManyInput | InvoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoices update
   */
  export type InvoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoices.
     */
    data: XOR<InvoicesUpdateInput, InvoicesUncheckedUpdateInput>
    /**
     * Choose, which Invoices to update.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices updateMany
   */
  export type InvoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoices upsert
   */
  export type InvoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoices to update in case it exists.
     */
    where: InvoicesWhereUniqueInput
    /**
     * In case the Invoices found by the `where` argument doesn't exist, create a new Invoices with this data.
     */
    create: XOR<InvoicesCreateInput, InvoicesUncheckedCreateInput>
    /**
     * In case the Invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoicesUpdateInput, InvoicesUncheckedUpdateInput>
  }

  /**
   * Invoices delete
   */
  export type InvoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter which Invoices to delete.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices deleteMany
   */
  export type InvoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoices without action
   */
  export type InvoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
  }


  /**
   * Model CallsHistory
   */

  export type AggregateCallsHistory = {
    _count: CallsHistoryCountAggregateOutputType | null
    _avg: CallsHistoryAvgAggregateOutputType | null
    _sum: CallsHistorySumAggregateOutputType | null
    _min: CallsHistoryMinAggregateOutputType | null
    _max: CallsHistoryMaxAggregateOutputType | null
  }

  export type CallsHistoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CallsHistorySumAggregateOutputType = {
    id: number | null
  }

  export type CallsHistoryMinAggregateOutputType = {
    id: number | null
    status: string | null
    queue: string | null
    extension: string | null
    uniqueId: string | null
    linkId: string | null
    phoneNumber: string | null
    showOnPanel: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type CallsHistoryMaxAggregateOutputType = {
    id: number | null
    status: string | null
    queue: string | null
    extension: string | null
    uniqueId: string | null
    linkId: string | null
    phoneNumber: string | null
    showOnPanel: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type CallsHistoryCountAggregateOutputType = {
    id: number
    status: number
    queue: number
    extension: number
    uniqueId: number
    linkId: number
    phoneNumber: number
    showOnPanel: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type CallsHistoryAvgAggregateInputType = {
    id?: true
  }

  export type CallsHistorySumAggregateInputType = {
    id?: true
  }

  export type CallsHistoryMinAggregateInputType = {
    id?: true
    status?: true
    queue?: true
    extension?: true
    uniqueId?: true
    linkId?: true
    phoneNumber?: true
    showOnPanel?: true
    updatedAt?: true
    createdAt?: true
  }

  export type CallsHistoryMaxAggregateInputType = {
    id?: true
    status?: true
    queue?: true
    extension?: true
    uniqueId?: true
    linkId?: true
    phoneNumber?: true
    showOnPanel?: true
    updatedAt?: true
    createdAt?: true
  }

  export type CallsHistoryCountAggregateInputType = {
    id?: true
    status?: true
    queue?: true
    extension?: true
    uniqueId?: true
    linkId?: true
    phoneNumber?: true
    showOnPanel?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type CallsHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallsHistory to aggregate.
     */
    where?: CallsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallsHistories to fetch.
     */
    orderBy?: CallsHistoryOrderByWithRelationInput | CallsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CallsHistories
    **/
    _count?: true | CallsHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallsHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallsHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallsHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallsHistoryMaxAggregateInputType
  }

  export type GetCallsHistoryAggregateType<T extends CallsHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCallsHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCallsHistory[P]>
      : GetScalarType<T[P], AggregateCallsHistory[P]>
  }




  export type CallsHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallsHistoryWhereInput
    orderBy?: CallsHistoryOrderByWithAggregationInput | CallsHistoryOrderByWithAggregationInput[]
    by: CallsHistoryScalarFieldEnum[] | CallsHistoryScalarFieldEnum
    having?: CallsHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallsHistoryCountAggregateInputType | true
    _avg?: CallsHistoryAvgAggregateInputType
    _sum?: CallsHistorySumAggregateInputType
    _min?: CallsHistoryMinAggregateInputType
    _max?: CallsHistoryMaxAggregateInputType
  }

  export type CallsHistoryGroupByOutputType = {
    id: number
    status: string
    queue: string
    extension: string
    uniqueId: string
    linkId: string
    phoneNumber: string | null
    showOnPanel: boolean
    updatedAt: Date
    createdAt: Date
    _count: CallsHistoryCountAggregateOutputType | null
    _avg: CallsHistoryAvgAggregateOutputType | null
    _sum: CallsHistorySumAggregateOutputType | null
    _min: CallsHistoryMinAggregateOutputType | null
    _max: CallsHistoryMaxAggregateOutputType | null
  }

  type GetCallsHistoryGroupByPayload<T extends CallsHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallsHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallsHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallsHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CallsHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CallsHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    queue?: boolean
    extension?: boolean
    uniqueId?: boolean
    linkId?: boolean
    phoneNumber?: boolean
    showOnPanel?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["callsHistory"]>



  export type CallsHistorySelectScalar = {
    id?: boolean
    status?: boolean
    queue?: boolean
    extension?: boolean
    uniqueId?: boolean
    linkId?: boolean
    phoneNumber?: boolean
    showOnPanel?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type CallsHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "queue" | "extension" | "uniqueId" | "linkId" | "phoneNumber" | "showOnPanel" | "updatedAt" | "createdAt", ExtArgs["result"]["callsHistory"]>

  export type $CallsHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CallsHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      queue: string
      extension: string
      uniqueId: string
      linkId: string
      phoneNumber: string | null
      showOnPanel: boolean
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["callsHistory"]>
    composites: {}
  }

  type CallsHistoryGetPayload<S extends boolean | null | undefined | CallsHistoryDefaultArgs> = $Result.GetResult<Prisma.$CallsHistoryPayload, S>

  type CallsHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallsHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallsHistoryCountAggregateInputType | true
    }

  export interface CallsHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CallsHistory'], meta: { name: 'CallsHistory' } }
    /**
     * Find zero or one CallsHistory that matches the filter.
     * @param {CallsHistoryFindUniqueArgs} args - Arguments to find a CallsHistory
     * @example
     * // Get one CallsHistory
     * const callsHistory = await prisma.callsHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallsHistoryFindUniqueArgs>(args: SelectSubset<T, CallsHistoryFindUniqueArgs<ExtArgs>>): Prisma__CallsHistoryClient<$Result.GetResult<Prisma.$CallsHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CallsHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallsHistoryFindUniqueOrThrowArgs} args - Arguments to find a CallsHistory
     * @example
     * // Get one CallsHistory
     * const callsHistory = await prisma.callsHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallsHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CallsHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallsHistoryClient<$Result.GetResult<Prisma.$CallsHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallsHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallsHistoryFindFirstArgs} args - Arguments to find a CallsHistory
     * @example
     * // Get one CallsHistory
     * const callsHistory = await prisma.callsHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallsHistoryFindFirstArgs>(args?: SelectSubset<T, CallsHistoryFindFirstArgs<ExtArgs>>): Prisma__CallsHistoryClient<$Result.GetResult<Prisma.$CallsHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallsHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallsHistoryFindFirstOrThrowArgs} args - Arguments to find a CallsHistory
     * @example
     * // Get one CallsHistory
     * const callsHistory = await prisma.callsHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallsHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CallsHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallsHistoryClient<$Result.GetResult<Prisma.$CallsHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CallsHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallsHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CallsHistories
     * const callsHistories = await prisma.callsHistory.findMany()
     * 
     * // Get first 10 CallsHistories
     * const callsHistories = await prisma.callsHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callsHistoryWithIdOnly = await prisma.callsHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallsHistoryFindManyArgs>(args?: SelectSubset<T, CallsHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallsHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CallsHistory.
     * @param {CallsHistoryCreateArgs} args - Arguments to create a CallsHistory.
     * @example
     * // Create one CallsHistory
     * const CallsHistory = await prisma.callsHistory.create({
     *   data: {
     *     // ... data to create a CallsHistory
     *   }
     * })
     * 
     */
    create<T extends CallsHistoryCreateArgs>(args: SelectSubset<T, CallsHistoryCreateArgs<ExtArgs>>): Prisma__CallsHistoryClient<$Result.GetResult<Prisma.$CallsHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CallsHistories.
     * @param {CallsHistoryCreateManyArgs} args - Arguments to create many CallsHistories.
     * @example
     * // Create many CallsHistories
     * const callsHistory = await prisma.callsHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallsHistoryCreateManyArgs>(args?: SelectSubset<T, CallsHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CallsHistory.
     * @param {CallsHistoryDeleteArgs} args - Arguments to delete one CallsHistory.
     * @example
     * // Delete one CallsHistory
     * const CallsHistory = await prisma.callsHistory.delete({
     *   where: {
     *     // ... filter to delete one CallsHistory
     *   }
     * })
     * 
     */
    delete<T extends CallsHistoryDeleteArgs>(args: SelectSubset<T, CallsHistoryDeleteArgs<ExtArgs>>): Prisma__CallsHistoryClient<$Result.GetResult<Prisma.$CallsHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CallsHistory.
     * @param {CallsHistoryUpdateArgs} args - Arguments to update one CallsHistory.
     * @example
     * // Update one CallsHistory
     * const callsHistory = await prisma.callsHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallsHistoryUpdateArgs>(args: SelectSubset<T, CallsHistoryUpdateArgs<ExtArgs>>): Prisma__CallsHistoryClient<$Result.GetResult<Prisma.$CallsHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CallsHistories.
     * @param {CallsHistoryDeleteManyArgs} args - Arguments to filter CallsHistories to delete.
     * @example
     * // Delete a few CallsHistories
     * const { count } = await prisma.callsHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallsHistoryDeleteManyArgs>(args?: SelectSubset<T, CallsHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallsHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CallsHistories
     * const callsHistory = await prisma.callsHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallsHistoryUpdateManyArgs>(args: SelectSubset<T, CallsHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CallsHistory.
     * @param {CallsHistoryUpsertArgs} args - Arguments to update or create a CallsHistory.
     * @example
     * // Update or create a CallsHistory
     * const callsHistory = await prisma.callsHistory.upsert({
     *   create: {
     *     // ... data to create a CallsHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CallsHistory we want to update
     *   }
     * })
     */
    upsert<T extends CallsHistoryUpsertArgs>(args: SelectSubset<T, CallsHistoryUpsertArgs<ExtArgs>>): Prisma__CallsHistoryClient<$Result.GetResult<Prisma.$CallsHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CallsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallsHistoryCountArgs} args - Arguments to filter CallsHistories to count.
     * @example
     * // Count the number of CallsHistories
     * const count = await prisma.callsHistory.count({
     *   where: {
     *     // ... the filter for the CallsHistories we want to count
     *   }
     * })
    **/
    count<T extends CallsHistoryCountArgs>(
      args?: Subset<T, CallsHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallsHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CallsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallsHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CallsHistoryAggregateArgs>(args: Subset<T, CallsHistoryAggregateArgs>): Prisma.PrismaPromise<GetCallsHistoryAggregateType<T>>

    /**
     * Group by CallsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallsHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CallsHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallsHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CallsHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CallsHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallsHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CallsHistory model
   */
  readonly fields: CallsHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CallsHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallsHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CallsHistory model
   */
  interface CallsHistoryFieldRefs {
    readonly id: FieldRef<"CallsHistory", 'Int'>
    readonly status: FieldRef<"CallsHistory", 'String'>
    readonly queue: FieldRef<"CallsHistory", 'String'>
    readonly extension: FieldRef<"CallsHistory", 'String'>
    readonly uniqueId: FieldRef<"CallsHistory", 'String'>
    readonly linkId: FieldRef<"CallsHistory", 'String'>
    readonly phoneNumber: FieldRef<"CallsHistory", 'String'>
    readonly showOnPanel: FieldRef<"CallsHistory", 'Boolean'>
    readonly updatedAt: FieldRef<"CallsHistory", 'DateTime'>
    readonly createdAt: FieldRef<"CallsHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CallsHistory findUnique
   */
  export type CallsHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CallsHistory to fetch.
     */
    where: CallsHistoryWhereUniqueInput
  }

  /**
   * CallsHistory findUniqueOrThrow
   */
  export type CallsHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CallsHistory to fetch.
     */
    where: CallsHistoryWhereUniqueInput
  }

  /**
   * CallsHistory findFirst
   */
  export type CallsHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CallsHistory to fetch.
     */
    where?: CallsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallsHistories to fetch.
     */
    orderBy?: CallsHistoryOrderByWithRelationInput | CallsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallsHistories.
     */
    cursor?: CallsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallsHistories.
     */
    distinct?: CallsHistoryScalarFieldEnum | CallsHistoryScalarFieldEnum[]
  }

  /**
   * CallsHistory findFirstOrThrow
   */
  export type CallsHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CallsHistory to fetch.
     */
    where?: CallsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallsHistories to fetch.
     */
    orderBy?: CallsHistoryOrderByWithRelationInput | CallsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallsHistories.
     */
    cursor?: CallsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallsHistories.
     */
    distinct?: CallsHistoryScalarFieldEnum | CallsHistoryScalarFieldEnum[]
  }

  /**
   * CallsHistory findMany
   */
  export type CallsHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which CallsHistories to fetch.
     */
    where?: CallsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallsHistories to fetch.
     */
    orderBy?: CallsHistoryOrderByWithRelationInput | CallsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CallsHistories.
     */
    cursor?: CallsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallsHistories.
     */
    skip?: number
    distinct?: CallsHistoryScalarFieldEnum | CallsHistoryScalarFieldEnum[]
  }

  /**
   * CallsHistory create
   */
  export type CallsHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a CallsHistory.
     */
    data: XOR<CallsHistoryCreateInput, CallsHistoryUncheckedCreateInput>
  }

  /**
   * CallsHistory createMany
   */
  export type CallsHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CallsHistories.
     */
    data: CallsHistoryCreateManyInput | CallsHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CallsHistory update
   */
  export type CallsHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a CallsHistory.
     */
    data: XOR<CallsHistoryUpdateInput, CallsHistoryUncheckedUpdateInput>
    /**
     * Choose, which CallsHistory to update.
     */
    where: CallsHistoryWhereUniqueInput
  }

  /**
   * CallsHistory updateMany
   */
  export type CallsHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CallsHistories.
     */
    data: XOR<CallsHistoryUpdateManyMutationInput, CallsHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CallsHistories to update
     */
    where?: CallsHistoryWhereInput
    /**
     * Limit how many CallsHistories to update.
     */
    limit?: number
  }

  /**
   * CallsHistory upsert
   */
  export type CallsHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the CallsHistory to update in case it exists.
     */
    where: CallsHistoryWhereUniqueInput
    /**
     * In case the CallsHistory found by the `where` argument doesn't exist, create a new CallsHistory with this data.
     */
    create: XOR<CallsHistoryCreateInput, CallsHistoryUncheckedCreateInput>
    /**
     * In case the CallsHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallsHistoryUpdateInput, CallsHistoryUncheckedUpdateInput>
  }

  /**
   * CallsHistory delete
   */
  export type CallsHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
    /**
     * Filter which CallsHistory to delete.
     */
    where: CallsHistoryWhereUniqueInput
  }

  /**
   * CallsHistory deleteMany
   */
  export type CallsHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallsHistories to delete
     */
    where?: CallsHistoryWhereInput
    /**
     * Limit how many CallsHistories to delete.
     */
    limit?: number
  }

  /**
   * CallsHistory without action
   */
  export type CallsHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallsHistory
     */
    select?: CallsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallsHistory
     */
    omit?: CallsHistoryOmit<ExtArgs> | null
  }


  /**
   * Model cdr_lucas
   */

  export type AggregateCdr_lucas = {
    _count: Cdr_lucasCountAggregateOutputType | null
    _avg: Cdr_lucasAvgAggregateOutputType | null
    _sum: Cdr_lucasSumAggregateOutputType | null
    _min: Cdr_lucasMinAggregateOutputType | null
    _max: Cdr_lucasMaxAggregateOutputType | null
  }

  export type Cdr_lucasAvgAggregateOutputType = {
    duration: number | null
    waitingTime: number | null
    sync: number | null
  }

  export type Cdr_lucasSumAggregateOutputType = {
    duration: number | null
    waitingTime: number | null
    sync: number | null
  }

  export type Cdr_lucasMinAggregateOutputType = {
    linkedid: string | null
    calldate: Date | null
    source: string | null
    destination: string | null
    did: string | null
    channel: string | null
    dcontext: string | null
    queue: string | null
    direction: string | null
    agente: string | null
    agenteName: string | null
    status: string | null
    recordingFile: string | null
    duration: number | null
    waitingTime: number | null
    sync: number | null
  }

  export type Cdr_lucasMaxAggregateOutputType = {
    linkedid: string | null
    calldate: Date | null
    source: string | null
    destination: string | null
    did: string | null
    channel: string | null
    dcontext: string | null
    queue: string | null
    direction: string | null
    agente: string | null
    agenteName: string | null
    status: string | null
    recordingFile: string | null
    duration: number | null
    waitingTime: number | null
    sync: number | null
  }

  export type Cdr_lucasCountAggregateOutputType = {
    linkedid: number
    calldate: number
    source: number
    destination: number
    did: number
    channel: number
    dcontext: number
    queue: number
    direction: number
    agente: number
    agenteName: number
    status: number
    recordingFile: number
    duration: number
    waitingTime: number
    sync: number
    _all: number
  }


  export type Cdr_lucasAvgAggregateInputType = {
    duration?: true
    waitingTime?: true
    sync?: true
  }

  export type Cdr_lucasSumAggregateInputType = {
    duration?: true
    waitingTime?: true
    sync?: true
  }

  export type Cdr_lucasMinAggregateInputType = {
    linkedid?: true
    calldate?: true
    source?: true
    destination?: true
    did?: true
    channel?: true
    dcontext?: true
    queue?: true
    direction?: true
    agente?: true
    agenteName?: true
    status?: true
    recordingFile?: true
    duration?: true
    waitingTime?: true
    sync?: true
  }

  export type Cdr_lucasMaxAggregateInputType = {
    linkedid?: true
    calldate?: true
    source?: true
    destination?: true
    did?: true
    channel?: true
    dcontext?: true
    queue?: true
    direction?: true
    agente?: true
    agenteName?: true
    status?: true
    recordingFile?: true
    duration?: true
    waitingTime?: true
    sync?: true
  }

  export type Cdr_lucasCountAggregateInputType = {
    linkedid?: true
    calldate?: true
    source?: true
    destination?: true
    did?: true
    channel?: true
    dcontext?: true
    queue?: true
    direction?: true
    agente?: true
    agenteName?: true
    status?: true
    recordingFile?: true
    duration?: true
    waitingTime?: true
    sync?: true
    _all?: true
  }

  export type Cdr_lucasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cdr_lucas to aggregate.
     */
    where?: cdr_lucasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cdr_lucas to fetch.
     */
    orderBy?: cdr_lucasOrderByWithRelationInput | cdr_lucasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cdr_lucasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cdr_lucas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cdr_lucas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cdr_lucas
    **/
    _count?: true | Cdr_lucasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cdr_lucasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cdr_lucasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cdr_lucasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cdr_lucasMaxAggregateInputType
  }

  export type GetCdr_lucasAggregateType<T extends Cdr_lucasAggregateArgs> = {
        [P in keyof T & keyof AggregateCdr_lucas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCdr_lucas[P]>
      : GetScalarType<T[P], AggregateCdr_lucas[P]>
  }




  export type cdr_lucasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cdr_lucasWhereInput
    orderBy?: cdr_lucasOrderByWithAggregationInput | cdr_lucasOrderByWithAggregationInput[]
    by: Cdr_lucasScalarFieldEnum[] | Cdr_lucasScalarFieldEnum
    having?: cdr_lucasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cdr_lucasCountAggregateInputType | true
    _avg?: Cdr_lucasAvgAggregateInputType
    _sum?: Cdr_lucasSumAggregateInputType
    _min?: Cdr_lucasMinAggregateInputType
    _max?: Cdr_lucasMaxAggregateInputType
  }

  export type Cdr_lucasGroupByOutputType = {
    linkedid: string
    calldate: Date | null
    source: string | null
    destination: string | null
    did: string | null
    channel: string | null
    dcontext: string | null
    queue: string | null
    direction: string | null
    agente: string | null
    agenteName: string | null
    status: string | null
    recordingFile: string | null
    duration: number | null
    waitingTime: number | null
    sync: number | null
    _count: Cdr_lucasCountAggregateOutputType | null
    _avg: Cdr_lucasAvgAggregateOutputType | null
    _sum: Cdr_lucasSumAggregateOutputType | null
    _min: Cdr_lucasMinAggregateOutputType | null
    _max: Cdr_lucasMaxAggregateOutputType | null
  }

  type GetCdr_lucasGroupByPayload<T extends cdr_lucasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cdr_lucasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cdr_lucasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cdr_lucasGroupByOutputType[P]>
            : GetScalarType<T[P], Cdr_lucasGroupByOutputType[P]>
        }
      >
    >


  export type cdr_lucasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    linkedid?: boolean
    calldate?: boolean
    source?: boolean
    destination?: boolean
    did?: boolean
    channel?: boolean
    dcontext?: boolean
    queue?: boolean
    direction?: boolean
    agente?: boolean
    agenteName?: boolean
    status?: boolean
    recordingFile?: boolean
    duration?: boolean
    waitingTime?: boolean
    sync?: boolean
  }, ExtArgs["result"]["cdr_lucas"]>



  export type cdr_lucasSelectScalar = {
    linkedid?: boolean
    calldate?: boolean
    source?: boolean
    destination?: boolean
    did?: boolean
    channel?: boolean
    dcontext?: boolean
    queue?: boolean
    direction?: boolean
    agente?: boolean
    agenteName?: boolean
    status?: boolean
    recordingFile?: boolean
    duration?: boolean
    waitingTime?: boolean
    sync?: boolean
  }

  export type cdr_lucasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"linkedid" | "calldate" | "source" | "destination" | "did" | "channel" | "dcontext" | "queue" | "direction" | "agente" | "agenteName" | "status" | "recordingFile" | "duration" | "waitingTime" | "sync", ExtArgs["result"]["cdr_lucas"]>

  export type $cdr_lucasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cdr_lucas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      linkedid: string
      calldate: Date | null
      source: string | null
      destination: string | null
      did: string | null
      channel: string | null
      dcontext: string | null
      queue: string | null
      direction: string | null
      agente: string | null
      agenteName: string | null
      status: string | null
      recordingFile: string | null
      duration: number | null
      waitingTime: number | null
      sync: number | null
    }, ExtArgs["result"]["cdr_lucas"]>
    composites: {}
  }

  type cdr_lucasGetPayload<S extends boolean | null | undefined | cdr_lucasDefaultArgs> = $Result.GetResult<Prisma.$cdr_lucasPayload, S>

  type cdr_lucasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cdr_lucasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cdr_lucasCountAggregateInputType | true
    }

  export interface cdr_lucasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cdr_lucas'], meta: { name: 'cdr_lucas' } }
    /**
     * Find zero or one Cdr_lucas that matches the filter.
     * @param {cdr_lucasFindUniqueArgs} args - Arguments to find a Cdr_lucas
     * @example
     * // Get one Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cdr_lucasFindUniqueArgs>(args: SelectSubset<T, cdr_lucasFindUniqueArgs<ExtArgs>>): Prisma__cdr_lucasClient<$Result.GetResult<Prisma.$cdr_lucasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cdr_lucas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cdr_lucasFindUniqueOrThrowArgs} args - Arguments to find a Cdr_lucas
     * @example
     * // Get one Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cdr_lucasFindUniqueOrThrowArgs>(args: SelectSubset<T, cdr_lucasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cdr_lucasClient<$Result.GetResult<Prisma.$cdr_lucasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cdr_lucas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cdr_lucasFindFirstArgs} args - Arguments to find a Cdr_lucas
     * @example
     * // Get one Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cdr_lucasFindFirstArgs>(args?: SelectSubset<T, cdr_lucasFindFirstArgs<ExtArgs>>): Prisma__cdr_lucasClient<$Result.GetResult<Prisma.$cdr_lucasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cdr_lucas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cdr_lucasFindFirstOrThrowArgs} args - Arguments to find a Cdr_lucas
     * @example
     * // Get one Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cdr_lucasFindFirstOrThrowArgs>(args?: SelectSubset<T, cdr_lucasFindFirstOrThrowArgs<ExtArgs>>): Prisma__cdr_lucasClient<$Result.GetResult<Prisma.$cdr_lucasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cdr_lucas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cdr_lucasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.findMany()
     * 
     * // Get first 10 Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.findMany({ take: 10 })
     * 
     * // Only select the `linkedid`
     * const cdr_lucasWithLinkedidOnly = await prisma.cdr_lucas.findMany({ select: { linkedid: true } })
     * 
     */
    findMany<T extends cdr_lucasFindManyArgs>(args?: SelectSubset<T, cdr_lucasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cdr_lucasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cdr_lucas.
     * @param {cdr_lucasCreateArgs} args - Arguments to create a Cdr_lucas.
     * @example
     * // Create one Cdr_lucas
     * const Cdr_lucas = await prisma.cdr_lucas.create({
     *   data: {
     *     // ... data to create a Cdr_lucas
     *   }
     * })
     * 
     */
    create<T extends cdr_lucasCreateArgs>(args: SelectSubset<T, cdr_lucasCreateArgs<ExtArgs>>): Prisma__cdr_lucasClient<$Result.GetResult<Prisma.$cdr_lucasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cdr_lucas.
     * @param {cdr_lucasCreateManyArgs} args - Arguments to create many Cdr_lucas.
     * @example
     * // Create many Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cdr_lucasCreateManyArgs>(args?: SelectSubset<T, cdr_lucasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cdr_lucas.
     * @param {cdr_lucasDeleteArgs} args - Arguments to delete one Cdr_lucas.
     * @example
     * // Delete one Cdr_lucas
     * const Cdr_lucas = await prisma.cdr_lucas.delete({
     *   where: {
     *     // ... filter to delete one Cdr_lucas
     *   }
     * })
     * 
     */
    delete<T extends cdr_lucasDeleteArgs>(args: SelectSubset<T, cdr_lucasDeleteArgs<ExtArgs>>): Prisma__cdr_lucasClient<$Result.GetResult<Prisma.$cdr_lucasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cdr_lucas.
     * @param {cdr_lucasUpdateArgs} args - Arguments to update one Cdr_lucas.
     * @example
     * // Update one Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cdr_lucasUpdateArgs>(args: SelectSubset<T, cdr_lucasUpdateArgs<ExtArgs>>): Prisma__cdr_lucasClient<$Result.GetResult<Prisma.$cdr_lucasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cdr_lucas.
     * @param {cdr_lucasDeleteManyArgs} args - Arguments to filter Cdr_lucas to delete.
     * @example
     * // Delete a few Cdr_lucas
     * const { count } = await prisma.cdr_lucas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cdr_lucasDeleteManyArgs>(args?: SelectSubset<T, cdr_lucasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cdr_lucas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cdr_lucasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cdr_lucasUpdateManyArgs>(args: SelectSubset<T, cdr_lucasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cdr_lucas.
     * @param {cdr_lucasUpsertArgs} args - Arguments to update or create a Cdr_lucas.
     * @example
     * // Update or create a Cdr_lucas
     * const cdr_lucas = await prisma.cdr_lucas.upsert({
     *   create: {
     *     // ... data to create a Cdr_lucas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cdr_lucas we want to update
     *   }
     * })
     */
    upsert<T extends cdr_lucasUpsertArgs>(args: SelectSubset<T, cdr_lucasUpsertArgs<ExtArgs>>): Prisma__cdr_lucasClient<$Result.GetResult<Prisma.$cdr_lucasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cdr_lucas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cdr_lucasCountArgs} args - Arguments to filter Cdr_lucas to count.
     * @example
     * // Count the number of Cdr_lucas
     * const count = await prisma.cdr_lucas.count({
     *   where: {
     *     // ... the filter for the Cdr_lucas we want to count
     *   }
     * })
    **/
    count<T extends cdr_lucasCountArgs>(
      args?: Subset<T, cdr_lucasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cdr_lucasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cdr_lucas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cdr_lucasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cdr_lucasAggregateArgs>(args: Subset<T, Cdr_lucasAggregateArgs>): Prisma.PrismaPromise<GetCdr_lucasAggregateType<T>>

    /**
     * Group by Cdr_lucas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cdr_lucasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cdr_lucasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cdr_lucasGroupByArgs['orderBy'] }
        : { orderBy?: cdr_lucasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cdr_lucasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCdr_lucasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cdr_lucas model
   */
  readonly fields: cdr_lucasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cdr_lucas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cdr_lucasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cdr_lucas model
   */
  interface cdr_lucasFieldRefs {
    readonly linkedid: FieldRef<"cdr_lucas", 'String'>
    readonly calldate: FieldRef<"cdr_lucas", 'DateTime'>
    readonly source: FieldRef<"cdr_lucas", 'String'>
    readonly destination: FieldRef<"cdr_lucas", 'String'>
    readonly did: FieldRef<"cdr_lucas", 'String'>
    readonly channel: FieldRef<"cdr_lucas", 'String'>
    readonly dcontext: FieldRef<"cdr_lucas", 'String'>
    readonly queue: FieldRef<"cdr_lucas", 'String'>
    readonly direction: FieldRef<"cdr_lucas", 'String'>
    readonly agente: FieldRef<"cdr_lucas", 'String'>
    readonly agenteName: FieldRef<"cdr_lucas", 'String'>
    readonly status: FieldRef<"cdr_lucas", 'String'>
    readonly recordingFile: FieldRef<"cdr_lucas", 'String'>
    readonly duration: FieldRef<"cdr_lucas", 'Int'>
    readonly waitingTime: FieldRef<"cdr_lucas", 'Int'>
    readonly sync: FieldRef<"cdr_lucas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cdr_lucas findUnique
   */
  export type cdr_lucasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
    /**
     * Filter, which cdr_lucas to fetch.
     */
    where: cdr_lucasWhereUniqueInput
  }

  /**
   * cdr_lucas findUniqueOrThrow
   */
  export type cdr_lucasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
    /**
     * Filter, which cdr_lucas to fetch.
     */
    where: cdr_lucasWhereUniqueInput
  }

  /**
   * cdr_lucas findFirst
   */
  export type cdr_lucasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
    /**
     * Filter, which cdr_lucas to fetch.
     */
    where?: cdr_lucasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cdr_lucas to fetch.
     */
    orderBy?: cdr_lucasOrderByWithRelationInput | cdr_lucasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cdr_lucas.
     */
    cursor?: cdr_lucasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cdr_lucas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cdr_lucas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cdr_lucas.
     */
    distinct?: Cdr_lucasScalarFieldEnum | Cdr_lucasScalarFieldEnum[]
  }

  /**
   * cdr_lucas findFirstOrThrow
   */
  export type cdr_lucasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
    /**
     * Filter, which cdr_lucas to fetch.
     */
    where?: cdr_lucasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cdr_lucas to fetch.
     */
    orderBy?: cdr_lucasOrderByWithRelationInput | cdr_lucasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cdr_lucas.
     */
    cursor?: cdr_lucasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cdr_lucas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cdr_lucas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cdr_lucas.
     */
    distinct?: Cdr_lucasScalarFieldEnum | Cdr_lucasScalarFieldEnum[]
  }

  /**
   * cdr_lucas findMany
   */
  export type cdr_lucasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
    /**
     * Filter, which cdr_lucas to fetch.
     */
    where?: cdr_lucasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cdr_lucas to fetch.
     */
    orderBy?: cdr_lucasOrderByWithRelationInput | cdr_lucasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cdr_lucas.
     */
    cursor?: cdr_lucasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cdr_lucas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cdr_lucas.
     */
    skip?: number
    distinct?: Cdr_lucasScalarFieldEnum | Cdr_lucasScalarFieldEnum[]
  }

  /**
   * cdr_lucas create
   */
  export type cdr_lucasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
    /**
     * The data needed to create a cdr_lucas.
     */
    data: XOR<cdr_lucasCreateInput, cdr_lucasUncheckedCreateInput>
  }

  /**
   * cdr_lucas createMany
   */
  export type cdr_lucasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cdr_lucas.
     */
    data: cdr_lucasCreateManyInput | cdr_lucasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cdr_lucas update
   */
  export type cdr_lucasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
    /**
     * The data needed to update a cdr_lucas.
     */
    data: XOR<cdr_lucasUpdateInput, cdr_lucasUncheckedUpdateInput>
    /**
     * Choose, which cdr_lucas to update.
     */
    where: cdr_lucasWhereUniqueInput
  }

  /**
   * cdr_lucas updateMany
   */
  export type cdr_lucasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cdr_lucas.
     */
    data: XOR<cdr_lucasUpdateManyMutationInput, cdr_lucasUncheckedUpdateManyInput>
    /**
     * Filter which cdr_lucas to update
     */
    where?: cdr_lucasWhereInput
    /**
     * Limit how many cdr_lucas to update.
     */
    limit?: number
  }

  /**
   * cdr_lucas upsert
   */
  export type cdr_lucasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
    /**
     * The filter to search for the cdr_lucas to update in case it exists.
     */
    where: cdr_lucasWhereUniqueInput
    /**
     * In case the cdr_lucas found by the `where` argument doesn't exist, create a new cdr_lucas with this data.
     */
    create: XOR<cdr_lucasCreateInput, cdr_lucasUncheckedCreateInput>
    /**
     * In case the cdr_lucas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cdr_lucasUpdateInput, cdr_lucasUncheckedUpdateInput>
  }

  /**
   * cdr_lucas delete
   */
  export type cdr_lucasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
    /**
     * Filter which cdr_lucas to delete.
     */
    where: cdr_lucasWhereUniqueInput
  }

  /**
   * cdr_lucas deleteMany
   */
  export type cdr_lucasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cdr_lucas to delete
     */
    where?: cdr_lucasWhereInput
    /**
     * Limit how many cdr_lucas to delete.
     */
    limit?: number
  }

  /**
   * cdr_lucas without action
   */
  export type cdr_lucasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cdr_lucas
     */
    select?: cdr_lucasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cdr_lucas
     */
    omit?: cdr_lucasOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdmUsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    recoveryToken: 'recoveryToken',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdmUsersScalarFieldEnum = (typeof AdmUsersScalarFieldEnum)[keyof typeof AdmUsersScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    cpfCnpj: 'cpfCnpj',
    type: 'type',
    phoneNumber: 'phoneNumber',
    street: 'street',
    district: 'district',
    number: 'number',
    city: 'city',
    zipCode: 'zipCode',
    state: 'state',
    isActive: 'isActive',
    observation: 'observation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    cpf: 'cpf',
    phoneNumber: 'phoneNumber',
    password: 'password',
    recoveryToken: 'recoveryToken',
    accessType: 'accessType',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ContractsScalarFieldEnum: {
    id: 'id',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type ContractsScalarFieldEnum = (typeof ContractsScalarFieldEnum)[keyof typeof ContractsScalarFieldEnum]


  export const ExtensionsScalarFieldEnum: {
    id: 'id',
    ramal: 'ramal',
    description: 'description',
    password: 'password',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type ExtensionsScalarFieldEnum = (typeof ExtensionsScalarFieldEnum)[keyof typeof ExtensionsScalarFieldEnum]


  export const QueuesScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type QueuesScalarFieldEnum = (typeof QueuesScalarFieldEnum)[keyof typeof QueuesScalarFieldEnum]


  export const NumbersScalarFieldEnum: {
    id: 'id',
    number: 'number',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type NumbersScalarFieldEnum = (typeof NumbersScalarFieldEnum)[keyof typeof NumbersScalarFieldEnum]


  export const CdrScalarFieldEnum: {
    id: 'id',
    linkedid: 'linkedid',
    callDate: 'callDate',
    source: 'source',
    destination: 'destination',
    channel: 'channel',
    queue: 'queue',
    queueName: 'queueName',
    agent: 'agent',
    direction: 'direction',
    status: 'status',
    recordingFile: 'recordingFile',
    duration: 'duration',
    waitingTime: 'waitingTime',
    serviceTime: 'serviceTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type CdrScalarFieldEnum = (typeof CdrScalarFieldEnum)[keyof typeof CdrScalarFieldEnum]


  export const DevicesScalarFieldEnum: {
    id: 'id',
    description: 'description',
    serialNumber: 'serialNumber',
    mac: 'mac',
    brand: 'brand',
    model: 'model',
    isNew: 'isNew',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    contractId: 'contractId'
  };

  export type DevicesScalarFieldEnum = (typeof DevicesScalarFieldEnum)[keyof typeof DevicesScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    barcode: 'barcode',
    value: 'value',
    status: 'status',
    dueDate: 'dueDate',
    fileName: 'fileName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    contractId: 'contractId'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const CallsHistoryScalarFieldEnum: {
    id: 'id',
    status: 'status',
    queue: 'queue',
    extension: 'extension',
    uniqueId: 'uniqueId',
    linkId: 'linkId',
    phoneNumber: 'phoneNumber',
    showOnPanel: 'showOnPanel',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type CallsHistoryScalarFieldEnum = (typeof CallsHistoryScalarFieldEnum)[keyof typeof CallsHistoryScalarFieldEnum]


  export const Cdr_lucasScalarFieldEnum: {
    linkedid: 'linkedid',
    calldate: 'calldate',
    source: 'source',
    destination: 'destination',
    did: 'did',
    channel: 'channel',
    dcontext: 'dcontext',
    queue: 'queue',
    direction: 'direction',
    agente: 'agente',
    agenteName: 'agenteName',
    status: 'status',
    recordingFile: 'recordingFile',
    duration: 'duration',
    waitingTime: 'waitingTime',
    sync: 'sync'
  };

  export type Cdr_lucasScalarFieldEnum = (typeof Cdr_lucasScalarFieldEnum)[keyof typeof Cdr_lucasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AdmUsersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    recoveryToken: 'recoveryToken'
  };

  export type AdmUsersOrderByRelevanceFieldEnum = (typeof AdmUsersOrderByRelevanceFieldEnum)[keyof typeof AdmUsersOrderByRelevanceFieldEnum]


  export const ClientsOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    cpfCnpj: 'cpfCnpj',
    type: 'type',
    phoneNumber: 'phoneNumber',
    street: 'street',
    district: 'district',
    number: 'number',
    city: 'city',
    zipCode: 'zipCode',
    state: 'state',
    observation: 'observation'
  };

  export type ClientsOrderByRelevanceFieldEnum = (typeof ClientsOrderByRelevanceFieldEnum)[keyof typeof ClientsOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    cpf: 'cpf',
    phoneNumber: 'phoneNumber',
    password: 'password',
    recoveryToken: 'recoveryToken',
    accessType: 'accessType'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const ExtensionsOrderByRelevanceFieldEnum: {
    ramal: 'ramal',
    description: 'description',
    password: 'password'
  };

  export type ExtensionsOrderByRelevanceFieldEnum = (typeof ExtensionsOrderByRelevanceFieldEnum)[keyof typeof ExtensionsOrderByRelevanceFieldEnum]


  export const QueuesOrderByRelevanceFieldEnum: {
    code: 'code',
    description: 'description'
  };

  export type QueuesOrderByRelevanceFieldEnum = (typeof QueuesOrderByRelevanceFieldEnum)[keyof typeof QueuesOrderByRelevanceFieldEnum]


  export const NumbersOrderByRelevanceFieldEnum: {
    number: 'number',
    description: 'description'
  };

  export type NumbersOrderByRelevanceFieldEnum = (typeof NumbersOrderByRelevanceFieldEnum)[keyof typeof NumbersOrderByRelevanceFieldEnum]


  export const CdrOrderByRelevanceFieldEnum: {
    source: 'source',
    destination: 'destination',
    channel: 'channel',
    queue: 'queue',
    queueName: 'queueName',
    agent: 'agent',
    direction: 'direction',
    status: 'status',
    recordingFile: 'recordingFile'
  };

  export type CdrOrderByRelevanceFieldEnum = (typeof CdrOrderByRelevanceFieldEnum)[keyof typeof CdrOrderByRelevanceFieldEnum]


  export const DevicesOrderByRelevanceFieldEnum: {
    description: 'description',
    serialNumber: 'serialNumber',
    mac: 'mac',
    brand: 'brand',
    model: 'model',
    status: 'status'
  };

  export type DevicesOrderByRelevanceFieldEnum = (typeof DevicesOrderByRelevanceFieldEnum)[keyof typeof DevicesOrderByRelevanceFieldEnum]


  export const InvoicesOrderByRelevanceFieldEnum: {
    barcode: 'barcode',
    status: 'status',
    fileName: 'fileName'
  };

  export type InvoicesOrderByRelevanceFieldEnum = (typeof InvoicesOrderByRelevanceFieldEnum)[keyof typeof InvoicesOrderByRelevanceFieldEnum]


  export const CallsHistoryOrderByRelevanceFieldEnum: {
    status: 'status',
    queue: 'queue',
    extension: 'extension',
    uniqueId: 'uniqueId',
    linkId: 'linkId',
    phoneNumber: 'phoneNumber'
  };

  export type CallsHistoryOrderByRelevanceFieldEnum = (typeof CallsHistoryOrderByRelevanceFieldEnum)[keyof typeof CallsHistoryOrderByRelevanceFieldEnum]


  export const cdr_lucasOrderByRelevanceFieldEnum: {
    linkedid: 'linkedid',
    source: 'source',
    destination: 'destination',
    did: 'did',
    channel: 'channel',
    dcontext: 'dcontext',
    queue: 'queue',
    direction: 'direction',
    agente: 'agente',
    agenteName: 'agenteName',
    status: 'status',
    recordingFile: 'recordingFile'
  };

  export type cdr_lucasOrderByRelevanceFieldEnum = (typeof cdr_lucasOrderByRelevanceFieldEnum)[keyof typeof cdr_lucasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdmUsersWhereInput = {
    AND?: AdmUsersWhereInput | AdmUsersWhereInput[]
    OR?: AdmUsersWhereInput[]
    NOT?: AdmUsersWhereInput | AdmUsersWhereInput[]
    id?: IntFilter<"AdmUsers"> | number
    name?: StringFilter<"AdmUsers"> | string
    email?: StringFilter<"AdmUsers"> | string
    password?: StringNullableFilter<"AdmUsers"> | string | null
    recoveryToken?: StringNullableFilter<"AdmUsers"> | string | null
    isActive?: BoolFilter<"AdmUsers"> | boolean
    createdAt?: DateTimeFilter<"AdmUsers"> | Date | string
    updatedAt?: DateTimeFilter<"AdmUsers"> | Date | string
  }

  export type AdmUsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    recoveryToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdmUsersOrderByRelevanceInput
  }

  export type AdmUsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdmUsersWhereInput | AdmUsersWhereInput[]
    OR?: AdmUsersWhereInput[]
    NOT?: AdmUsersWhereInput | AdmUsersWhereInput[]
    name?: StringFilter<"AdmUsers"> | string
    password?: StringNullableFilter<"AdmUsers"> | string | null
    recoveryToken?: StringNullableFilter<"AdmUsers"> | string | null
    isActive?: BoolFilter<"AdmUsers"> | boolean
    createdAt?: DateTimeFilter<"AdmUsers"> | Date | string
    updatedAt?: DateTimeFilter<"AdmUsers"> | Date | string
  }, "id" | "email">

  export type AdmUsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    recoveryToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdmUsersCountOrderByAggregateInput
    _avg?: AdmUsersAvgOrderByAggregateInput
    _max?: AdmUsersMaxOrderByAggregateInput
    _min?: AdmUsersMinOrderByAggregateInput
    _sum?: AdmUsersSumOrderByAggregateInput
  }

  export type AdmUsersScalarWhereWithAggregatesInput = {
    AND?: AdmUsersScalarWhereWithAggregatesInput | AdmUsersScalarWhereWithAggregatesInput[]
    OR?: AdmUsersScalarWhereWithAggregatesInput[]
    NOT?: AdmUsersScalarWhereWithAggregatesInput | AdmUsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdmUsers"> | number
    name?: StringWithAggregatesFilter<"AdmUsers"> | string
    email?: StringWithAggregatesFilter<"AdmUsers"> | string
    password?: StringNullableWithAggregatesFilter<"AdmUsers"> | string | null
    recoveryToken?: StringNullableWithAggregatesFilter<"AdmUsers"> | string | null
    isActive?: BoolWithAggregatesFilter<"AdmUsers"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AdmUsers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdmUsers"> | Date | string
  }

  export type ClientsWhereInput = {
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    id?: IntFilter<"Clients"> | number
    name?: StringFilter<"Clients"> | string
    email?: StringFilter<"Clients"> | string
    cpfCnpj?: StringFilter<"Clients"> | string
    type?: StringFilter<"Clients"> | string
    phoneNumber?: StringFilter<"Clients"> | string
    street?: StringFilter<"Clients"> | string
    district?: StringFilter<"Clients"> | string
    number?: StringNullableFilter<"Clients"> | string | null
    city?: StringFilter<"Clients"> | string
    zipCode?: StringFilter<"Clients"> | string
    state?: StringFilter<"Clients"> | string
    isActive?: BoolFilter<"Clients"> | boolean
    observation?: StringNullableFilter<"Clients"> | string | null
    createdAt?: DateTimeFilter<"Clients"> | Date | string
    updatedAt?: DateTimeFilter<"Clients"> | Date | string
    Users?: UsersListRelationFilter
    Contracts?: ContractsListRelationFilter
    Extensions?: ExtensionsListRelationFilter
    Queues?: QueuesListRelationFilter
    Numbers?: NumbersListRelationFilter
    Cdr?: CdrListRelationFilter
  }

  export type ClientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpfCnpj?: SortOrder
    type?: SortOrder
    phoneNumber?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrderInput | SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    isActive?: SortOrder
    observation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByRelationAggregateInput
    Contracts?: ContractsOrderByRelationAggregateInput
    Extensions?: ExtensionsOrderByRelationAggregateInput
    Queues?: QueuesOrderByRelationAggregateInput
    Numbers?: NumbersOrderByRelationAggregateInput
    Cdr?: CdrOrderByRelationAggregateInput
    _relevance?: ClientsOrderByRelevanceInput
  }

  export type ClientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    name?: StringFilter<"Clients"> | string
    email?: StringFilter<"Clients"> | string
    cpfCnpj?: StringFilter<"Clients"> | string
    type?: StringFilter<"Clients"> | string
    phoneNumber?: StringFilter<"Clients"> | string
    street?: StringFilter<"Clients"> | string
    district?: StringFilter<"Clients"> | string
    number?: StringNullableFilter<"Clients"> | string | null
    city?: StringFilter<"Clients"> | string
    zipCode?: StringFilter<"Clients"> | string
    state?: StringFilter<"Clients"> | string
    isActive?: BoolFilter<"Clients"> | boolean
    observation?: StringNullableFilter<"Clients"> | string | null
    createdAt?: DateTimeFilter<"Clients"> | Date | string
    updatedAt?: DateTimeFilter<"Clients"> | Date | string
    Users?: UsersListRelationFilter
    Contracts?: ContractsListRelationFilter
    Extensions?: ExtensionsListRelationFilter
    Queues?: QueuesListRelationFilter
    Numbers?: NumbersListRelationFilter
    Cdr?: CdrListRelationFilter
  }, "id">

  export type ClientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpfCnpj?: SortOrder
    type?: SortOrder
    phoneNumber?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrderInput | SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    isActive?: SortOrder
    observation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientsCountOrderByAggregateInput
    _avg?: ClientsAvgOrderByAggregateInput
    _max?: ClientsMaxOrderByAggregateInput
    _min?: ClientsMinOrderByAggregateInput
    _sum?: ClientsSumOrderByAggregateInput
  }

  export type ClientsScalarWhereWithAggregatesInput = {
    AND?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    OR?: ClientsScalarWhereWithAggregatesInput[]
    NOT?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clients"> | number
    name?: StringWithAggregatesFilter<"Clients"> | string
    email?: StringWithAggregatesFilter<"Clients"> | string
    cpfCnpj?: StringWithAggregatesFilter<"Clients"> | string
    type?: StringWithAggregatesFilter<"Clients"> | string
    phoneNumber?: StringWithAggregatesFilter<"Clients"> | string
    street?: StringWithAggregatesFilter<"Clients"> | string
    district?: StringWithAggregatesFilter<"Clients"> | string
    number?: StringNullableWithAggregatesFilter<"Clients"> | string | null
    city?: StringWithAggregatesFilter<"Clients"> | string
    zipCode?: StringWithAggregatesFilter<"Clients"> | string
    state?: StringWithAggregatesFilter<"Clients"> | string
    isActive?: BoolWithAggregatesFilter<"Clients"> | boolean
    observation?: StringNullableWithAggregatesFilter<"Clients"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Clients"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Clients"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    cpf?: StringFilter<"Users"> | string
    phoneNumber?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    recoveryToken?: StringNullableFilter<"Users"> | string | null
    accessType?: StringFilter<"Users"> | string
    isActive?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    clientId?: IntFilter<"Users"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrderInput | SortOrder
    recoveryToken?: SortOrderInput | SortOrder
    accessType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: ClientsOrderByWithRelationInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    cpf?: StringFilter<"Users"> | string
    phoneNumber?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    recoveryToken?: StringNullableFilter<"Users"> | string | null
    accessType?: StringFilter<"Users"> | string
    isActive?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    clientId?: IntFilter<"Users"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrderInput | SortOrder
    recoveryToken?: SortOrderInput | SortOrder
    accessType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    cpf?: StringWithAggregatesFilter<"Users"> | string
    phoneNumber?: StringWithAggregatesFilter<"Users"> | string
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    recoveryToken?: StringNullableWithAggregatesFilter<"Users"> | string | null
    accessType?: StringWithAggregatesFilter<"Users"> | string
    isActive?: BoolWithAggregatesFilter<"Users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    clientId?: IntWithAggregatesFilter<"Users"> | number
  }

  export type ContractsWhereInput = {
    AND?: ContractsWhereInput | ContractsWhereInput[]
    OR?: ContractsWhereInput[]
    NOT?: ContractsWhereInput | ContractsWhereInput[]
    id?: IntFilter<"Contracts"> | number
    startedAt?: DateTimeFilter<"Contracts"> | Date | string
    finishedAt?: DateTimeFilter<"Contracts"> | Date | string
    createdAt?: DateTimeFilter<"Contracts"> | Date | string
    updatedAt?: DateTimeFilter<"Contracts"> | Date | string
    clientId?: IntFilter<"Contracts"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    Devices?: DevicesListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }

  export type ContractsOrderByWithRelationInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: ClientsOrderByWithRelationInput
    Devices?: DevicesOrderByRelationAggregateInput
    Invoices?: InvoicesOrderByRelationAggregateInput
  }

  export type ContractsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractsWhereInput | ContractsWhereInput[]
    OR?: ContractsWhereInput[]
    NOT?: ContractsWhereInput | ContractsWhereInput[]
    startedAt?: DateTimeFilter<"Contracts"> | Date | string
    finishedAt?: DateTimeFilter<"Contracts"> | Date | string
    createdAt?: DateTimeFilter<"Contracts"> | Date | string
    updatedAt?: DateTimeFilter<"Contracts"> | Date | string
    clientId?: IntFilter<"Contracts"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    Devices?: DevicesListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }, "id">

  export type ContractsOrderByWithAggregationInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: ContractsCountOrderByAggregateInput
    _avg?: ContractsAvgOrderByAggregateInput
    _max?: ContractsMaxOrderByAggregateInput
    _min?: ContractsMinOrderByAggregateInput
    _sum?: ContractsSumOrderByAggregateInput
  }

  export type ContractsScalarWhereWithAggregatesInput = {
    AND?: ContractsScalarWhereWithAggregatesInput | ContractsScalarWhereWithAggregatesInput[]
    OR?: ContractsScalarWhereWithAggregatesInput[]
    NOT?: ContractsScalarWhereWithAggregatesInput | ContractsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contracts"> | number
    startedAt?: DateTimeWithAggregatesFilter<"Contracts"> | Date | string
    finishedAt?: DateTimeWithAggregatesFilter<"Contracts"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Contracts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contracts"> | Date | string
    clientId?: IntWithAggregatesFilter<"Contracts"> | number
  }

  export type ExtensionsWhereInput = {
    AND?: ExtensionsWhereInput | ExtensionsWhereInput[]
    OR?: ExtensionsWhereInput[]
    NOT?: ExtensionsWhereInput | ExtensionsWhereInput[]
    id?: IntFilter<"Extensions"> | number
    ramal?: StringFilter<"Extensions"> | string
    description?: StringNullableFilter<"Extensions"> | string | null
    password?: StringNullableFilter<"Extensions"> | string | null
    isActive?: BoolFilter<"Extensions"> | boolean
    createdAt?: DateTimeFilter<"Extensions"> | Date | string
    updatedAt?: DateTimeFilter<"Extensions"> | Date | string
    clientId?: IntFilter<"Extensions"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type ExtensionsOrderByWithRelationInput = {
    id?: SortOrder
    ramal?: SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: ClientsOrderByWithRelationInput
    _relevance?: ExtensionsOrderByRelevanceInput
  }

  export type ExtensionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ramal?: string
    AND?: ExtensionsWhereInput | ExtensionsWhereInput[]
    OR?: ExtensionsWhereInput[]
    NOT?: ExtensionsWhereInput | ExtensionsWhereInput[]
    description?: StringNullableFilter<"Extensions"> | string | null
    password?: StringNullableFilter<"Extensions"> | string | null
    isActive?: BoolFilter<"Extensions"> | boolean
    createdAt?: DateTimeFilter<"Extensions"> | Date | string
    updatedAt?: DateTimeFilter<"Extensions"> | Date | string
    clientId?: IntFilter<"Extensions"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id" | "ramal">

  export type ExtensionsOrderByWithAggregationInput = {
    id?: SortOrder
    ramal?: SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: ExtensionsCountOrderByAggregateInput
    _avg?: ExtensionsAvgOrderByAggregateInput
    _max?: ExtensionsMaxOrderByAggregateInput
    _min?: ExtensionsMinOrderByAggregateInput
    _sum?: ExtensionsSumOrderByAggregateInput
  }

  export type ExtensionsScalarWhereWithAggregatesInput = {
    AND?: ExtensionsScalarWhereWithAggregatesInput | ExtensionsScalarWhereWithAggregatesInput[]
    OR?: ExtensionsScalarWhereWithAggregatesInput[]
    NOT?: ExtensionsScalarWhereWithAggregatesInput | ExtensionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Extensions"> | number
    ramal?: StringWithAggregatesFilter<"Extensions"> | string
    description?: StringNullableWithAggregatesFilter<"Extensions"> | string | null
    password?: StringNullableWithAggregatesFilter<"Extensions"> | string | null
    isActive?: BoolWithAggregatesFilter<"Extensions"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Extensions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Extensions"> | Date | string
    clientId?: IntWithAggregatesFilter<"Extensions"> | number
  }

  export type QueuesWhereInput = {
    AND?: QueuesWhereInput | QueuesWhereInput[]
    OR?: QueuesWhereInput[]
    NOT?: QueuesWhereInput | QueuesWhereInput[]
    id?: IntFilter<"Queues"> | number
    code?: StringFilter<"Queues"> | string
    description?: StringNullableFilter<"Queues"> | string | null
    isActive?: BoolFilter<"Queues"> | boolean
    createdAt?: DateTimeFilter<"Queues"> | Date | string
    updatedAt?: DateTimeFilter<"Queues"> | Date | string
    clientId?: IntFilter<"Queues"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type QueuesOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: ClientsOrderByWithRelationInput
    _relevance?: QueuesOrderByRelevanceInput
  }

  export type QueuesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: QueuesWhereInput | QueuesWhereInput[]
    OR?: QueuesWhereInput[]
    NOT?: QueuesWhereInput | QueuesWhereInput[]
    description?: StringNullableFilter<"Queues"> | string | null
    isActive?: BoolFilter<"Queues"> | boolean
    createdAt?: DateTimeFilter<"Queues"> | Date | string
    updatedAt?: DateTimeFilter<"Queues"> | Date | string
    clientId?: IntFilter<"Queues"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id" | "code">

  export type QueuesOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: QueuesCountOrderByAggregateInput
    _avg?: QueuesAvgOrderByAggregateInput
    _max?: QueuesMaxOrderByAggregateInput
    _min?: QueuesMinOrderByAggregateInput
    _sum?: QueuesSumOrderByAggregateInput
  }

  export type QueuesScalarWhereWithAggregatesInput = {
    AND?: QueuesScalarWhereWithAggregatesInput | QueuesScalarWhereWithAggregatesInput[]
    OR?: QueuesScalarWhereWithAggregatesInput[]
    NOT?: QueuesScalarWhereWithAggregatesInput | QueuesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Queues"> | number
    code?: StringWithAggregatesFilter<"Queues"> | string
    description?: StringNullableWithAggregatesFilter<"Queues"> | string | null
    isActive?: BoolWithAggregatesFilter<"Queues"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Queues"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Queues"> | Date | string
    clientId?: IntWithAggregatesFilter<"Queues"> | number
  }

  export type NumbersWhereInput = {
    AND?: NumbersWhereInput | NumbersWhereInput[]
    OR?: NumbersWhereInput[]
    NOT?: NumbersWhereInput | NumbersWhereInput[]
    id?: IntFilter<"Numbers"> | number
    number?: StringFilter<"Numbers"> | string
    description?: StringNullableFilter<"Numbers"> | string | null
    isActive?: BoolFilter<"Numbers"> | boolean
    createdAt?: DateTimeFilter<"Numbers"> | Date | string
    updatedAt?: DateTimeFilter<"Numbers"> | Date | string
    clientId?: IntFilter<"Numbers"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type NumbersOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: ClientsOrderByWithRelationInput
    _relevance?: NumbersOrderByRelevanceInput
  }

  export type NumbersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: string
    AND?: NumbersWhereInput | NumbersWhereInput[]
    OR?: NumbersWhereInput[]
    NOT?: NumbersWhereInput | NumbersWhereInput[]
    description?: StringNullableFilter<"Numbers"> | string | null
    isActive?: BoolFilter<"Numbers"> | boolean
    createdAt?: DateTimeFilter<"Numbers"> | Date | string
    updatedAt?: DateTimeFilter<"Numbers"> | Date | string
    clientId?: IntFilter<"Numbers"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id" | "number">

  export type NumbersOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: NumbersCountOrderByAggregateInput
    _avg?: NumbersAvgOrderByAggregateInput
    _max?: NumbersMaxOrderByAggregateInput
    _min?: NumbersMinOrderByAggregateInput
    _sum?: NumbersSumOrderByAggregateInput
  }

  export type NumbersScalarWhereWithAggregatesInput = {
    AND?: NumbersScalarWhereWithAggregatesInput | NumbersScalarWhereWithAggregatesInput[]
    OR?: NumbersScalarWhereWithAggregatesInput[]
    NOT?: NumbersScalarWhereWithAggregatesInput | NumbersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Numbers"> | number
    number?: StringWithAggregatesFilter<"Numbers"> | string
    description?: StringNullableWithAggregatesFilter<"Numbers"> | string | null
    isActive?: BoolWithAggregatesFilter<"Numbers"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Numbers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Numbers"> | Date | string
    clientId?: IntWithAggregatesFilter<"Numbers"> | number
  }

  export type CdrWhereInput = {
    AND?: CdrWhereInput | CdrWhereInput[]
    OR?: CdrWhereInput[]
    NOT?: CdrWhereInput | CdrWhereInput[]
    id?: IntFilter<"Cdr"> | number
    linkedid?: IntFilter<"Cdr"> | number
    callDate?: DateTimeNullableFilter<"Cdr"> | Date | string | null
    source?: StringNullableFilter<"Cdr"> | string | null
    destination?: StringNullableFilter<"Cdr"> | string | null
    channel?: StringNullableFilter<"Cdr"> | string | null
    queue?: StringNullableFilter<"Cdr"> | string | null
    queueName?: StringNullableFilter<"Cdr"> | string | null
    agent?: StringNullableFilter<"Cdr"> | string | null
    direction?: StringNullableFilter<"Cdr"> | string | null
    status?: StringNullableFilter<"Cdr"> | string | null
    recordingFile?: StringNullableFilter<"Cdr"> | string | null
    duration?: IntNullableFilter<"Cdr"> | number | null
    waitingTime?: IntNullableFilter<"Cdr"> | number | null
    serviceTime?: IntNullableFilter<"Cdr"> | number | null
    createdAt?: DateTimeFilter<"Cdr"> | Date | string
    updatedAt?: DateTimeFilter<"Cdr"> | Date | string
    clientId?: IntFilter<"Cdr"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type CdrOrderByWithRelationInput = {
    id?: SortOrder
    linkedid?: SortOrder
    callDate?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    destination?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    queue?: SortOrderInput | SortOrder
    queueName?: SortOrderInput | SortOrder
    agent?: SortOrderInput | SortOrder
    direction?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    recordingFile?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    waitingTime?: SortOrderInput | SortOrder
    serviceTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: ClientsOrderByWithRelationInput
    _relevance?: CdrOrderByRelevanceInput
  }

  export type CdrWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    linkedid?: number
    AND?: CdrWhereInput | CdrWhereInput[]
    OR?: CdrWhereInput[]
    NOT?: CdrWhereInput | CdrWhereInput[]
    callDate?: DateTimeNullableFilter<"Cdr"> | Date | string | null
    source?: StringNullableFilter<"Cdr"> | string | null
    destination?: StringNullableFilter<"Cdr"> | string | null
    channel?: StringNullableFilter<"Cdr"> | string | null
    queue?: StringNullableFilter<"Cdr"> | string | null
    queueName?: StringNullableFilter<"Cdr"> | string | null
    agent?: StringNullableFilter<"Cdr"> | string | null
    direction?: StringNullableFilter<"Cdr"> | string | null
    status?: StringNullableFilter<"Cdr"> | string | null
    recordingFile?: StringNullableFilter<"Cdr"> | string | null
    duration?: IntNullableFilter<"Cdr"> | number | null
    waitingTime?: IntNullableFilter<"Cdr"> | number | null
    serviceTime?: IntNullableFilter<"Cdr"> | number | null
    createdAt?: DateTimeFilter<"Cdr"> | Date | string
    updatedAt?: DateTimeFilter<"Cdr"> | Date | string
    clientId?: IntFilter<"Cdr"> | number
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id" | "linkedid">

  export type CdrOrderByWithAggregationInput = {
    id?: SortOrder
    linkedid?: SortOrder
    callDate?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    destination?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    queue?: SortOrderInput | SortOrder
    queueName?: SortOrderInput | SortOrder
    agent?: SortOrderInput | SortOrder
    direction?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    recordingFile?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    waitingTime?: SortOrderInput | SortOrder
    serviceTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: CdrCountOrderByAggregateInput
    _avg?: CdrAvgOrderByAggregateInput
    _max?: CdrMaxOrderByAggregateInput
    _min?: CdrMinOrderByAggregateInput
    _sum?: CdrSumOrderByAggregateInput
  }

  export type CdrScalarWhereWithAggregatesInput = {
    AND?: CdrScalarWhereWithAggregatesInput | CdrScalarWhereWithAggregatesInput[]
    OR?: CdrScalarWhereWithAggregatesInput[]
    NOT?: CdrScalarWhereWithAggregatesInput | CdrScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cdr"> | number
    linkedid?: IntWithAggregatesFilter<"Cdr"> | number
    callDate?: DateTimeNullableWithAggregatesFilter<"Cdr"> | Date | string | null
    source?: StringNullableWithAggregatesFilter<"Cdr"> | string | null
    destination?: StringNullableWithAggregatesFilter<"Cdr"> | string | null
    channel?: StringNullableWithAggregatesFilter<"Cdr"> | string | null
    queue?: StringNullableWithAggregatesFilter<"Cdr"> | string | null
    queueName?: StringNullableWithAggregatesFilter<"Cdr"> | string | null
    agent?: StringNullableWithAggregatesFilter<"Cdr"> | string | null
    direction?: StringNullableWithAggregatesFilter<"Cdr"> | string | null
    status?: StringNullableWithAggregatesFilter<"Cdr"> | string | null
    recordingFile?: StringNullableWithAggregatesFilter<"Cdr"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Cdr"> | number | null
    waitingTime?: IntNullableWithAggregatesFilter<"Cdr"> | number | null
    serviceTime?: IntNullableWithAggregatesFilter<"Cdr"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Cdr"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cdr"> | Date | string
    clientId?: IntWithAggregatesFilter<"Cdr"> | number
  }

  export type DevicesWhereInput = {
    AND?: DevicesWhereInput | DevicesWhereInput[]
    OR?: DevicesWhereInput[]
    NOT?: DevicesWhereInput | DevicesWhereInput[]
    id?: IntFilter<"Devices"> | number
    description?: StringFilter<"Devices"> | string
    serialNumber?: StringFilter<"Devices"> | string
    mac?: StringFilter<"Devices"> | string
    brand?: StringFilter<"Devices"> | string
    model?: StringFilter<"Devices"> | string
    isNew?: BoolFilter<"Devices"> | boolean
    status?: StringFilter<"Devices"> | string
    createdAt?: DateTimeFilter<"Devices"> | Date | string
    updatedAt?: DateTimeFilter<"Devices"> | Date | string
    contractId?: IntFilter<"Devices"> | number
    contract?: XOR<ContractsScalarRelationFilter, ContractsWhereInput>
  }

  export type DevicesOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    isNew?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
    contract?: ContractsOrderByWithRelationInput
    _relevance?: DevicesOrderByRelevanceInput
  }

  export type DevicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DevicesWhereInput | DevicesWhereInput[]
    OR?: DevicesWhereInput[]
    NOT?: DevicesWhereInput | DevicesWhereInput[]
    description?: StringFilter<"Devices"> | string
    serialNumber?: StringFilter<"Devices"> | string
    mac?: StringFilter<"Devices"> | string
    brand?: StringFilter<"Devices"> | string
    model?: StringFilter<"Devices"> | string
    isNew?: BoolFilter<"Devices"> | boolean
    status?: StringFilter<"Devices"> | string
    createdAt?: DateTimeFilter<"Devices"> | Date | string
    updatedAt?: DateTimeFilter<"Devices"> | Date | string
    contractId?: IntFilter<"Devices"> | number
    contract?: XOR<ContractsScalarRelationFilter, ContractsWhereInput>
  }, "id">

  export type DevicesOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    isNew?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
    _count?: DevicesCountOrderByAggregateInput
    _avg?: DevicesAvgOrderByAggregateInput
    _max?: DevicesMaxOrderByAggregateInput
    _min?: DevicesMinOrderByAggregateInput
    _sum?: DevicesSumOrderByAggregateInput
  }

  export type DevicesScalarWhereWithAggregatesInput = {
    AND?: DevicesScalarWhereWithAggregatesInput | DevicesScalarWhereWithAggregatesInput[]
    OR?: DevicesScalarWhereWithAggregatesInput[]
    NOT?: DevicesScalarWhereWithAggregatesInput | DevicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Devices"> | number
    description?: StringWithAggregatesFilter<"Devices"> | string
    serialNumber?: StringWithAggregatesFilter<"Devices"> | string
    mac?: StringWithAggregatesFilter<"Devices"> | string
    brand?: StringWithAggregatesFilter<"Devices"> | string
    model?: StringWithAggregatesFilter<"Devices"> | string
    isNew?: BoolWithAggregatesFilter<"Devices"> | boolean
    status?: StringWithAggregatesFilter<"Devices"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Devices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Devices"> | Date | string
    contractId?: IntWithAggregatesFilter<"Devices"> | number
  }

  export type InvoicesWhereInput = {
    AND?: InvoicesWhereInput | InvoicesWhereInput[]
    OR?: InvoicesWhereInput[]
    NOT?: InvoicesWhereInput | InvoicesWhereInput[]
    id?: IntFilter<"Invoices"> | number
    barcode?: StringFilter<"Invoices"> | string
    value?: FloatFilter<"Invoices"> | number
    status?: StringFilter<"Invoices"> | string
    dueDate?: DateTimeFilter<"Invoices"> | Date | string
    fileName?: StringFilter<"Invoices"> | string
    createdAt?: DateTimeFilter<"Invoices"> | Date | string
    updatedAt?: DateTimeFilter<"Invoices"> | Date | string
    contractId?: IntFilter<"Invoices"> | number
    contract?: XOR<ContractsScalarRelationFilter, ContractsWhereInput>
  }

  export type InvoicesOrderByWithRelationInput = {
    id?: SortOrder
    barcode?: SortOrder
    value?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
    contract?: ContractsOrderByWithRelationInput
    _relevance?: InvoicesOrderByRelevanceInput
  }

  export type InvoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvoicesWhereInput | InvoicesWhereInput[]
    OR?: InvoicesWhereInput[]
    NOT?: InvoicesWhereInput | InvoicesWhereInput[]
    barcode?: StringFilter<"Invoices"> | string
    value?: FloatFilter<"Invoices"> | number
    status?: StringFilter<"Invoices"> | string
    dueDate?: DateTimeFilter<"Invoices"> | Date | string
    fileName?: StringFilter<"Invoices"> | string
    createdAt?: DateTimeFilter<"Invoices"> | Date | string
    updatedAt?: DateTimeFilter<"Invoices"> | Date | string
    contractId?: IntFilter<"Invoices"> | number
    contract?: XOR<ContractsScalarRelationFilter, ContractsWhereInput>
  }, "id">

  export type InvoicesOrderByWithAggregationInput = {
    id?: SortOrder
    barcode?: SortOrder
    value?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
    _count?: InvoicesCountOrderByAggregateInput
    _avg?: InvoicesAvgOrderByAggregateInput
    _max?: InvoicesMaxOrderByAggregateInput
    _min?: InvoicesMinOrderByAggregateInput
    _sum?: InvoicesSumOrderByAggregateInput
  }

  export type InvoicesScalarWhereWithAggregatesInput = {
    AND?: InvoicesScalarWhereWithAggregatesInput | InvoicesScalarWhereWithAggregatesInput[]
    OR?: InvoicesScalarWhereWithAggregatesInput[]
    NOT?: InvoicesScalarWhereWithAggregatesInput | InvoicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoices"> | number
    barcode?: StringWithAggregatesFilter<"Invoices"> | string
    value?: FloatWithAggregatesFilter<"Invoices"> | number
    status?: StringWithAggregatesFilter<"Invoices"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
    fileName?: StringWithAggregatesFilter<"Invoices"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
    contractId?: IntWithAggregatesFilter<"Invoices"> | number
  }

  export type CallsHistoryWhereInput = {
    AND?: CallsHistoryWhereInput | CallsHistoryWhereInput[]
    OR?: CallsHistoryWhereInput[]
    NOT?: CallsHistoryWhereInput | CallsHistoryWhereInput[]
    id?: IntFilter<"CallsHistory"> | number
    status?: StringFilter<"CallsHistory"> | string
    queue?: StringFilter<"CallsHistory"> | string
    extension?: StringFilter<"CallsHistory"> | string
    uniqueId?: StringFilter<"CallsHistory"> | string
    linkId?: StringFilter<"CallsHistory"> | string
    phoneNumber?: StringNullableFilter<"CallsHistory"> | string | null
    showOnPanel?: BoolFilter<"CallsHistory"> | boolean
    updatedAt?: DateTimeFilter<"CallsHistory"> | Date | string
    createdAt?: DateTimeFilter<"CallsHistory"> | Date | string
  }

  export type CallsHistoryOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    queue?: SortOrder
    extension?: SortOrder
    uniqueId?: SortOrder
    linkId?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    showOnPanel?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _relevance?: CallsHistoryOrderByRelevanceInput
  }

  export type CallsHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    linkId?: string
    AND?: CallsHistoryWhereInput | CallsHistoryWhereInput[]
    OR?: CallsHistoryWhereInput[]
    NOT?: CallsHistoryWhereInput | CallsHistoryWhereInput[]
    status?: StringFilter<"CallsHistory"> | string
    queue?: StringFilter<"CallsHistory"> | string
    extension?: StringFilter<"CallsHistory"> | string
    uniqueId?: StringFilter<"CallsHistory"> | string
    phoneNumber?: StringNullableFilter<"CallsHistory"> | string | null
    showOnPanel?: BoolFilter<"CallsHistory"> | boolean
    updatedAt?: DateTimeFilter<"CallsHistory"> | Date | string
    createdAt?: DateTimeFilter<"CallsHistory"> | Date | string
  }, "id" | "linkId">

  export type CallsHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    queue?: SortOrder
    extension?: SortOrder
    uniqueId?: SortOrder
    linkId?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    showOnPanel?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: CallsHistoryCountOrderByAggregateInput
    _avg?: CallsHistoryAvgOrderByAggregateInput
    _max?: CallsHistoryMaxOrderByAggregateInput
    _min?: CallsHistoryMinOrderByAggregateInput
    _sum?: CallsHistorySumOrderByAggregateInput
  }

  export type CallsHistoryScalarWhereWithAggregatesInput = {
    AND?: CallsHistoryScalarWhereWithAggregatesInput | CallsHistoryScalarWhereWithAggregatesInput[]
    OR?: CallsHistoryScalarWhereWithAggregatesInput[]
    NOT?: CallsHistoryScalarWhereWithAggregatesInput | CallsHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CallsHistory"> | number
    status?: StringWithAggregatesFilter<"CallsHistory"> | string
    queue?: StringWithAggregatesFilter<"CallsHistory"> | string
    extension?: StringWithAggregatesFilter<"CallsHistory"> | string
    uniqueId?: StringWithAggregatesFilter<"CallsHistory"> | string
    linkId?: StringWithAggregatesFilter<"CallsHistory"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"CallsHistory"> | string | null
    showOnPanel?: BoolWithAggregatesFilter<"CallsHistory"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"CallsHistory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CallsHistory"> | Date | string
  }

  export type cdr_lucasWhereInput = {
    AND?: cdr_lucasWhereInput | cdr_lucasWhereInput[]
    OR?: cdr_lucasWhereInput[]
    NOT?: cdr_lucasWhereInput | cdr_lucasWhereInput[]
    linkedid?: StringFilter<"cdr_lucas"> | string
    calldate?: DateTimeNullableFilter<"cdr_lucas"> | Date | string | null
    source?: StringNullableFilter<"cdr_lucas"> | string | null
    destination?: StringNullableFilter<"cdr_lucas"> | string | null
    did?: StringNullableFilter<"cdr_lucas"> | string | null
    channel?: StringNullableFilter<"cdr_lucas"> | string | null
    dcontext?: StringNullableFilter<"cdr_lucas"> | string | null
    queue?: StringNullableFilter<"cdr_lucas"> | string | null
    direction?: StringNullableFilter<"cdr_lucas"> | string | null
    agente?: StringNullableFilter<"cdr_lucas"> | string | null
    agenteName?: StringNullableFilter<"cdr_lucas"> | string | null
    status?: StringNullableFilter<"cdr_lucas"> | string | null
    recordingFile?: StringNullableFilter<"cdr_lucas"> | string | null
    duration?: IntNullableFilter<"cdr_lucas"> | number | null
    waitingTime?: IntNullableFilter<"cdr_lucas"> | number | null
    sync?: IntNullableFilter<"cdr_lucas"> | number | null
  }

  export type cdr_lucasOrderByWithRelationInput = {
    linkedid?: SortOrder
    calldate?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    destination?: SortOrderInput | SortOrder
    did?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    dcontext?: SortOrderInput | SortOrder
    queue?: SortOrderInput | SortOrder
    direction?: SortOrderInput | SortOrder
    agente?: SortOrderInput | SortOrder
    agenteName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    recordingFile?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    waitingTime?: SortOrderInput | SortOrder
    sync?: SortOrderInput | SortOrder
    _relevance?: cdr_lucasOrderByRelevanceInput
  }

  export type cdr_lucasWhereUniqueInput = Prisma.AtLeast<{
    linkedid?: string
    AND?: cdr_lucasWhereInput | cdr_lucasWhereInput[]
    OR?: cdr_lucasWhereInput[]
    NOT?: cdr_lucasWhereInput | cdr_lucasWhereInput[]
    calldate?: DateTimeNullableFilter<"cdr_lucas"> | Date | string | null
    source?: StringNullableFilter<"cdr_lucas"> | string | null
    destination?: StringNullableFilter<"cdr_lucas"> | string | null
    did?: StringNullableFilter<"cdr_lucas"> | string | null
    channel?: StringNullableFilter<"cdr_lucas"> | string | null
    dcontext?: StringNullableFilter<"cdr_lucas"> | string | null
    queue?: StringNullableFilter<"cdr_lucas"> | string | null
    direction?: StringNullableFilter<"cdr_lucas"> | string | null
    agente?: StringNullableFilter<"cdr_lucas"> | string | null
    agenteName?: StringNullableFilter<"cdr_lucas"> | string | null
    status?: StringNullableFilter<"cdr_lucas"> | string | null
    recordingFile?: StringNullableFilter<"cdr_lucas"> | string | null
    duration?: IntNullableFilter<"cdr_lucas"> | number | null
    waitingTime?: IntNullableFilter<"cdr_lucas"> | number | null
    sync?: IntNullableFilter<"cdr_lucas"> | number | null
  }, "linkedid">

  export type cdr_lucasOrderByWithAggregationInput = {
    linkedid?: SortOrder
    calldate?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    destination?: SortOrderInput | SortOrder
    did?: SortOrderInput | SortOrder
    channel?: SortOrderInput | SortOrder
    dcontext?: SortOrderInput | SortOrder
    queue?: SortOrderInput | SortOrder
    direction?: SortOrderInput | SortOrder
    agente?: SortOrderInput | SortOrder
    agenteName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    recordingFile?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    waitingTime?: SortOrderInput | SortOrder
    sync?: SortOrderInput | SortOrder
    _count?: cdr_lucasCountOrderByAggregateInput
    _avg?: cdr_lucasAvgOrderByAggregateInput
    _max?: cdr_lucasMaxOrderByAggregateInput
    _min?: cdr_lucasMinOrderByAggregateInput
    _sum?: cdr_lucasSumOrderByAggregateInput
  }

  export type cdr_lucasScalarWhereWithAggregatesInput = {
    AND?: cdr_lucasScalarWhereWithAggregatesInput | cdr_lucasScalarWhereWithAggregatesInput[]
    OR?: cdr_lucasScalarWhereWithAggregatesInput[]
    NOT?: cdr_lucasScalarWhereWithAggregatesInput | cdr_lucasScalarWhereWithAggregatesInput[]
    linkedid?: StringWithAggregatesFilter<"cdr_lucas"> | string
    calldate?: DateTimeNullableWithAggregatesFilter<"cdr_lucas"> | Date | string | null
    source?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    destination?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    did?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    channel?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    dcontext?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    queue?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    direction?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    agente?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    agenteName?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    status?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    recordingFile?: StringNullableWithAggregatesFilter<"cdr_lucas"> | string | null
    duration?: IntNullableWithAggregatesFilter<"cdr_lucas"> | number | null
    waitingTime?: IntNullableWithAggregatesFilter<"cdr_lucas"> | number | null
    sync?: IntNullableWithAggregatesFilter<"cdr_lucas"> | number | null
  }

  export type AdmUsersCreateInput = {
    name: string
    email: string
    password?: string | null
    recoveryToken?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmUsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    recoveryToken?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmUsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmUsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmUsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password?: string | null
    recoveryToken?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmUsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmUsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsCreateInput = {
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutClientInput
    Contracts?: ContractsCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsCreateNestedManyWithoutClientInput
    Queues?: QueuesCreateNestedManyWithoutClientInput
    Numbers?: NumbersCreateNestedManyWithoutClientInput
    Cdr?: CdrCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutClientInput
    Contracts?: ContractsUncheckedCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsUncheckedCreateNestedManyWithoutClientInput
    Queues?: QueuesUncheckedCreateNestedManyWithoutClientInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutClientInput
    Cdr?: CdrUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUpdateManyWithoutClientNestedInput
    Queues?: QueuesUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUpdateManyWithoutClientNestedInput
    Cdr?: CdrUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUncheckedUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUncheckedUpdateManyWithoutClientNestedInput
    Queues?: QueuesUncheckedUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutClientNestedInput
    Cdr?: CdrUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsCreateManyInput = {
    id?: number
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    cpf: string
    phoneNumber: string
    password?: string | null
    recoveryToken?: string | null
    accessType: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientsCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    cpf: string
    phoneNumber: string
    password?: string | null
    recoveryToken?: string | null
    accessType: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    cpf: string
    phoneNumber: string
    password?: string | null
    recoveryToken?: string | null
    accessType: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type ContractsCreateInput = {
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientsCreateNestedOneWithoutContractsInput
    Devices?: DevicesCreateNestedManyWithoutContractInput
    Invoices?: InvoicesCreateNestedManyWithoutContractInput
  }

  export type ContractsUncheckedCreateInput = {
    id?: number
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
    Devices?: DevicesUncheckedCreateNestedManyWithoutContractInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractsUpdateInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutContractsNestedInput
    Devices?: DevicesUpdateManyWithoutContractNestedInput
    Invoices?: InvoicesUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    Devices?: DevicesUncheckedUpdateManyWithoutContractNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractsCreateManyInput = {
    id?: number
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type ContractsUpdateManyMutationInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type ExtensionsCreateInput = {
    ramal: string
    description?: string | null
    password?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientsCreateNestedOneWithoutExtensionsInput
  }

  export type ExtensionsUncheckedCreateInput = {
    id?: number
    ramal: string
    description?: string | null
    password?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type ExtensionsUpdateInput = {
    ramal?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutExtensionsNestedInput
  }

  export type ExtensionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ramal?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type ExtensionsCreateManyInput = {
    id?: number
    ramal: string
    description?: string | null
    password?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type ExtensionsUpdateManyMutationInput = {
    ramal?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtensionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ramal?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type QueuesCreateInput = {
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientsCreateNestedOneWithoutQueuesInput
  }

  export type QueuesUncheckedCreateInput = {
    id?: number
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type QueuesUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutQueuesNestedInput
  }

  export type QueuesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type QueuesCreateManyInput = {
    id?: number
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type QueuesUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueuesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type NumbersCreateInput = {
    number: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientsCreateNestedOneWithoutNumbersInput
  }

  export type NumbersUncheckedCreateInput = {
    id?: number
    number: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type NumbersUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutNumbersNestedInput
  }

  export type NumbersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type NumbersCreateManyInput = {
    id?: number
    number: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type NumbersUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NumbersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type CdrCreateInput = {
    linkedid: number
    callDate?: Date | string | null
    source?: string | null
    destination?: string | null
    channel?: string | null
    queue?: string | null
    queueName?: string | null
    agent?: string | null
    direction?: string | null
    status?: string | null
    recordingFile?: string | null
    duration?: number | null
    waitingTime?: number | null
    serviceTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientsCreateNestedOneWithoutCdrInput
  }

  export type CdrUncheckedCreateInput = {
    id?: number
    linkedid: number
    callDate?: Date | string | null
    source?: string | null
    destination?: string | null
    channel?: string | null
    queue?: string | null
    queueName?: string | null
    agent?: string | null
    direction?: string | null
    status?: string | null
    recordingFile?: string | null
    duration?: number | null
    waitingTime?: number | null
    serviceTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type CdrUpdateInput = {
    linkedid?: IntFieldUpdateOperationsInput | number
    callDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    serviceTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutCdrNestedInput
  }

  export type CdrUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkedid?: IntFieldUpdateOperationsInput | number
    callDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    serviceTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type CdrCreateManyInput = {
    id?: number
    linkedid: number
    callDate?: Date | string | null
    source?: string | null
    destination?: string | null
    channel?: string | null
    queue?: string | null
    queueName?: string | null
    agent?: string | null
    direction?: string | null
    status?: string | null
    recordingFile?: string | null
    duration?: number | null
    waitingTime?: number | null
    serviceTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type CdrUpdateManyMutationInput = {
    linkedid?: IntFieldUpdateOperationsInput | number
    callDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    serviceTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CdrUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkedid?: IntFieldUpdateOperationsInput | number
    callDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    serviceTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DevicesCreateInput = {
    description: string
    serialNumber: string
    mac: string
    brand: string
    model: string
    isNew: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractsCreateNestedOneWithoutDevicesInput
  }

  export type DevicesUncheckedCreateInput = {
    id?: number
    description: string
    serialNumber: string
    mac: string
    brand: string
    model: string
    isNew: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contractId: number
  }

  export type DevicesUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractsUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DevicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: IntFieldUpdateOperationsInput | number
  }

  export type DevicesCreateManyInput = {
    id?: number
    description: string
    serialNumber: string
    mac: string
    brand: string
    model: string
    isNew: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contractId: number
  }

  export type DevicesUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: IntFieldUpdateOperationsInput | number
  }

  export type InvoicesCreateInput = {
    barcode: string
    value: number
    status: string
    dueDate: Date | string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractsCreateNestedOneWithoutInvoicesInput
  }

  export type InvoicesUncheckedCreateInput = {
    id?: number
    barcode: string
    value: number
    status: string
    dueDate: Date | string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contractId: number
  }

  export type InvoicesUpdateInput = {
    barcode?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractsUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: IntFieldUpdateOperationsInput | number
  }

  export type InvoicesCreateManyInput = {
    id?: number
    barcode: string
    value: number
    status: string
    dueDate: Date | string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contractId: number
  }

  export type InvoicesUpdateManyMutationInput = {
    barcode?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: IntFieldUpdateOperationsInput | number
  }

  export type CallsHistoryCreateInput = {
    status: string
    queue: string
    extension: string
    uniqueId: string
    linkId: string
    phoneNumber?: string | null
    showOnPanel?: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CallsHistoryUncheckedCreateInput = {
    id?: number
    status: string
    queue: string
    extension: string
    uniqueId: string
    linkId: string
    phoneNumber?: string | null
    showOnPanel?: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CallsHistoryUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    linkId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    showOnPanel?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallsHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    linkId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    showOnPanel?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallsHistoryCreateManyInput = {
    id?: number
    status: string
    queue: string
    extension: string
    uniqueId: string
    linkId: string
    phoneNumber?: string | null
    showOnPanel?: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CallsHistoryUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    linkId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    showOnPanel?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallsHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    linkId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    showOnPanel?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cdr_lucasCreateInput = {
    linkedid: string
    calldate?: Date | string | null
    source?: string | null
    destination?: string | null
    did?: string | null
    channel?: string | null
    dcontext?: string | null
    queue?: string | null
    direction?: string | null
    agente?: string | null
    agenteName?: string | null
    status?: string | null
    recordingFile?: string | null
    duration?: number | null
    waitingTime?: number | null
    sync?: number | null
  }

  export type cdr_lucasUncheckedCreateInput = {
    linkedid: string
    calldate?: Date | string | null
    source?: string | null
    destination?: string | null
    did?: string | null
    channel?: string | null
    dcontext?: string | null
    queue?: string | null
    direction?: string | null
    agente?: string | null
    agenteName?: string | null
    status?: string | null
    recordingFile?: string | null
    duration?: number | null
    waitingTime?: number | null
    sync?: number | null
  }

  export type cdr_lucasUpdateInput = {
    linkedid?: StringFieldUpdateOperationsInput | string
    calldate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    did?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    dcontext?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    agente?: NullableStringFieldUpdateOperationsInput | string | null
    agenteName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cdr_lucasUncheckedUpdateInput = {
    linkedid?: StringFieldUpdateOperationsInput | string
    calldate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    did?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    dcontext?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    agente?: NullableStringFieldUpdateOperationsInput | string | null
    agenteName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cdr_lucasCreateManyInput = {
    linkedid: string
    calldate?: Date | string | null
    source?: string | null
    destination?: string | null
    did?: string | null
    channel?: string | null
    dcontext?: string | null
    queue?: string | null
    direction?: string | null
    agente?: string | null
    agenteName?: string | null
    status?: string | null
    recordingFile?: string | null
    duration?: number | null
    waitingTime?: number | null
    sync?: number | null
  }

  export type cdr_lucasUpdateManyMutationInput = {
    linkedid?: StringFieldUpdateOperationsInput | string
    calldate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    did?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    dcontext?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    agente?: NullableStringFieldUpdateOperationsInput | string | null
    agenteName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cdr_lucasUncheckedUpdateManyInput = {
    linkedid?: StringFieldUpdateOperationsInput | string
    calldate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    did?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    dcontext?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    agente?: NullableStringFieldUpdateOperationsInput | string | null
    agenteName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdmUsersOrderByRelevanceInput = {
    fields: AdmUsersOrderByRelevanceFieldEnum | AdmUsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdmUsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    recoveryToken?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmUsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdmUsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    recoveryToken?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmUsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    recoveryToken?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmUsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type ContractsListRelationFilter = {
    every?: ContractsWhereInput
    some?: ContractsWhereInput
    none?: ContractsWhereInput
  }

  export type ExtensionsListRelationFilter = {
    every?: ExtensionsWhereInput
    some?: ExtensionsWhereInput
    none?: ExtensionsWhereInput
  }

  export type QueuesListRelationFilter = {
    every?: QueuesWhereInput
    some?: QueuesWhereInput
    none?: QueuesWhereInput
  }

  export type NumbersListRelationFilter = {
    every?: NumbersWhereInput
    some?: NumbersWhereInput
    none?: NumbersWhereInput
  }

  export type CdrListRelationFilter = {
    every?: CdrWhereInput
    some?: CdrWhereInput
    none?: CdrWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExtensionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QueuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NumbersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CdrOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientsOrderByRelevanceInput = {
    fields: ClientsOrderByRelevanceFieldEnum | ClientsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpfCnpj?: SortOrder
    type?: SortOrder
    phoneNumber?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    isActive?: SortOrder
    observation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpfCnpj?: SortOrder
    type?: SortOrder
    phoneNumber?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    isActive?: SortOrder
    observation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpfCnpj?: SortOrder
    type?: SortOrder
    phoneNumber?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    isActive?: SortOrder
    observation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientsScalarRelationFilter = {
    is?: ClientsWhereInput
    isNot?: ClientsWhereInput
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    recoveryToken?: SortOrder
    accessType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    recoveryToken?: SortOrder
    accessType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    recoveryToken?: SortOrder
    accessType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type DevicesListRelationFilter = {
    every?: DevicesWhereInput
    some?: DevicesWhereInput
    none?: DevicesWhereInput
  }

  export type InvoicesListRelationFilter = {
    every?: InvoicesWhereInput
    some?: InvoicesWhereInput
    none?: InvoicesWhereInput
  }

  export type DevicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractsCountOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type ContractsAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type ContractsMaxOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type ContractsMinOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type ContractsSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type ExtensionsOrderByRelevanceInput = {
    fields: ExtensionsOrderByRelevanceFieldEnum | ExtensionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExtensionsCountOrderByAggregateInput = {
    id?: SortOrder
    ramal?: SortOrder
    description?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type ExtensionsAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type ExtensionsMaxOrderByAggregateInput = {
    id?: SortOrder
    ramal?: SortOrder
    description?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type ExtensionsMinOrderByAggregateInput = {
    id?: SortOrder
    ramal?: SortOrder
    description?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type ExtensionsSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type QueuesOrderByRelevanceInput = {
    fields: QueuesOrderByRelevanceFieldEnum | QueuesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QueuesCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type QueuesAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type QueuesMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type QueuesMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type QueuesSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type NumbersOrderByRelevanceInput = {
    fields: NumbersOrderByRelevanceFieldEnum | NumbersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NumbersCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type NumbersAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type NumbersMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type NumbersMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type NumbersSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CdrOrderByRelevanceInput = {
    fields: CdrOrderByRelevanceFieldEnum | CdrOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CdrCountOrderByAggregateInput = {
    id?: SortOrder
    linkedid?: SortOrder
    callDate?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    channel?: SortOrder
    queue?: SortOrder
    queueName?: SortOrder
    agent?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    recordingFile?: SortOrder
    duration?: SortOrder
    waitingTime?: SortOrder
    serviceTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type CdrAvgOrderByAggregateInput = {
    id?: SortOrder
    linkedid?: SortOrder
    duration?: SortOrder
    waitingTime?: SortOrder
    serviceTime?: SortOrder
    clientId?: SortOrder
  }

  export type CdrMaxOrderByAggregateInput = {
    id?: SortOrder
    linkedid?: SortOrder
    callDate?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    channel?: SortOrder
    queue?: SortOrder
    queueName?: SortOrder
    agent?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    recordingFile?: SortOrder
    duration?: SortOrder
    waitingTime?: SortOrder
    serviceTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type CdrMinOrderByAggregateInput = {
    id?: SortOrder
    linkedid?: SortOrder
    callDate?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    channel?: SortOrder
    queue?: SortOrder
    queueName?: SortOrder
    agent?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    recordingFile?: SortOrder
    duration?: SortOrder
    waitingTime?: SortOrder
    serviceTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type CdrSumOrderByAggregateInput = {
    id?: SortOrder
    linkedid?: SortOrder
    duration?: SortOrder
    waitingTime?: SortOrder
    serviceTime?: SortOrder
    clientId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ContractsScalarRelationFilter = {
    is?: ContractsWhereInput
    isNot?: ContractsWhereInput
  }

  export type DevicesOrderByRelevanceInput = {
    fields: DevicesOrderByRelevanceFieldEnum | DevicesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DevicesCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    isNew?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type DevicesAvgOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type DevicesMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    isNew?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type DevicesMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    mac?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    isNew?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type DevicesSumOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InvoicesOrderByRelevanceInput = {
    fields: InvoicesOrderByRelevanceFieldEnum | InvoicesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InvoicesCountOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    value?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type InvoicesAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    contractId?: SortOrder
  }

  export type InvoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    value?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type InvoicesMinOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    value?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type InvoicesSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    contractId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CallsHistoryOrderByRelevanceInput = {
    fields: CallsHistoryOrderByRelevanceFieldEnum | CallsHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CallsHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    queue?: SortOrder
    extension?: SortOrder
    uniqueId?: SortOrder
    linkId?: SortOrder
    phoneNumber?: SortOrder
    showOnPanel?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CallsHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CallsHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    queue?: SortOrder
    extension?: SortOrder
    uniqueId?: SortOrder
    linkId?: SortOrder
    phoneNumber?: SortOrder
    showOnPanel?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CallsHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    queue?: SortOrder
    extension?: SortOrder
    uniqueId?: SortOrder
    linkId?: SortOrder
    phoneNumber?: SortOrder
    showOnPanel?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CallsHistorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cdr_lucasOrderByRelevanceInput = {
    fields: cdr_lucasOrderByRelevanceFieldEnum | cdr_lucasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cdr_lucasCountOrderByAggregateInput = {
    linkedid?: SortOrder
    calldate?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    did?: SortOrder
    channel?: SortOrder
    dcontext?: SortOrder
    queue?: SortOrder
    direction?: SortOrder
    agente?: SortOrder
    agenteName?: SortOrder
    status?: SortOrder
    recordingFile?: SortOrder
    duration?: SortOrder
    waitingTime?: SortOrder
    sync?: SortOrder
  }

  export type cdr_lucasAvgOrderByAggregateInput = {
    duration?: SortOrder
    waitingTime?: SortOrder
    sync?: SortOrder
  }

  export type cdr_lucasMaxOrderByAggregateInput = {
    linkedid?: SortOrder
    calldate?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    did?: SortOrder
    channel?: SortOrder
    dcontext?: SortOrder
    queue?: SortOrder
    direction?: SortOrder
    agente?: SortOrder
    agenteName?: SortOrder
    status?: SortOrder
    recordingFile?: SortOrder
    duration?: SortOrder
    waitingTime?: SortOrder
    sync?: SortOrder
  }

  export type cdr_lucasMinOrderByAggregateInput = {
    linkedid?: SortOrder
    calldate?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    did?: SortOrder
    channel?: SortOrder
    dcontext?: SortOrder
    queue?: SortOrder
    direction?: SortOrder
    agente?: SortOrder
    agenteName?: SortOrder
    status?: SortOrder
    recordingFile?: SortOrder
    duration?: SortOrder
    waitingTime?: SortOrder
    sync?: SortOrder
  }

  export type cdr_lucasSumOrderByAggregateInput = {
    duration?: SortOrder
    waitingTime?: SortOrder
    sync?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedManyWithoutClientInput = {
    create?: XOR<UsersCreateWithoutClientInput, UsersUncheckedCreateWithoutClientInput> | UsersCreateWithoutClientInput[] | UsersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutClientInput | UsersCreateOrConnectWithoutClientInput[]
    createMany?: UsersCreateManyClientInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type ContractsCreateNestedManyWithoutClientInput = {
    create?: XOR<ContractsCreateWithoutClientInput, ContractsUncheckedCreateWithoutClientInput> | ContractsCreateWithoutClientInput[] | ContractsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContractsCreateOrConnectWithoutClientInput | ContractsCreateOrConnectWithoutClientInput[]
    createMany?: ContractsCreateManyClientInputEnvelope
    connect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
  }

  export type ExtensionsCreateNestedManyWithoutClientInput = {
    create?: XOR<ExtensionsCreateWithoutClientInput, ExtensionsUncheckedCreateWithoutClientInput> | ExtensionsCreateWithoutClientInput[] | ExtensionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ExtensionsCreateOrConnectWithoutClientInput | ExtensionsCreateOrConnectWithoutClientInput[]
    createMany?: ExtensionsCreateManyClientInputEnvelope
    connect?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
  }

  export type QueuesCreateNestedManyWithoutClientInput = {
    create?: XOR<QueuesCreateWithoutClientInput, QueuesUncheckedCreateWithoutClientInput> | QueuesCreateWithoutClientInput[] | QueuesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QueuesCreateOrConnectWithoutClientInput | QueuesCreateOrConnectWithoutClientInput[]
    createMany?: QueuesCreateManyClientInputEnvelope
    connect?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
  }

  export type NumbersCreateNestedManyWithoutClientInput = {
    create?: XOR<NumbersCreateWithoutClientInput, NumbersUncheckedCreateWithoutClientInput> | NumbersCreateWithoutClientInput[] | NumbersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NumbersCreateOrConnectWithoutClientInput | NumbersCreateOrConnectWithoutClientInput[]
    createMany?: NumbersCreateManyClientInputEnvelope
    connect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
  }

  export type CdrCreateNestedManyWithoutClientInput = {
    create?: XOR<CdrCreateWithoutClientInput, CdrUncheckedCreateWithoutClientInput> | CdrCreateWithoutClientInput[] | CdrUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CdrCreateOrConnectWithoutClientInput | CdrCreateOrConnectWithoutClientInput[]
    createMany?: CdrCreateManyClientInputEnvelope
    connect?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<UsersCreateWithoutClientInput, UsersUncheckedCreateWithoutClientInput> | UsersCreateWithoutClientInput[] | UsersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutClientInput | UsersCreateOrConnectWithoutClientInput[]
    createMany?: UsersCreateManyClientInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type ContractsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ContractsCreateWithoutClientInput, ContractsUncheckedCreateWithoutClientInput> | ContractsCreateWithoutClientInput[] | ContractsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContractsCreateOrConnectWithoutClientInput | ContractsCreateOrConnectWithoutClientInput[]
    createMany?: ContractsCreateManyClientInputEnvelope
    connect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
  }

  export type ExtensionsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ExtensionsCreateWithoutClientInput, ExtensionsUncheckedCreateWithoutClientInput> | ExtensionsCreateWithoutClientInput[] | ExtensionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ExtensionsCreateOrConnectWithoutClientInput | ExtensionsCreateOrConnectWithoutClientInput[]
    createMany?: ExtensionsCreateManyClientInputEnvelope
    connect?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
  }

  export type QueuesUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<QueuesCreateWithoutClientInput, QueuesUncheckedCreateWithoutClientInput> | QueuesCreateWithoutClientInput[] | QueuesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QueuesCreateOrConnectWithoutClientInput | QueuesCreateOrConnectWithoutClientInput[]
    createMany?: QueuesCreateManyClientInputEnvelope
    connect?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
  }

  export type NumbersUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<NumbersCreateWithoutClientInput, NumbersUncheckedCreateWithoutClientInput> | NumbersCreateWithoutClientInput[] | NumbersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NumbersCreateOrConnectWithoutClientInput | NumbersCreateOrConnectWithoutClientInput[]
    createMany?: NumbersCreateManyClientInputEnvelope
    connect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
  }

  export type CdrUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CdrCreateWithoutClientInput, CdrUncheckedCreateWithoutClientInput> | CdrCreateWithoutClientInput[] | CdrUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CdrCreateOrConnectWithoutClientInput | CdrCreateOrConnectWithoutClientInput[]
    createMany?: CdrCreateManyClientInputEnvelope
    connect?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutClientNestedInput = {
    create?: XOR<UsersCreateWithoutClientInput, UsersUncheckedCreateWithoutClientInput> | UsersCreateWithoutClientInput[] | UsersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutClientInput | UsersCreateOrConnectWithoutClientInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutClientInput | UsersUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UsersCreateManyClientInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutClientInput | UsersUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutClientInput | UsersUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type ContractsUpdateManyWithoutClientNestedInput = {
    create?: XOR<ContractsCreateWithoutClientInput, ContractsUncheckedCreateWithoutClientInput> | ContractsCreateWithoutClientInput[] | ContractsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContractsCreateOrConnectWithoutClientInput | ContractsCreateOrConnectWithoutClientInput[]
    upsert?: ContractsUpsertWithWhereUniqueWithoutClientInput | ContractsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ContractsCreateManyClientInputEnvelope
    set?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    disconnect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    delete?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    connect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    update?: ContractsUpdateWithWhereUniqueWithoutClientInput | ContractsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ContractsUpdateManyWithWhereWithoutClientInput | ContractsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ContractsScalarWhereInput | ContractsScalarWhereInput[]
  }

  export type ExtensionsUpdateManyWithoutClientNestedInput = {
    create?: XOR<ExtensionsCreateWithoutClientInput, ExtensionsUncheckedCreateWithoutClientInput> | ExtensionsCreateWithoutClientInput[] | ExtensionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ExtensionsCreateOrConnectWithoutClientInput | ExtensionsCreateOrConnectWithoutClientInput[]
    upsert?: ExtensionsUpsertWithWhereUniqueWithoutClientInput | ExtensionsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ExtensionsCreateManyClientInputEnvelope
    set?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
    disconnect?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
    delete?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
    connect?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
    update?: ExtensionsUpdateWithWhereUniqueWithoutClientInput | ExtensionsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ExtensionsUpdateManyWithWhereWithoutClientInput | ExtensionsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ExtensionsScalarWhereInput | ExtensionsScalarWhereInput[]
  }

  export type QueuesUpdateManyWithoutClientNestedInput = {
    create?: XOR<QueuesCreateWithoutClientInput, QueuesUncheckedCreateWithoutClientInput> | QueuesCreateWithoutClientInput[] | QueuesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QueuesCreateOrConnectWithoutClientInput | QueuesCreateOrConnectWithoutClientInput[]
    upsert?: QueuesUpsertWithWhereUniqueWithoutClientInput | QueuesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: QueuesCreateManyClientInputEnvelope
    set?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
    disconnect?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
    delete?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
    connect?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
    update?: QueuesUpdateWithWhereUniqueWithoutClientInput | QueuesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: QueuesUpdateManyWithWhereWithoutClientInput | QueuesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: QueuesScalarWhereInput | QueuesScalarWhereInput[]
  }

  export type NumbersUpdateManyWithoutClientNestedInput = {
    create?: XOR<NumbersCreateWithoutClientInput, NumbersUncheckedCreateWithoutClientInput> | NumbersCreateWithoutClientInput[] | NumbersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NumbersCreateOrConnectWithoutClientInput | NumbersCreateOrConnectWithoutClientInput[]
    upsert?: NumbersUpsertWithWhereUniqueWithoutClientInput | NumbersUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: NumbersCreateManyClientInputEnvelope
    set?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    disconnect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    delete?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    connect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    update?: NumbersUpdateWithWhereUniqueWithoutClientInput | NumbersUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: NumbersUpdateManyWithWhereWithoutClientInput | NumbersUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: NumbersScalarWhereInput | NumbersScalarWhereInput[]
  }

  export type CdrUpdateManyWithoutClientNestedInput = {
    create?: XOR<CdrCreateWithoutClientInput, CdrUncheckedCreateWithoutClientInput> | CdrCreateWithoutClientInput[] | CdrUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CdrCreateOrConnectWithoutClientInput | CdrCreateOrConnectWithoutClientInput[]
    upsert?: CdrUpsertWithWhereUniqueWithoutClientInput | CdrUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CdrCreateManyClientInputEnvelope
    set?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
    disconnect?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
    delete?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
    connect?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
    update?: CdrUpdateWithWhereUniqueWithoutClientInput | CdrUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CdrUpdateManyWithWhereWithoutClientInput | CdrUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CdrScalarWhereInput | CdrScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<UsersCreateWithoutClientInput, UsersUncheckedCreateWithoutClientInput> | UsersCreateWithoutClientInput[] | UsersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutClientInput | UsersCreateOrConnectWithoutClientInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutClientInput | UsersUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UsersCreateManyClientInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutClientInput | UsersUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutClientInput | UsersUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type ContractsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ContractsCreateWithoutClientInput, ContractsUncheckedCreateWithoutClientInput> | ContractsCreateWithoutClientInput[] | ContractsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContractsCreateOrConnectWithoutClientInput | ContractsCreateOrConnectWithoutClientInput[]
    upsert?: ContractsUpsertWithWhereUniqueWithoutClientInput | ContractsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ContractsCreateManyClientInputEnvelope
    set?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    disconnect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    delete?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    connect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    update?: ContractsUpdateWithWhereUniqueWithoutClientInput | ContractsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ContractsUpdateManyWithWhereWithoutClientInput | ContractsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ContractsScalarWhereInput | ContractsScalarWhereInput[]
  }

  export type ExtensionsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ExtensionsCreateWithoutClientInput, ExtensionsUncheckedCreateWithoutClientInput> | ExtensionsCreateWithoutClientInput[] | ExtensionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ExtensionsCreateOrConnectWithoutClientInput | ExtensionsCreateOrConnectWithoutClientInput[]
    upsert?: ExtensionsUpsertWithWhereUniqueWithoutClientInput | ExtensionsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ExtensionsCreateManyClientInputEnvelope
    set?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
    disconnect?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
    delete?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
    connect?: ExtensionsWhereUniqueInput | ExtensionsWhereUniqueInput[]
    update?: ExtensionsUpdateWithWhereUniqueWithoutClientInput | ExtensionsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ExtensionsUpdateManyWithWhereWithoutClientInput | ExtensionsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ExtensionsScalarWhereInput | ExtensionsScalarWhereInput[]
  }

  export type QueuesUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<QueuesCreateWithoutClientInput, QueuesUncheckedCreateWithoutClientInput> | QueuesCreateWithoutClientInput[] | QueuesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QueuesCreateOrConnectWithoutClientInput | QueuesCreateOrConnectWithoutClientInput[]
    upsert?: QueuesUpsertWithWhereUniqueWithoutClientInput | QueuesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: QueuesCreateManyClientInputEnvelope
    set?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
    disconnect?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
    delete?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
    connect?: QueuesWhereUniqueInput | QueuesWhereUniqueInput[]
    update?: QueuesUpdateWithWhereUniqueWithoutClientInput | QueuesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: QueuesUpdateManyWithWhereWithoutClientInput | QueuesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: QueuesScalarWhereInput | QueuesScalarWhereInput[]
  }

  export type NumbersUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<NumbersCreateWithoutClientInput, NumbersUncheckedCreateWithoutClientInput> | NumbersCreateWithoutClientInput[] | NumbersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NumbersCreateOrConnectWithoutClientInput | NumbersCreateOrConnectWithoutClientInput[]
    upsert?: NumbersUpsertWithWhereUniqueWithoutClientInput | NumbersUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: NumbersCreateManyClientInputEnvelope
    set?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    disconnect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    delete?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    connect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    update?: NumbersUpdateWithWhereUniqueWithoutClientInput | NumbersUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: NumbersUpdateManyWithWhereWithoutClientInput | NumbersUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: NumbersScalarWhereInput | NumbersScalarWhereInput[]
  }

  export type CdrUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CdrCreateWithoutClientInput, CdrUncheckedCreateWithoutClientInput> | CdrCreateWithoutClientInput[] | CdrUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CdrCreateOrConnectWithoutClientInput | CdrCreateOrConnectWithoutClientInput[]
    upsert?: CdrUpsertWithWhereUniqueWithoutClientInput | CdrUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CdrCreateManyClientInputEnvelope
    set?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
    disconnect?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
    delete?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
    connect?: CdrWhereUniqueInput | CdrWhereUniqueInput[]
    update?: CdrUpdateWithWhereUniqueWithoutClientInput | CdrUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CdrUpdateManyWithWhereWithoutClientInput | CdrUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CdrScalarWhereInput | CdrScalarWhereInput[]
  }

  export type ClientsCreateNestedOneWithoutUsersInput = {
    create?: XOR<ClientsCreateWithoutUsersInput, ClientsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutUsersInput
    connect?: ClientsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ClientsCreateWithoutUsersInput, ClientsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutUsersInput
    upsert?: ClientsUpsertWithoutUsersInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutUsersInput, ClientsUpdateWithoutUsersInput>, ClientsUncheckedUpdateWithoutUsersInput>
  }

  export type ClientsCreateNestedOneWithoutContractsInput = {
    create?: XOR<ClientsCreateWithoutContractsInput, ClientsUncheckedCreateWithoutContractsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutContractsInput
    connect?: ClientsWhereUniqueInput
  }

  export type DevicesCreateNestedManyWithoutContractInput = {
    create?: XOR<DevicesCreateWithoutContractInput, DevicesUncheckedCreateWithoutContractInput> | DevicesCreateWithoutContractInput[] | DevicesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DevicesCreateOrConnectWithoutContractInput | DevicesCreateOrConnectWithoutContractInput[]
    createMany?: DevicesCreateManyContractInputEnvelope
    connect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
  }

  export type InvoicesCreateNestedManyWithoutContractInput = {
    create?: XOR<InvoicesCreateWithoutContractInput, InvoicesUncheckedCreateWithoutContractInput> | InvoicesCreateWithoutContractInput[] | InvoicesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutContractInput | InvoicesCreateOrConnectWithoutContractInput[]
    createMany?: InvoicesCreateManyContractInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type DevicesUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<DevicesCreateWithoutContractInput, DevicesUncheckedCreateWithoutContractInput> | DevicesCreateWithoutContractInput[] | DevicesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DevicesCreateOrConnectWithoutContractInput | DevicesCreateOrConnectWithoutContractInput[]
    createMany?: DevicesCreateManyContractInputEnvelope
    connect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
  }

  export type InvoicesUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<InvoicesCreateWithoutContractInput, InvoicesUncheckedCreateWithoutContractInput> | InvoicesCreateWithoutContractInput[] | InvoicesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutContractInput | InvoicesCreateOrConnectWithoutContractInput[]
    createMany?: InvoicesCreateManyContractInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type ClientsUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<ClientsCreateWithoutContractsInput, ClientsUncheckedCreateWithoutContractsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutContractsInput
    upsert?: ClientsUpsertWithoutContractsInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutContractsInput, ClientsUpdateWithoutContractsInput>, ClientsUncheckedUpdateWithoutContractsInput>
  }

  export type DevicesUpdateManyWithoutContractNestedInput = {
    create?: XOR<DevicesCreateWithoutContractInput, DevicesUncheckedCreateWithoutContractInput> | DevicesCreateWithoutContractInput[] | DevicesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DevicesCreateOrConnectWithoutContractInput | DevicesCreateOrConnectWithoutContractInput[]
    upsert?: DevicesUpsertWithWhereUniqueWithoutContractInput | DevicesUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: DevicesCreateManyContractInputEnvelope
    set?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    disconnect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    delete?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    connect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    update?: DevicesUpdateWithWhereUniqueWithoutContractInput | DevicesUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: DevicesUpdateManyWithWhereWithoutContractInput | DevicesUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: DevicesScalarWhereInput | DevicesScalarWhereInput[]
  }

  export type InvoicesUpdateManyWithoutContractNestedInput = {
    create?: XOR<InvoicesCreateWithoutContractInput, InvoicesUncheckedCreateWithoutContractInput> | InvoicesCreateWithoutContractInput[] | InvoicesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutContractInput | InvoicesCreateOrConnectWithoutContractInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutContractInput | InvoicesUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: InvoicesCreateManyContractInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutContractInput | InvoicesUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutContractInput | InvoicesUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type DevicesUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<DevicesCreateWithoutContractInput, DevicesUncheckedCreateWithoutContractInput> | DevicesCreateWithoutContractInput[] | DevicesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DevicesCreateOrConnectWithoutContractInput | DevicesCreateOrConnectWithoutContractInput[]
    upsert?: DevicesUpsertWithWhereUniqueWithoutContractInput | DevicesUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: DevicesCreateManyContractInputEnvelope
    set?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    disconnect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    delete?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    connect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    update?: DevicesUpdateWithWhereUniqueWithoutContractInput | DevicesUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: DevicesUpdateManyWithWhereWithoutContractInput | DevicesUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: DevicesScalarWhereInput | DevicesScalarWhereInput[]
  }

  export type InvoicesUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<InvoicesCreateWithoutContractInput, InvoicesUncheckedCreateWithoutContractInput> | InvoicesCreateWithoutContractInput[] | InvoicesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutContractInput | InvoicesCreateOrConnectWithoutContractInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutContractInput | InvoicesUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: InvoicesCreateManyContractInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutContractInput | InvoicesUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutContractInput | InvoicesUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type ClientsCreateNestedOneWithoutExtensionsInput = {
    create?: XOR<ClientsCreateWithoutExtensionsInput, ClientsUncheckedCreateWithoutExtensionsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutExtensionsInput
    connect?: ClientsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutExtensionsNestedInput = {
    create?: XOR<ClientsCreateWithoutExtensionsInput, ClientsUncheckedCreateWithoutExtensionsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutExtensionsInput
    upsert?: ClientsUpsertWithoutExtensionsInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutExtensionsInput, ClientsUpdateWithoutExtensionsInput>, ClientsUncheckedUpdateWithoutExtensionsInput>
  }

  export type ClientsCreateNestedOneWithoutQueuesInput = {
    create?: XOR<ClientsCreateWithoutQueuesInput, ClientsUncheckedCreateWithoutQueuesInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutQueuesInput
    connect?: ClientsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutQueuesNestedInput = {
    create?: XOR<ClientsCreateWithoutQueuesInput, ClientsUncheckedCreateWithoutQueuesInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutQueuesInput
    upsert?: ClientsUpsertWithoutQueuesInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutQueuesInput, ClientsUpdateWithoutQueuesInput>, ClientsUncheckedUpdateWithoutQueuesInput>
  }

  export type ClientsCreateNestedOneWithoutNumbersInput = {
    create?: XOR<ClientsCreateWithoutNumbersInput, ClientsUncheckedCreateWithoutNumbersInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutNumbersInput
    connect?: ClientsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutNumbersNestedInput = {
    create?: XOR<ClientsCreateWithoutNumbersInput, ClientsUncheckedCreateWithoutNumbersInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutNumbersInput
    upsert?: ClientsUpsertWithoutNumbersInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutNumbersInput, ClientsUpdateWithoutNumbersInput>, ClientsUncheckedUpdateWithoutNumbersInput>
  }

  export type ClientsCreateNestedOneWithoutCdrInput = {
    create?: XOR<ClientsCreateWithoutCdrInput, ClientsUncheckedCreateWithoutCdrInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutCdrInput
    connect?: ClientsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientsUpdateOneRequiredWithoutCdrNestedInput = {
    create?: XOR<ClientsCreateWithoutCdrInput, ClientsUncheckedCreateWithoutCdrInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutCdrInput
    upsert?: ClientsUpsertWithoutCdrInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutCdrInput, ClientsUpdateWithoutCdrInput>, ClientsUncheckedUpdateWithoutCdrInput>
  }

  export type ContractsCreateNestedOneWithoutDevicesInput = {
    create?: XOR<ContractsCreateWithoutDevicesInput, ContractsUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutDevicesInput
    connect?: ContractsWhereUniqueInput
  }

  export type ContractsUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<ContractsCreateWithoutDevicesInput, ContractsUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutDevicesInput
    upsert?: ContractsUpsertWithoutDevicesInput
    connect?: ContractsWhereUniqueInput
    update?: XOR<XOR<ContractsUpdateToOneWithWhereWithoutDevicesInput, ContractsUpdateWithoutDevicesInput>, ContractsUncheckedUpdateWithoutDevicesInput>
  }

  export type ContractsCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<ContractsCreateWithoutInvoicesInput, ContractsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutInvoicesInput
    connect?: ContractsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContractsUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<ContractsCreateWithoutInvoicesInput, ContractsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutInvoicesInput
    upsert?: ContractsUpsertWithoutInvoicesInput
    connect?: ContractsWhereUniqueInput
    update?: XOR<XOR<ContractsUpdateToOneWithWhereWithoutInvoicesInput, ContractsUpdateWithoutInvoicesInput>, ContractsUncheckedUpdateWithoutInvoicesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UsersCreateWithoutClientInput = {
    name: string
    email: string
    cpf: string
    phoneNumber: string
    password?: string | null
    recoveryToken?: string | null
    accessType: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutClientInput = {
    id?: number
    name: string
    email: string
    cpf: string
    phoneNumber: string
    password?: string | null
    recoveryToken?: string | null
    accessType: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutClientInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutClientInput, UsersUncheckedCreateWithoutClientInput>
  }

  export type UsersCreateManyClientInputEnvelope = {
    data: UsersCreateManyClientInput | UsersCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ContractsCreateWithoutClientInput = {
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Devices?: DevicesCreateNestedManyWithoutContractInput
    Invoices?: InvoicesCreateNestedManyWithoutContractInput
  }

  export type ContractsUncheckedCreateWithoutClientInput = {
    id?: number
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Devices?: DevicesUncheckedCreateNestedManyWithoutContractInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractsCreateOrConnectWithoutClientInput = {
    where: ContractsWhereUniqueInput
    create: XOR<ContractsCreateWithoutClientInput, ContractsUncheckedCreateWithoutClientInput>
  }

  export type ContractsCreateManyClientInputEnvelope = {
    data: ContractsCreateManyClientInput | ContractsCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ExtensionsCreateWithoutClientInput = {
    ramal: string
    description?: string | null
    password?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExtensionsUncheckedCreateWithoutClientInput = {
    id?: number
    ramal: string
    description?: string | null
    password?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExtensionsCreateOrConnectWithoutClientInput = {
    where: ExtensionsWhereUniqueInput
    create: XOR<ExtensionsCreateWithoutClientInput, ExtensionsUncheckedCreateWithoutClientInput>
  }

  export type ExtensionsCreateManyClientInputEnvelope = {
    data: ExtensionsCreateManyClientInput | ExtensionsCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type QueuesCreateWithoutClientInput = {
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QueuesUncheckedCreateWithoutClientInput = {
    id?: number
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QueuesCreateOrConnectWithoutClientInput = {
    where: QueuesWhereUniqueInput
    create: XOR<QueuesCreateWithoutClientInput, QueuesUncheckedCreateWithoutClientInput>
  }

  export type QueuesCreateManyClientInputEnvelope = {
    data: QueuesCreateManyClientInput | QueuesCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type NumbersCreateWithoutClientInput = {
    number: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NumbersUncheckedCreateWithoutClientInput = {
    id?: number
    number: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NumbersCreateOrConnectWithoutClientInput = {
    where: NumbersWhereUniqueInput
    create: XOR<NumbersCreateWithoutClientInput, NumbersUncheckedCreateWithoutClientInput>
  }

  export type NumbersCreateManyClientInputEnvelope = {
    data: NumbersCreateManyClientInput | NumbersCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CdrCreateWithoutClientInput = {
    linkedid: number
    callDate?: Date | string | null
    source?: string | null
    destination?: string | null
    channel?: string | null
    queue?: string | null
    queueName?: string | null
    agent?: string | null
    direction?: string | null
    status?: string | null
    recordingFile?: string | null
    duration?: number | null
    waitingTime?: number | null
    serviceTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CdrUncheckedCreateWithoutClientInput = {
    id?: number
    linkedid: number
    callDate?: Date | string | null
    source?: string | null
    destination?: string | null
    channel?: string | null
    queue?: string | null
    queueName?: string | null
    agent?: string | null
    direction?: string | null
    status?: string | null
    recordingFile?: string | null
    duration?: number | null
    waitingTime?: number | null
    serviceTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CdrCreateOrConnectWithoutClientInput = {
    where: CdrWhereUniqueInput
    create: XOR<CdrCreateWithoutClientInput, CdrUncheckedCreateWithoutClientInput>
  }

  export type CdrCreateManyClientInputEnvelope = {
    data: CdrCreateManyClientInput | CdrCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutClientInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutClientInput, UsersUncheckedUpdateWithoutClientInput>
    create: XOR<UsersCreateWithoutClientInput, UsersUncheckedCreateWithoutClientInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutClientInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutClientInput, UsersUncheckedUpdateWithoutClientInput>
  }

  export type UsersUpdateManyWithWhereWithoutClientInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutClientInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    cpf?: StringFilter<"Users"> | string
    phoneNumber?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    recoveryToken?: StringNullableFilter<"Users"> | string | null
    accessType?: StringFilter<"Users"> | string
    isActive?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    clientId?: IntFilter<"Users"> | number
  }

  export type ContractsUpsertWithWhereUniqueWithoutClientInput = {
    where: ContractsWhereUniqueInput
    update: XOR<ContractsUpdateWithoutClientInput, ContractsUncheckedUpdateWithoutClientInput>
    create: XOR<ContractsCreateWithoutClientInput, ContractsUncheckedCreateWithoutClientInput>
  }

  export type ContractsUpdateWithWhereUniqueWithoutClientInput = {
    where: ContractsWhereUniqueInput
    data: XOR<ContractsUpdateWithoutClientInput, ContractsUncheckedUpdateWithoutClientInput>
  }

  export type ContractsUpdateManyWithWhereWithoutClientInput = {
    where: ContractsScalarWhereInput
    data: XOR<ContractsUpdateManyMutationInput, ContractsUncheckedUpdateManyWithoutClientInput>
  }

  export type ContractsScalarWhereInput = {
    AND?: ContractsScalarWhereInput | ContractsScalarWhereInput[]
    OR?: ContractsScalarWhereInput[]
    NOT?: ContractsScalarWhereInput | ContractsScalarWhereInput[]
    id?: IntFilter<"Contracts"> | number
    startedAt?: DateTimeFilter<"Contracts"> | Date | string
    finishedAt?: DateTimeFilter<"Contracts"> | Date | string
    createdAt?: DateTimeFilter<"Contracts"> | Date | string
    updatedAt?: DateTimeFilter<"Contracts"> | Date | string
    clientId?: IntFilter<"Contracts"> | number
  }

  export type ExtensionsUpsertWithWhereUniqueWithoutClientInput = {
    where: ExtensionsWhereUniqueInput
    update: XOR<ExtensionsUpdateWithoutClientInput, ExtensionsUncheckedUpdateWithoutClientInput>
    create: XOR<ExtensionsCreateWithoutClientInput, ExtensionsUncheckedCreateWithoutClientInput>
  }

  export type ExtensionsUpdateWithWhereUniqueWithoutClientInput = {
    where: ExtensionsWhereUniqueInput
    data: XOR<ExtensionsUpdateWithoutClientInput, ExtensionsUncheckedUpdateWithoutClientInput>
  }

  export type ExtensionsUpdateManyWithWhereWithoutClientInput = {
    where: ExtensionsScalarWhereInput
    data: XOR<ExtensionsUpdateManyMutationInput, ExtensionsUncheckedUpdateManyWithoutClientInput>
  }

  export type ExtensionsScalarWhereInput = {
    AND?: ExtensionsScalarWhereInput | ExtensionsScalarWhereInput[]
    OR?: ExtensionsScalarWhereInput[]
    NOT?: ExtensionsScalarWhereInput | ExtensionsScalarWhereInput[]
    id?: IntFilter<"Extensions"> | number
    ramal?: StringFilter<"Extensions"> | string
    description?: StringNullableFilter<"Extensions"> | string | null
    password?: StringNullableFilter<"Extensions"> | string | null
    isActive?: BoolFilter<"Extensions"> | boolean
    createdAt?: DateTimeFilter<"Extensions"> | Date | string
    updatedAt?: DateTimeFilter<"Extensions"> | Date | string
    clientId?: IntFilter<"Extensions"> | number
  }

  export type QueuesUpsertWithWhereUniqueWithoutClientInput = {
    where: QueuesWhereUniqueInput
    update: XOR<QueuesUpdateWithoutClientInput, QueuesUncheckedUpdateWithoutClientInput>
    create: XOR<QueuesCreateWithoutClientInput, QueuesUncheckedCreateWithoutClientInput>
  }

  export type QueuesUpdateWithWhereUniqueWithoutClientInput = {
    where: QueuesWhereUniqueInput
    data: XOR<QueuesUpdateWithoutClientInput, QueuesUncheckedUpdateWithoutClientInput>
  }

  export type QueuesUpdateManyWithWhereWithoutClientInput = {
    where: QueuesScalarWhereInput
    data: XOR<QueuesUpdateManyMutationInput, QueuesUncheckedUpdateManyWithoutClientInput>
  }

  export type QueuesScalarWhereInput = {
    AND?: QueuesScalarWhereInput | QueuesScalarWhereInput[]
    OR?: QueuesScalarWhereInput[]
    NOT?: QueuesScalarWhereInput | QueuesScalarWhereInput[]
    id?: IntFilter<"Queues"> | number
    code?: StringFilter<"Queues"> | string
    description?: StringNullableFilter<"Queues"> | string | null
    isActive?: BoolFilter<"Queues"> | boolean
    createdAt?: DateTimeFilter<"Queues"> | Date | string
    updatedAt?: DateTimeFilter<"Queues"> | Date | string
    clientId?: IntFilter<"Queues"> | number
  }

  export type NumbersUpsertWithWhereUniqueWithoutClientInput = {
    where: NumbersWhereUniqueInput
    update: XOR<NumbersUpdateWithoutClientInput, NumbersUncheckedUpdateWithoutClientInput>
    create: XOR<NumbersCreateWithoutClientInput, NumbersUncheckedCreateWithoutClientInput>
  }

  export type NumbersUpdateWithWhereUniqueWithoutClientInput = {
    where: NumbersWhereUniqueInput
    data: XOR<NumbersUpdateWithoutClientInput, NumbersUncheckedUpdateWithoutClientInput>
  }

  export type NumbersUpdateManyWithWhereWithoutClientInput = {
    where: NumbersScalarWhereInput
    data: XOR<NumbersUpdateManyMutationInput, NumbersUncheckedUpdateManyWithoutClientInput>
  }

  export type NumbersScalarWhereInput = {
    AND?: NumbersScalarWhereInput | NumbersScalarWhereInput[]
    OR?: NumbersScalarWhereInput[]
    NOT?: NumbersScalarWhereInput | NumbersScalarWhereInput[]
    id?: IntFilter<"Numbers"> | number
    number?: StringFilter<"Numbers"> | string
    description?: StringNullableFilter<"Numbers"> | string | null
    isActive?: BoolFilter<"Numbers"> | boolean
    createdAt?: DateTimeFilter<"Numbers"> | Date | string
    updatedAt?: DateTimeFilter<"Numbers"> | Date | string
    clientId?: IntFilter<"Numbers"> | number
  }

  export type CdrUpsertWithWhereUniqueWithoutClientInput = {
    where: CdrWhereUniqueInput
    update: XOR<CdrUpdateWithoutClientInput, CdrUncheckedUpdateWithoutClientInput>
    create: XOR<CdrCreateWithoutClientInput, CdrUncheckedCreateWithoutClientInput>
  }

  export type CdrUpdateWithWhereUniqueWithoutClientInput = {
    where: CdrWhereUniqueInput
    data: XOR<CdrUpdateWithoutClientInput, CdrUncheckedUpdateWithoutClientInput>
  }

  export type CdrUpdateManyWithWhereWithoutClientInput = {
    where: CdrScalarWhereInput
    data: XOR<CdrUpdateManyMutationInput, CdrUncheckedUpdateManyWithoutClientInput>
  }

  export type CdrScalarWhereInput = {
    AND?: CdrScalarWhereInput | CdrScalarWhereInput[]
    OR?: CdrScalarWhereInput[]
    NOT?: CdrScalarWhereInput | CdrScalarWhereInput[]
    id?: IntFilter<"Cdr"> | number
    linkedid?: IntFilter<"Cdr"> | number
    callDate?: DateTimeNullableFilter<"Cdr"> | Date | string | null
    source?: StringNullableFilter<"Cdr"> | string | null
    destination?: StringNullableFilter<"Cdr"> | string | null
    channel?: StringNullableFilter<"Cdr"> | string | null
    queue?: StringNullableFilter<"Cdr"> | string | null
    queueName?: StringNullableFilter<"Cdr"> | string | null
    agent?: StringNullableFilter<"Cdr"> | string | null
    direction?: StringNullableFilter<"Cdr"> | string | null
    status?: StringNullableFilter<"Cdr"> | string | null
    recordingFile?: StringNullableFilter<"Cdr"> | string | null
    duration?: IntNullableFilter<"Cdr"> | number | null
    waitingTime?: IntNullableFilter<"Cdr"> | number | null
    serviceTime?: IntNullableFilter<"Cdr"> | number | null
    createdAt?: DateTimeFilter<"Cdr"> | Date | string
    updatedAt?: DateTimeFilter<"Cdr"> | Date | string
    clientId?: IntFilter<"Cdr"> | number
  }

  export type ClientsCreateWithoutUsersInput = {
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Contracts?: ContractsCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsCreateNestedManyWithoutClientInput
    Queues?: QueuesCreateNestedManyWithoutClientInput
    Numbers?: NumbersCreateNestedManyWithoutClientInput
    Cdr?: CdrCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Contracts?: ContractsUncheckedCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsUncheckedCreateNestedManyWithoutClientInput
    Queues?: QueuesUncheckedCreateNestedManyWithoutClientInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutClientInput
    Cdr?: CdrUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutUsersInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutUsersInput, ClientsUncheckedCreateWithoutUsersInput>
  }

  export type ClientsUpsertWithoutUsersInput = {
    update: XOR<ClientsUpdateWithoutUsersInput, ClientsUncheckedUpdateWithoutUsersInput>
    create: XOR<ClientsCreateWithoutUsersInput, ClientsUncheckedCreateWithoutUsersInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutUsersInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutUsersInput, ClientsUncheckedUpdateWithoutUsersInput>
  }

  export type ClientsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contracts?: ContractsUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUpdateManyWithoutClientNestedInput
    Queues?: QueuesUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUpdateManyWithoutClientNestedInput
    Cdr?: CdrUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contracts?: ContractsUncheckedUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUncheckedUpdateManyWithoutClientNestedInput
    Queues?: QueuesUncheckedUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutClientNestedInput
    Cdr?: CdrUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsCreateWithoutContractsInput = {
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsCreateNestedManyWithoutClientInput
    Queues?: QueuesCreateNestedManyWithoutClientInput
    Numbers?: NumbersCreateNestedManyWithoutClientInput
    Cdr?: CdrCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutContractsInput = {
    id?: number
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsUncheckedCreateNestedManyWithoutClientInput
    Queues?: QueuesUncheckedCreateNestedManyWithoutClientInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutClientInput
    Cdr?: CdrUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutContractsInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutContractsInput, ClientsUncheckedCreateWithoutContractsInput>
  }

  export type DevicesCreateWithoutContractInput = {
    description: string
    serialNumber: string
    mac: string
    brand: string
    model: string
    isNew: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevicesUncheckedCreateWithoutContractInput = {
    id?: number
    description: string
    serialNumber: string
    mac: string
    brand: string
    model: string
    isNew: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevicesCreateOrConnectWithoutContractInput = {
    where: DevicesWhereUniqueInput
    create: XOR<DevicesCreateWithoutContractInput, DevicesUncheckedCreateWithoutContractInput>
  }

  export type DevicesCreateManyContractInputEnvelope = {
    data: DevicesCreateManyContractInput | DevicesCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type InvoicesCreateWithoutContractInput = {
    barcode: string
    value: number
    status: string
    dueDate: Date | string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoicesUncheckedCreateWithoutContractInput = {
    id?: number
    barcode: string
    value: number
    status: string
    dueDate: Date | string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoicesCreateOrConnectWithoutContractInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutContractInput, InvoicesUncheckedCreateWithoutContractInput>
  }

  export type InvoicesCreateManyContractInputEnvelope = {
    data: InvoicesCreateManyContractInput | InvoicesCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ClientsUpsertWithoutContractsInput = {
    update: XOR<ClientsUpdateWithoutContractsInput, ClientsUncheckedUpdateWithoutContractsInput>
    create: XOR<ClientsCreateWithoutContractsInput, ClientsUncheckedCreateWithoutContractsInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutContractsInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutContractsInput, ClientsUncheckedUpdateWithoutContractsInput>
  }

  export type ClientsUpdateWithoutContractsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUpdateManyWithoutClientNestedInput
    Queues?: QueuesUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUpdateManyWithoutClientNestedInput
    Cdr?: CdrUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUncheckedUpdateManyWithoutClientNestedInput
    Queues?: QueuesUncheckedUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutClientNestedInput
    Cdr?: CdrUncheckedUpdateManyWithoutClientNestedInput
  }

  export type DevicesUpsertWithWhereUniqueWithoutContractInput = {
    where: DevicesWhereUniqueInput
    update: XOR<DevicesUpdateWithoutContractInput, DevicesUncheckedUpdateWithoutContractInput>
    create: XOR<DevicesCreateWithoutContractInput, DevicesUncheckedCreateWithoutContractInput>
  }

  export type DevicesUpdateWithWhereUniqueWithoutContractInput = {
    where: DevicesWhereUniqueInput
    data: XOR<DevicesUpdateWithoutContractInput, DevicesUncheckedUpdateWithoutContractInput>
  }

  export type DevicesUpdateManyWithWhereWithoutContractInput = {
    where: DevicesScalarWhereInput
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyWithoutContractInput>
  }

  export type DevicesScalarWhereInput = {
    AND?: DevicesScalarWhereInput | DevicesScalarWhereInput[]
    OR?: DevicesScalarWhereInput[]
    NOT?: DevicesScalarWhereInput | DevicesScalarWhereInput[]
    id?: IntFilter<"Devices"> | number
    description?: StringFilter<"Devices"> | string
    serialNumber?: StringFilter<"Devices"> | string
    mac?: StringFilter<"Devices"> | string
    brand?: StringFilter<"Devices"> | string
    model?: StringFilter<"Devices"> | string
    isNew?: BoolFilter<"Devices"> | boolean
    status?: StringFilter<"Devices"> | string
    createdAt?: DateTimeFilter<"Devices"> | Date | string
    updatedAt?: DateTimeFilter<"Devices"> | Date | string
    contractId?: IntFilter<"Devices"> | number
  }

  export type InvoicesUpsertWithWhereUniqueWithoutContractInput = {
    where: InvoicesWhereUniqueInput
    update: XOR<InvoicesUpdateWithoutContractInput, InvoicesUncheckedUpdateWithoutContractInput>
    create: XOR<InvoicesCreateWithoutContractInput, InvoicesUncheckedCreateWithoutContractInput>
  }

  export type InvoicesUpdateWithWhereUniqueWithoutContractInput = {
    where: InvoicesWhereUniqueInput
    data: XOR<InvoicesUpdateWithoutContractInput, InvoicesUncheckedUpdateWithoutContractInput>
  }

  export type InvoicesUpdateManyWithWhereWithoutContractInput = {
    where: InvoicesScalarWhereInput
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyWithoutContractInput>
  }

  export type InvoicesScalarWhereInput = {
    AND?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
    OR?: InvoicesScalarWhereInput[]
    NOT?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
    id?: IntFilter<"Invoices"> | number
    barcode?: StringFilter<"Invoices"> | string
    value?: FloatFilter<"Invoices"> | number
    status?: StringFilter<"Invoices"> | string
    dueDate?: DateTimeFilter<"Invoices"> | Date | string
    fileName?: StringFilter<"Invoices"> | string
    createdAt?: DateTimeFilter<"Invoices"> | Date | string
    updatedAt?: DateTimeFilter<"Invoices"> | Date | string
    contractId?: IntFilter<"Invoices"> | number
  }

  export type ClientsCreateWithoutExtensionsInput = {
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutClientInput
    Contracts?: ContractsCreateNestedManyWithoutClientInput
    Queues?: QueuesCreateNestedManyWithoutClientInput
    Numbers?: NumbersCreateNestedManyWithoutClientInput
    Cdr?: CdrCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutExtensionsInput = {
    id?: number
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutClientInput
    Contracts?: ContractsUncheckedCreateNestedManyWithoutClientInput
    Queues?: QueuesUncheckedCreateNestedManyWithoutClientInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutClientInput
    Cdr?: CdrUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutExtensionsInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutExtensionsInput, ClientsUncheckedCreateWithoutExtensionsInput>
  }

  export type ClientsUpsertWithoutExtensionsInput = {
    update: XOR<ClientsUpdateWithoutExtensionsInput, ClientsUncheckedUpdateWithoutExtensionsInput>
    create: XOR<ClientsCreateWithoutExtensionsInput, ClientsUncheckedCreateWithoutExtensionsInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutExtensionsInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutExtensionsInput, ClientsUncheckedUpdateWithoutExtensionsInput>
  }

  export type ClientsUpdateWithoutExtensionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUpdateManyWithoutClientNestedInput
    Queues?: QueuesUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUpdateManyWithoutClientNestedInput
    Cdr?: CdrUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutExtensionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUncheckedUpdateManyWithoutClientNestedInput
    Queues?: QueuesUncheckedUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutClientNestedInput
    Cdr?: CdrUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsCreateWithoutQueuesInput = {
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutClientInput
    Contracts?: ContractsCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsCreateNestedManyWithoutClientInput
    Numbers?: NumbersCreateNestedManyWithoutClientInput
    Cdr?: CdrCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutQueuesInput = {
    id?: number
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutClientInput
    Contracts?: ContractsUncheckedCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsUncheckedCreateNestedManyWithoutClientInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutClientInput
    Cdr?: CdrUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutQueuesInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutQueuesInput, ClientsUncheckedCreateWithoutQueuesInput>
  }

  export type ClientsUpsertWithoutQueuesInput = {
    update: XOR<ClientsUpdateWithoutQueuesInput, ClientsUncheckedUpdateWithoutQueuesInput>
    create: XOR<ClientsCreateWithoutQueuesInput, ClientsUncheckedCreateWithoutQueuesInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutQueuesInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutQueuesInput, ClientsUncheckedUpdateWithoutQueuesInput>
  }

  export type ClientsUpdateWithoutQueuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUpdateManyWithoutClientNestedInput
    Cdr?: CdrUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutQueuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUncheckedUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUncheckedUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutClientNestedInput
    Cdr?: CdrUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsCreateWithoutNumbersInput = {
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutClientInput
    Contracts?: ContractsCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsCreateNestedManyWithoutClientInput
    Queues?: QueuesCreateNestedManyWithoutClientInput
    Cdr?: CdrCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutNumbersInput = {
    id?: number
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutClientInput
    Contracts?: ContractsUncheckedCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsUncheckedCreateNestedManyWithoutClientInput
    Queues?: QueuesUncheckedCreateNestedManyWithoutClientInput
    Cdr?: CdrUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutNumbersInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutNumbersInput, ClientsUncheckedCreateWithoutNumbersInput>
  }

  export type ClientsUpsertWithoutNumbersInput = {
    update: XOR<ClientsUpdateWithoutNumbersInput, ClientsUncheckedUpdateWithoutNumbersInput>
    create: XOR<ClientsCreateWithoutNumbersInput, ClientsUncheckedCreateWithoutNumbersInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutNumbersInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutNumbersInput, ClientsUncheckedUpdateWithoutNumbersInput>
  }

  export type ClientsUpdateWithoutNumbersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUpdateManyWithoutClientNestedInput
    Queues?: QueuesUpdateManyWithoutClientNestedInput
    Cdr?: CdrUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutNumbersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUncheckedUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUncheckedUpdateManyWithoutClientNestedInput
    Queues?: QueuesUncheckedUpdateManyWithoutClientNestedInput
    Cdr?: CdrUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsCreateWithoutCdrInput = {
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutClientInput
    Contracts?: ContractsCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsCreateNestedManyWithoutClientInput
    Queues?: QueuesCreateNestedManyWithoutClientInput
    Numbers?: NumbersCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutCdrInput = {
    id?: number
    name: string
    email: string
    cpfCnpj: string
    type: string
    phoneNumber: string
    street: string
    district: string
    number?: string | null
    city: string
    zipCode: string
    state: string
    isActive: boolean
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutClientInput
    Contracts?: ContractsUncheckedCreateNestedManyWithoutClientInput
    Extensions?: ExtensionsUncheckedCreateNestedManyWithoutClientInput
    Queues?: QueuesUncheckedCreateNestedManyWithoutClientInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutCdrInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutCdrInput, ClientsUncheckedCreateWithoutCdrInput>
  }

  export type ClientsUpsertWithoutCdrInput = {
    update: XOR<ClientsUpdateWithoutCdrInput, ClientsUncheckedUpdateWithoutCdrInput>
    create: XOR<ClientsCreateWithoutCdrInput, ClientsUncheckedCreateWithoutCdrInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutCdrInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutCdrInput, ClientsUncheckedUpdateWithoutCdrInput>
  }

  export type ClientsUpdateWithoutCdrInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUpdateManyWithoutClientNestedInput
    Queues?: QueuesUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutCdrInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutClientNestedInput
    Contracts?: ContractsUncheckedUpdateManyWithoutClientNestedInput
    Extensions?: ExtensionsUncheckedUpdateManyWithoutClientNestedInput
    Queues?: QueuesUncheckedUpdateManyWithoutClientNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ContractsCreateWithoutDevicesInput = {
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientsCreateNestedOneWithoutContractsInput
    Invoices?: InvoicesCreateNestedManyWithoutContractInput
  }

  export type ContractsUncheckedCreateWithoutDevicesInput = {
    id?: number
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractsCreateOrConnectWithoutDevicesInput = {
    where: ContractsWhereUniqueInput
    create: XOR<ContractsCreateWithoutDevicesInput, ContractsUncheckedCreateWithoutDevicesInput>
  }

  export type ContractsUpsertWithoutDevicesInput = {
    update: XOR<ContractsUpdateWithoutDevicesInput, ContractsUncheckedUpdateWithoutDevicesInput>
    create: XOR<ContractsCreateWithoutDevicesInput, ContractsUncheckedCreateWithoutDevicesInput>
    where?: ContractsWhereInput
  }

  export type ContractsUpdateToOneWithWhereWithoutDevicesInput = {
    where?: ContractsWhereInput
    data: XOR<ContractsUpdateWithoutDevicesInput, ContractsUncheckedUpdateWithoutDevicesInput>
  }

  export type ContractsUpdateWithoutDevicesInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutContractsNestedInput
    Invoices?: InvoicesUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    Invoices?: InvoicesUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractsCreateWithoutInvoicesInput = {
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientsCreateNestedOneWithoutContractsInput
    Devices?: DevicesCreateNestedManyWithoutContractInput
  }

  export type ContractsUncheckedCreateWithoutInvoicesInput = {
    id?: number
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
    Devices?: DevicesUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractsCreateOrConnectWithoutInvoicesInput = {
    where: ContractsWhereUniqueInput
    create: XOR<ContractsCreateWithoutInvoicesInput, ContractsUncheckedCreateWithoutInvoicesInput>
  }

  export type ContractsUpsertWithoutInvoicesInput = {
    update: XOR<ContractsUpdateWithoutInvoicesInput, ContractsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<ContractsCreateWithoutInvoicesInput, ContractsUncheckedCreateWithoutInvoicesInput>
    where?: ContractsWhereInput
  }

  export type ContractsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: ContractsWhereInput
    data: XOR<ContractsUpdateWithoutInvoicesInput, ContractsUncheckedUpdateWithoutInvoicesInput>
  }

  export type ContractsUpdateWithoutInvoicesInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutContractsNestedInput
    Devices?: DevicesUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
    Devices?: DevicesUncheckedUpdateManyWithoutContractNestedInput
  }

  export type UsersCreateManyClientInput = {
    id?: number
    name: string
    email: string
    cpf: string
    phoneNumber: string
    password?: string | null
    recoveryToken?: string | null
    accessType: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractsCreateManyClientInput = {
    id?: number
    startedAt: Date | string
    finishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExtensionsCreateManyClientInput = {
    id?: number
    ramal: string
    description?: string | null
    password?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QueuesCreateManyClientInput = {
    id?: number
    code: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NumbersCreateManyClientInput = {
    id?: number
    number: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CdrCreateManyClientInput = {
    id?: number
    linkedid: number
    callDate?: Date | string | null
    source?: string | null
    destination?: string | null
    channel?: string | null
    queue?: string | null
    queueName?: string | null
    agent?: string | null
    direction?: string | null
    status?: string | null
    recordingFile?: string | null
    duration?: number | null
    waitingTime?: number | null
    serviceTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateWithoutClientInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractsUpdateWithoutClientInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Devices?: DevicesUpdateManyWithoutContractNestedInput
    Invoices?: InvoicesUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Devices?: DevicesUncheckedUpdateManyWithoutContractNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtensionsUpdateWithoutClientInput = {
    ramal?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtensionsUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    ramal?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtensionsUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    ramal?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueuesUpdateWithoutClientInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueuesUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueuesUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NumbersUpdateWithoutClientInput = {
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NumbersUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NumbersUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CdrUpdateWithoutClientInput = {
    linkedid?: IntFieldUpdateOperationsInput | number
    callDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    serviceTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CdrUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkedid?: IntFieldUpdateOperationsInput | number
    callDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    serviceTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CdrUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkedid?: IntFieldUpdateOperationsInput | number
    callDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    queue?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: NullableStringFieldUpdateOperationsInput | string | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    recordingFile?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    waitingTime?: NullableIntFieldUpdateOperationsInput | number | null
    serviceTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesCreateManyContractInput = {
    id?: number
    description: string
    serialNumber: string
    mac: string
    brand: string
    model: string
    isNew: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoicesCreateManyContractInput = {
    id?: number
    barcode: string
    value: number
    status: string
    dueDate: Date | string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevicesUpdateWithoutContractInput = {
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    isNew?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUpdateWithoutContractInput = {
    barcode?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}