
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model WorkspaceUser
 * 
 */
export type WorkspaceUser = $Result.DefaultSelection<Prisma.$WorkspaceUserPayload>
/**
 * Model EmailList
 * 
 */
export type EmailList = $Result.DefaultSelection<Prisma.$EmailListPayload>
/**
 * Model EmailContact
 * 
 */
export type EmailContact = $Result.DefaultSelection<Prisma.$EmailContactPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaceUser`: Exposes CRUD operations for the **WorkspaceUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceUsers
    * const workspaceUsers = await prisma.workspaceUser.findMany()
    * ```
    */
  get workspaceUser(): Prisma.WorkspaceUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailList`: Exposes CRUD operations for the **EmailList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailLists
    * const emailLists = await prisma.emailList.findMany()
    * ```
    */
  get emailList(): Prisma.EmailListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailContact`: Exposes CRUD operations for the **EmailContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailContacts
    * const emailContacts = await prisma.emailContact.findMany()
    * ```
    */
  get emailContact(): Prisma.EmailContactDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Workspace: 'Workspace',
    WorkspaceUser: 'WorkspaceUser',
    EmailList: 'EmailList',
    EmailContact: 'EmailContact'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workspace" | "workspaceUser" | "emailList" | "emailContact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      WorkspaceUser: {
        payload: Prisma.$WorkspaceUserPayload<ExtArgs>
        fields: Prisma.WorkspaceUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          findFirst: {
            args: Prisma.WorkspaceUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          findMany: {
            args: Prisma.WorkspaceUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>[]
          }
          create: {
            args: Prisma.WorkspaceUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          createMany: {
            args: Prisma.WorkspaceUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>[]
          }
          delete: {
            args: Prisma.WorkspaceUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          update: {
            args: Prisma.WorkspaceUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          aggregate: {
            args: Prisma.WorkspaceUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaceUser>
          }
          groupBy: {
            args: Prisma.WorkspaceUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceUserCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceUserCountAggregateOutputType> | number
          }
        }
      }
      EmailList: {
        payload: Prisma.$EmailListPayload<ExtArgs>
        fields: Prisma.EmailListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload>
          }
          findFirst: {
            args: Prisma.EmailListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload>
          }
          findMany: {
            args: Prisma.EmailListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload>[]
          }
          create: {
            args: Prisma.EmailListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload>
          }
          createMany: {
            args: Prisma.EmailListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload>[]
          }
          delete: {
            args: Prisma.EmailListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload>
          }
          update: {
            args: Prisma.EmailListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload>
          }
          deleteMany: {
            args: Prisma.EmailListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload>[]
          }
          upsert: {
            args: Prisma.EmailListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailListPayload>
          }
          aggregate: {
            args: Prisma.EmailListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailList>
          }
          groupBy: {
            args: Prisma.EmailListGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailListGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailListCountArgs<ExtArgs>
            result: $Utils.Optional<EmailListCountAggregateOutputType> | number
          }
        }
      }
      EmailContact: {
        payload: Prisma.$EmailContactPayload<ExtArgs>
        fields: Prisma.EmailContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          findFirst: {
            args: Prisma.EmailContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          findMany: {
            args: Prisma.EmailContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>[]
          }
          create: {
            args: Prisma.EmailContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          createMany: {
            args: Prisma.EmailContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>[]
          }
          delete: {
            args: Prisma.EmailContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          update: {
            args: Prisma.EmailContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          deleteMany: {
            args: Prisma.EmailContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>[]
          }
          upsert: {
            args: Prisma.EmailContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailContactPayload>
          }
          aggregate: {
            args: Prisma.EmailContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailContact>
          }
          groupBy: {
            args: Prisma.EmailContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailContactCountArgs<ExtArgs>
            result: $Utils.Optional<EmailContactCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workspace?: WorkspaceOmit
    workspaceUser?: WorkspaceUserOmit
    emailList?: EmailListOmit
    emailContact?: EmailContactOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workspaces: number
    EmailList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | UserCountOutputTypeCountWorkspacesArgs
    EmailList?: boolean | UserCountOutputTypeCountEmailListArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailListWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    users: number
    EmailList: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | WorkspaceCountOutputTypeCountUsersArgs
    EmailList?: boolean | WorkspaceCountOutputTypeCountEmailListArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceUserWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountEmailListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailListWhereInput
  }


  /**
   * Count Type EmailListCountOutputType
   */

  export type EmailListCountOutputType = {
    emails: number
  }

  export type EmailListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | EmailListCountOutputTypeCountEmailsArgs
  }

  // Custom InputTypes
  /**
   * EmailListCountOutputType without action
   */
  export type EmailListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailListCountOutputType
     */
    select?: EmailListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmailListCountOutputType without action
   */
  export type EmailListCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailContactWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
    clerkId: string | null
    onBoardingCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
    clerkId: string | null
    onBoardingCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    first_name: number
    last_name: number
    avatar_url: number
    clerkId: number
    meta: number
    onBoardingCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    first_name?: true
    last_name?: true
    avatar_url?: true
    clerkId?: true
    onBoardingCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    first_name?: true
    last_name?: true
    avatar_url?: true
    clerkId?: true
    onBoardingCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    first_name?: true
    last_name?: true
    avatar_url?: true
    clerkId?: true
    meta?: true
    onBoardingCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
    clerkId: string | null
    meta: JsonValue | null
    onBoardingCompleted: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    clerkId?: boolean
    meta?: boolean
    onBoardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    EmailList?: boolean | User$EmailListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    clerkId?: boolean
    meta?: boolean
    onBoardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    clerkId?: boolean
    meta?: boolean
    onBoardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    clerkId?: boolean
    meta?: boolean
    onBoardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "first_name" | "last_name" | "avatar_url" | "clerkId" | "meta" | "onBoardingCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    EmailList?: boolean | User$EmailListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspaces: Prisma.$WorkspaceUserPayload<ExtArgs>[]
      EmailList: Prisma.$EmailListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      first_name: string | null
      last_name: string | null
      avatar_url: string | null
      clerkId: string | null
      meta: Prisma.JsonValue | null
      onBoardingCompleted: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspaces<T extends User$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EmailList<T extends User$EmailListArgs<ExtArgs> = {}>(args?: Subset<T, User$EmailListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly meta: FieldRef<"User", 'Json'>
    readonly onBoardingCompleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workspaces
   */
  export type User$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    where?: WorkspaceUserWhereInput
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    cursor?: WorkspaceUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * User.EmailList
   */
  export type User$EmailListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    where?: EmailListWhereInput
    orderBy?: EmailListOrderByWithRelationInput | EmailListOrderByWithRelationInput[]
    cursor?: EmailListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailListScalarFieldEnum | EmailListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    industry: string | null
    createdAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    industry: string | null
    createdAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    industry: number
    createdAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    industry?: true
    createdAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    industry?: true
    createdAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    industry?: true
    createdAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    logo: string | null
    industry: string | null
    createdAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    industry?: boolean
    createdAt?: boolean
    users?: boolean | Workspace$usersArgs<ExtArgs>
    EmailList?: boolean | Workspace$EmailListArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    industry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    industry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    industry?: boolean
    createdAt?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "industry" | "createdAt", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Workspace$usersArgs<ExtArgs>
    EmailList?: boolean | Workspace$EmailListArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      users: Prisma.$WorkspaceUserPayload<ExtArgs>[]
      EmailList: Prisma.$EmailListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string | null
      industry: string | null
      createdAt: Date
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Workspace$usersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EmailList<T extends Workspace$EmailListArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$EmailListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly logo: FieldRef<"Workspace", 'String'>
    readonly industry: FieldRef<"Workspace", 'String'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.users
   */
  export type Workspace$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    where?: WorkspaceUserWhereInput
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    cursor?: WorkspaceUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * Workspace.EmailList
   */
  export type Workspace$EmailListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    where?: EmailListWhereInput
    orderBy?: EmailListOrderByWithRelationInput | EmailListOrderByWithRelationInput[]
    cursor?: EmailListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailListScalarFieldEnum | EmailListScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model WorkspaceUser
   */

  export type AggregateWorkspaceUser = {
    _count: WorkspaceUserCountAggregateOutputType | null
    _min: WorkspaceUserMinAggregateOutputType | null
    _max: WorkspaceUserMaxAggregateOutputType | null
  }

  export type WorkspaceUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    workspaceId: string | null
    role: string | null
  }

  export type WorkspaceUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    workspaceId: string | null
    role: string | null
  }

  export type WorkspaceUserCountAggregateOutputType = {
    id: number
    userId: number
    workspaceId: number
    role: number
    _all: number
  }


  export type WorkspaceUserMinAggregateInputType = {
    id?: true
    userId?: true
    workspaceId?: true
    role?: true
  }

  export type WorkspaceUserMaxAggregateInputType = {
    id?: true
    userId?: true
    workspaceId?: true
    role?: true
  }

  export type WorkspaceUserCountAggregateInputType = {
    id?: true
    userId?: true
    workspaceId?: true
    role?: true
    _all?: true
  }

  export type WorkspaceUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceUser to aggregate.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceUsers
    **/
    _count?: true | WorkspaceUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceUserMaxAggregateInputType
  }

  export type GetWorkspaceUserAggregateType<T extends WorkspaceUserAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceUser[P]>
      : GetScalarType<T[P], AggregateWorkspaceUser[P]>
  }




  export type WorkspaceUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceUserWhereInput
    orderBy?: WorkspaceUserOrderByWithAggregationInput | WorkspaceUserOrderByWithAggregationInput[]
    by: WorkspaceUserScalarFieldEnum[] | WorkspaceUserScalarFieldEnum
    having?: WorkspaceUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceUserCountAggregateInputType | true
    _min?: WorkspaceUserMinAggregateInputType
    _max?: WorkspaceUserMaxAggregateInputType
  }

  export type WorkspaceUserGroupByOutputType = {
    id: string
    userId: string
    workspaceId: string
    role: string
    _count: WorkspaceUserCountAggregateOutputType | null
    _min: WorkspaceUserMinAggregateOutputType | null
    _max: WorkspaceUserMaxAggregateOutputType | null
  }

  type GetWorkspaceUserGroupByPayload<T extends WorkspaceUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceUserGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceUserGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceUser"]>

  export type WorkspaceUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceUser"]>

  export type WorkspaceUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceUser"]>

  export type WorkspaceUserSelectScalar = {
    id?: boolean
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
  }

  export type WorkspaceUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workspaceId" | "role", ExtArgs["result"]["workspaceUser"]>
  export type WorkspaceUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WorkspaceUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WorkspaceUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $WorkspaceUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkspaceUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      workspaceId: string
      role: string
    }, ExtArgs["result"]["workspaceUser"]>
    composites: {}
  }

  type WorkspaceUserGetPayload<S extends boolean | null | undefined | WorkspaceUserDefaultArgs> = $Result.GetResult<Prisma.$WorkspaceUserPayload, S>

  type WorkspaceUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceUserCountAggregateInputType | true
    }

  export interface WorkspaceUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkspaceUser'], meta: { name: 'WorkspaceUser' } }
    /**
     * Find zero or one WorkspaceUser that matches the filter.
     * @param {WorkspaceUserFindUniqueArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceUserFindUniqueArgs>(args: SelectSubset<T, WorkspaceUserFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkspaceUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceUserFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceUserFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserFindFirstArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceUserFindFirstArgs>(args?: SelectSubset<T, WorkspaceUserFindFirstArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserFindFirstOrThrowArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceUserFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkspaceUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceUsers
     * const workspaceUsers = await prisma.workspaceUser.findMany()
     * 
     * // Get first 10 WorkspaceUsers
     * const workspaceUsers = await prisma.workspaceUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceUserWithIdOnly = await prisma.workspaceUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceUserFindManyArgs>(args?: SelectSubset<T, WorkspaceUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkspaceUser.
     * @param {WorkspaceUserCreateArgs} args - Arguments to create a WorkspaceUser.
     * @example
     * // Create one WorkspaceUser
     * const WorkspaceUser = await prisma.workspaceUser.create({
     *   data: {
     *     // ... data to create a WorkspaceUser
     *   }
     * })
     * 
     */
    create<T extends WorkspaceUserCreateArgs>(args: SelectSubset<T, WorkspaceUserCreateArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkspaceUsers.
     * @param {WorkspaceUserCreateManyArgs} args - Arguments to create many WorkspaceUsers.
     * @example
     * // Create many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceUserCreateManyArgs>(args?: SelectSubset<T, WorkspaceUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkspaceUsers and returns the data saved in the database.
     * @param {WorkspaceUserCreateManyAndReturnArgs} args - Arguments to create many WorkspaceUsers.
     * @example
     * // Create many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkspaceUsers and only return the `id`
     * const workspaceUserWithIdOnly = await prisma.workspaceUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceUserCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkspaceUser.
     * @param {WorkspaceUserDeleteArgs} args - Arguments to delete one WorkspaceUser.
     * @example
     * // Delete one WorkspaceUser
     * const WorkspaceUser = await prisma.workspaceUser.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceUser
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceUserDeleteArgs>(args: SelectSubset<T, WorkspaceUserDeleteArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkspaceUser.
     * @param {WorkspaceUserUpdateArgs} args - Arguments to update one WorkspaceUser.
     * @example
     * // Update one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUserUpdateArgs>(args: SelectSubset<T, WorkspaceUserUpdateArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkspaceUsers.
     * @param {WorkspaceUserDeleteManyArgs} args - Arguments to filter WorkspaceUsers to delete.
     * @example
     * // Delete a few WorkspaceUsers
     * const { count } = await prisma.workspaceUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceUserDeleteManyArgs>(args?: SelectSubset<T, WorkspaceUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUserUpdateManyArgs>(args: SelectSubset<T, WorkspaceUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceUsers and returns the data updated in the database.
     * @param {WorkspaceUserUpdateManyAndReturnArgs} args - Arguments to update many WorkspaceUsers.
     * @example
     * // Update many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkspaceUsers and only return the `id`
     * const workspaceUserWithIdOnly = await prisma.workspaceUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceUserUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkspaceUser.
     * @param {WorkspaceUserUpsertArgs} args - Arguments to update or create a WorkspaceUser.
     * @example
     * // Update or create a WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.upsert({
     *   create: {
     *     // ... data to create a WorkspaceUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceUser we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUserUpsertArgs>(args: SelectSubset<T, WorkspaceUserUpsertArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkspaceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserCountArgs} args - Arguments to filter WorkspaceUsers to count.
     * @example
     * // Count the number of WorkspaceUsers
     * const count = await prisma.workspaceUser.count({
     *   where: {
     *     // ... the filter for the WorkspaceUsers we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceUserCountArgs>(
      args?: Subset<T, WorkspaceUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceUserAggregateArgs>(args: Subset<T, WorkspaceUserAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceUserAggregateType<T>>

    /**
     * Group by WorkspaceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceUserGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkspaceUser model
   */
  readonly fields: WorkspaceUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkspaceUser model
   */
  interface WorkspaceUserFieldRefs {
    readonly id: FieldRef<"WorkspaceUser", 'String'>
    readonly userId: FieldRef<"WorkspaceUser", 'String'>
    readonly workspaceId: FieldRef<"WorkspaceUser", 'String'>
    readonly role: FieldRef<"WorkspaceUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkspaceUser findUnique
   */
  export type WorkspaceUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser findUniqueOrThrow
   */
  export type WorkspaceUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser findFirst
   */
  export type WorkspaceUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceUsers.
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceUsers.
     */
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * WorkspaceUser findFirstOrThrow
   */
  export type WorkspaceUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceUsers.
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceUsers.
     */
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * WorkspaceUser findMany
   */
  export type WorkspaceUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUsers to fetch.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceUsers.
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * WorkspaceUser create
   */
  export type WorkspaceUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkspaceUser.
     */
    data: XOR<WorkspaceUserCreateInput, WorkspaceUserUncheckedCreateInput>
  }

  /**
   * WorkspaceUser createMany
   */
  export type WorkspaceUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkspaceUsers.
     */
    data: WorkspaceUserCreateManyInput | WorkspaceUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkspaceUser createManyAndReturn
   */
  export type WorkspaceUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * The data used to create many WorkspaceUsers.
     */
    data: WorkspaceUserCreateManyInput | WorkspaceUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceUser update
   */
  export type WorkspaceUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkspaceUser.
     */
    data: XOR<WorkspaceUserUpdateInput, WorkspaceUserUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceUser to update.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser updateMany
   */
  export type WorkspaceUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkspaceUsers.
     */
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceUsers to update
     */
    where?: WorkspaceUserWhereInput
    /**
     * Limit how many WorkspaceUsers to update.
     */
    limit?: number
  }

  /**
   * WorkspaceUser updateManyAndReturn
   */
  export type WorkspaceUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * The data used to update WorkspaceUsers.
     */
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceUsers to update
     */
    where?: WorkspaceUserWhereInput
    /**
     * Limit how many WorkspaceUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceUser upsert
   */
  export type WorkspaceUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkspaceUser to update in case it exists.
     */
    where: WorkspaceUserWhereUniqueInput
    /**
     * In case the WorkspaceUser found by the `where` argument doesn't exist, create a new WorkspaceUser with this data.
     */
    create: XOR<WorkspaceUserCreateInput, WorkspaceUserUncheckedCreateInput>
    /**
     * In case the WorkspaceUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUserUpdateInput, WorkspaceUserUncheckedUpdateInput>
  }

  /**
   * WorkspaceUser delete
   */
  export type WorkspaceUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter which WorkspaceUser to delete.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser deleteMany
   */
  export type WorkspaceUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceUsers to delete
     */
    where?: WorkspaceUserWhereInput
    /**
     * Limit how many WorkspaceUsers to delete.
     */
    limit?: number
  }

  /**
   * WorkspaceUser without action
   */
  export type WorkspaceUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
  }


  /**
   * Model EmailList
   */

  export type AggregateEmailList = {
    _count: EmailListCountAggregateOutputType | null
    _min: EmailListMinAggregateOutputType | null
    _max: EmailListMaxAggregateOutputType | null
  }

  export type EmailListMinAggregateOutputType = {
    id: string | null
    name: string | null
    workspaceId: string | null
    uploadedById: string | null
    createdAt: Date | null
  }

  export type EmailListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    workspaceId: string | null
    uploadedById: string | null
    createdAt: Date | null
  }

  export type EmailListCountAggregateOutputType = {
    id: number
    name: number
    workspaceId: number
    uploadedById: number
    createdAt: number
    _all: number
  }


  export type EmailListMinAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
    uploadedById?: true
    createdAt?: true
  }

  export type EmailListMaxAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
    uploadedById?: true
    createdAt?: true
  }

  export type EmailListCountAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
    uploadedById?: true
    createdAt?: true
    _all?: true
  }

  export type EmailListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailList to aggregate.
     */
    where?: EmailListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLists to fetch.
     */
    orderBy?: EmailListOrderByWithRelationInput | EmailListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailLists
    **/
    _count?: true | EmailListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailListMaxAggregateInputType
  }

  export type GetEmailListAggregateType<T extends EmailListAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailList[P]>
      : GetScalarType<T[P], AggregateEmailList[P]>
  }




  export type EmailListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailListWhereInput
    orderBy?: EmailListOrderByWithAggregationInput | EmailListOrderByWithAggregationInput[]
    by: EmailListScalarFieldEnum[] | EmailListScalarFieldEnum
    having?: EmailListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailListCountAggregateInputType | true
    _min?: EmailListMinAggregateInputType
    _max?: EmailListMaxAggregateInputType
  }

  export type EmailListGroupByOutputType = {
    id: string
    name: string
    workspaceId: string
    uploadedById: string
    createdAt: Date
    _count: EmailListCountAggregateOutputType | null
    _min: EmailListMinAggregateOutputType | null
    _max: EmailListMaxAggregateOutputType | null
  }

  type GetEmailListGroupByPayload<T extends EmailListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailListGroupByOutputType[P]>
            : GetScalarType<T[P], EmailListGroupByOutputType[P]>
        }
      >
    >


  export type EmailListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    workspaceId?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    emails?: boolean | EmailList$emailsArgs<ExtArgs>
    _count?: boolean | EmailListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailList"]>

  export type EmailListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    workspaceId?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailList"]>

  export type EmailListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    workspaceId?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailList"]>

  export type EmailListSelectScalar = {
    id?: boolean
    name?: boolean
    workspaceId?: boolean
    uploadedById?: boolean
    createdAt?: boolean
  }

  export type EmailListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "workspaceId" | "uploadedById" | "createdAt", ExtArgs["result"]["emailList"]>
  export type EmailListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    emails?: boolean | EmailList$emailsArgs<ExtArgs>
    _count?: boolean | EmailListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmailListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailList"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      uploadedBy: Prisma.$UserPayload<ExtArgs>
      emails: Prisma.$EmailContactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      workspaceId: string
      uploadedById: string
      createdAt: Date
    }, ExtArgs["result"]["emailList"]>
    composites: {}
  }

  type EmailListGetPayload<S extends boolean | null | undefined | EmailListDefaultArgs> = $Result.GetResult<Prisma.$EmailListPayload, S>

  type EmailListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailListCountAggregateInputType | true
    }

  export interface EmailListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailList'], meta: { name: 'EmailList' } }
    /**
     * Find zero or one EmailList that matches the filter.
     * @param {EmailListFindUniqueArgs} args - Arguments to find a EmailList
     * @example
     * // Get one EmailList
     * const emailList = await prisma.emailList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailListFindUniqueArgs>(args: SelectSubset<T, EmailListFindUniqueArgs<ExtArgs>>): Prisma__EmailListClient<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailListFindUniqueOrThrowArgs} args - Arguments to find a EmailList
     * @example
     * // Get one EmailList
     * const emailList = await prisma.emailList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailListFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailListClient<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailListFindFirstArgs} args - Arguments to find a EmailList
     * @example
     * // Get one EmailList
     * const emailList = await prisma.emailList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailListFindFirstArgs>(args?: SelectSubset<T, EmailListFindFirstArgs<ExtArgs>>): Prisma__EmailListClient<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailListFindFirstOrThrowArgs} args - Arguments to find a EmailList
     * @example
     * // Get one EmailList
     * const emailList = await prisma.emailList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailListFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailListFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailListClient<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailLists
     * const emailLists = await prisma.emailList.findMany()
     * 
     * // Get first 10 EmailLists
     * const emailLists = await prisma.emailList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailListWithIdOnly = await prisma.emailList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailListFindManyArgs>(args?: SelectSubset<T, EmailListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailList.
     * @param {EmailListCreateArgs} args - Arguments to create a EmailList.
     * @example
     * // Create one EmailList
     * const EmailList = await prisma.emailList.create({
     *   data: {
     *     // ... data to create a EmailList
     *   }
     * })
     * 
     */
    create<T extends EmailListCreateArgs>(args: SelectSubset<T, EmailListCreateArgs<ExtArgs>>): Prisma__EmailListClient<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailLists.
     * @param {EmailListCreateManyArgs} args - Arguments to create many EmailLists.
     * @example
     * // Create many EmailLists
     * const emailList = await prisma.emailList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailListCreateManyArgs>(args?: SelectSubset<T, EmailListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailLists and returns the data saved in the database.
     * @param {EmailListCreateManyAndReturnArgs} args - Arguments to create many EmailLists.
     * @example
     * // Create many EmailLists
     * const emailList = await prisma.emailList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailLists and only return the `id`
     * const emailListWithIdOnly = await prisma.emailList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailListCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailList.
     * @param {EmailListDeleteArgs} args - Arguments to delete one EmailList.
     * @example
     * // Delete one EmailList
     * const EmailList = await prisma.emailList.delete({
     *   where: {
     *     // ... filter to delete one EmailList
     *   }
     * })
     * 
     */
    delete<T extends EmailListDeleteArgs>(args: SelectSubset<T, EmailListDeleteArgs<ExtArgs>>): Prisma__EmailListClient<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailList.
     * @param {EmailListUpdateArgs} args - Arguments to update one EmailList.
     * @example
     * // Update one EmailList
     * const emailList = await prisma.emailList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailListUpdateArgs>(args: SelectSubset<T, EmailListUpdateArgs<ExtArgs>>): Prisma__EmailListClient<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailLists.
     * @param {EmailListDeleteManyArgs} args - Arguments to filter EmailLists to delete.
     * @example
     * // Delete a few EmailLists
     * const { count } = await prisma.emailList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailListDeleteManyArgs>(args?: SelectSubset<T, EmailListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailLists
     * const emailList = await prisma.emailList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailListUpdateManyArgs>(args: SelectSubset<T, EmailListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLists and returns the data updated in the database.
     * @param {EmailListUpdateManyAndReturnArgs} args - Arguments to update many EmailLists.
     * @example
     * // Update many EmailLists
     * const emailList = await prisma.emailList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailLists and only return the `id`
     * const emailListWithIdOnly = await prisma.emailList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailListUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailList.
     * @param {EmailListUpsertArgs} args - Arguments to update or create a EmailList.
     * @example
     * // Update or create a EmailList
     * const emailList = await prisma.emailList.upsert({
     *   create: {
     *     // ... data to create a EmailList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailList we want to update
     *   }
     * })
     */
    upsert<T extends EmailListUpsertArgs>(args: SelectSubset<T, EmailListUpsertArgs<ExtArgs>>): Prisma__EmailListClient<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailListCountArgs} args - Arguments to filter EmailLists to count.
     * @example
     * // Count the number of EmailLists
     * const count = await prisma.emailList.count({
     *   where: {
     *     // ... the filter for the EmailLists we want to count
     *   }
     * })
    **/
    count<T extends EmailListCountArgs>(
      args?: Subset<T, EmailListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailListAggregateArgs>(args: Subset<T, EmailListAggregateArgs>): Prisma.PrismaPromise<GetEmailListAggregateType<T>>

    /**
     * Group by EmailList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailListGroupByArgs} args - Group by arguments.
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
      T extends EmailListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailListGroupByArgs['orderBy'] }
        : { orderBy?: EmailListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailList model
   */
  readonly fields: EmailListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emails<T extends EmailList$emailsArgs<ExtArgs> = {}>(args?: Subset<T, EmailList$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EmailList model
   */
  interface EmailListFieldRefs {
    readonly id: FieldRef<"EmailList", 'String'>
    readonly name: FieldRef<"EmailList", 'String'>
    readonly workspaceId: FieldRef<"EmailList", 'String'>
    readonly uploadedById: FieldRef<"EmailList", 'String'>
    readonly createdAt: FieldRef<"EmailList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailList findUnique
   */
  export type EmailListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    /**
     * Filter, which EmailList to fetch.
     */
    where: EmailListWhereUniqueInput
  }

  /**
   * EmailList findUniqueOrThrow
   */
  export type EmailListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    /**
     * Filter, which EmailList to fetch.
     */
    where: EmailListWhereUniqueInput
  }

  /**
   * EmailList findFirst
   */
  export type EmailListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    /**
     * Filter, which EmailList to fetch.
     */
    where?: EmailListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLists to fetch.
     */
    orderBy?: EmailListOrderByWithRelationInput | EmailListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLists.
     */
    cursor?: EmailListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLists.
     */
    distinct?: EmailListScalarFieldEnum | EmailListScalarFieldEnum[]
  }

  /**
   * EmailList findFirstOrThrow
   */
  export type EmailListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    /**
     * Filter, which EmailList to fetch.
     */
    where?: EmailListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLists to fetch.
     */
    orderBy?: EmailListOrderByWithRelationInput | EmailListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLists.
     */
    cursor?: EmailListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLists.
     */
    distinct?: EmailListScalarFieldEnum | EmailListScalarFieldEnum[]
  }

  /**
   * EmailList findMany
   */
  export type EmailListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    /**
     * Filter, which EmailLists to fetch.
     */
    where?: EmailListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLists to fetch.
     */
    orderBy?: EmailListOrderByWithRelationInput | EmailListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailLists.
     */
    cursor?: EmailListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLists.
     */
    skip?: number
    distinct?: EmailListScalarFieldEnum | EmailListScalarFieldEnum[]
  }

  /**
   * EmailList create
   */
  export type EmailListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailList.
     */
    data: XOR<EmailListCreateInput, EmailListUncheckedCreateInput>
  }

  /**
   * EmailList createMany
   */
  export type EmailListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailLists.
     */
    data: EmailListCreateManyInput | EmailListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailList createManyAndReturn
   */
  export type EmailListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * The data used to create many EmailLists.
     */
    data: EmailListCreateManyInput | EmailListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailList update
   */
  export type EmailListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailList.
     */
    data: XOR<EmailListUpdateInput, EmailListUncheckedUpdateInput>
    /**
     * Choose, which EmailList to update.
     */
    where: EmailListWhereUniqueInput
  }

  /**
   * EmailList updateMany
   */
  export type EmailListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailLists.
     */
    data: XOR<EmailListUpdateManyMutationInput, EmailListUncheckedUpdateManyInput>
    /**
     * Filter which EmailLists to update
     */
    where?: EmailListWhereInput
    /**
     * Limit how many EmailLists to update.
     */
    limit?: number
  }

  /**
   * EmailList updateManyAndReturn
   */
  export type EmailListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * The data used to update EmailLists.
     */
    data: XOR<EmailListUpdateManyMutationInput, EmailListUncheckedUpdateManyInput>
    /**
     * Filter which EmailLists to update
     */
    where?: EmailListWhereInput
    /**
     * Limit how many EmailLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailList upsert
   */
  export type EmailListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailList to update in case it exists.
     */
    where: EmailListWhereUniqueInput
    /**
     * In case the EmailList found by the `where` argument doesn't exist, create a new EmailList with this data.
     */
    create: XOR<EmailListCreateInput, EmailListUncheckedCreateInput>
    /**
     * In case the EmailList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailListUpdateInput, EmailListUncheckedUpdateInput>
  }

  /**
   * EmailList delete
   */
  export type EmailListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
    /**
     * Filter which EmailList to delete.
     */
    where: EmailListWhereUniqueInput
  }

  /**
   * EmailList deleteMany
   */
  export type EmailListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLists to delete
     */
    where?: EmailListWhereInput
    /**
     * Limit how many EmailLists to delete.
     */
    limit?: number
  }

  /**
   * EmailList.emails
   */
  export type EmailList$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    where?: EmailContactWhereInput
    orderBy?: EmailContactOrderByWithRelationInput | EmailContactOrderByWithRelationInput[]
    cursor?: EmailContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailContactScalarFieldEnum | EmailContactScalarFieldEnum[]
  }

  /**
   * EmailList without action
   */
  export type EmailListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailList
     */
    select?: EmailListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailList
     */
    omit?: EmailListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailListInclude<ExtArgs> | null
  }


  /**
   * Model EmailContact
   */

  export type AggregateEmailContact = {
    _count: EmailContactCountAggregateOutputType | null
    _min: EmailContactMinAggregateOutputType | null
    _max: EmailContactMaxAggregateOutputType | null
  }

  export type EmailContactMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailListId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type EmailContactMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailListId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type EmailContactCountAggregateOutputType = {
    id: number
    email: number
    emailListId: number
    name: number
    meta: number
    createdAt: number
    _all: number
  }


  export type EmailContactMinAggregateInputType = {
    id?: true
    email?: true
    emailListId?: true
    name?: true
    createdAt?: true
  }

  export type EmailContactMaxAggregateInputType = {
    id?: true
    email?: true
    emailListId?: true
    name?: true
    createdAt?: true
  }

  export type EmailContactCountAggregateInputType = {
    id?: true
    email?: true
    emailListId?: true
    name?: true
    meta?: true
    createdAt?: true
    _all?: true
  }

  export type EmailContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailContact to aggregate.
     */
    where?: EmailContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailContacts to fetch.
     */
    orderBy?: EmailContactOrderByWithRelationInput | EmailContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailContacts
    **/
    _count?: true | EmailContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailContactMaxAggregateInputType
  }

  export type GetEmailContactAggregateType<T extends EmailContactAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailContact[P]>
      : GetScalarType<T[P], AggregateEmailContact[P]>
  }




  export type EmailContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailContactWhereInput
    orderBy?: EmailContactOrderByWithAggregationInput | EmailContactOrderByWithAggregationInput[]
    by: EmailContactScalarFieldEnum[] | EmailContactScalarFieldEnum
    having?: EmailContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailContactCountAggregateInputType | true
    _min?: EmailContactMinAggregateInputType
    _max?: EmailContactMaxAggregateInputType
  }

  export type EmailContactGroupByOutputType = {
    id: string
    email: string
    emailListId: string
    name: string | null
    meta: JsonValue | null
    createdAt: Date
    _count: EmailContactCountAggregateOutputType | null
    _min: EmailContactMinAggregateOutputType | null
    _max: EmailContactMaxAggregateOutputType | null
  }

  type GetEmailContactGroupByPayload<T extends EmailContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailContactGroupByOutputType[P]>
            : GetScalarType<T[P], EmailContactGroupByOutputType[P]>
        }
      >
    >


  export type EmailContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailListId?: boolean
    name?: boolean
    meta?: boolean
    createdAt?: boolean
    emailList?: boolean | EmailListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailContact"]>

  export type EmailContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailListId?: boolean
    name?: boolean
    meta?: boolean
    createdAt?: boolean
    emailList?: boolean | EmailListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailContact"]>

  export type EmailContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailListId?: boolean
    name?: boolean
    meta?: boolean
    createdAt?: boolean
    emailList?: boolean | EmailListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailContact"]>

  export type EmailContactSelectScalar = {
    id?: boolean
    email?: boolean
    emailListId?: boolean
    name?: boolean
    meta?: boolean
    createdAt?: boolean
  }

  export type EmailContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailListId" | "name" | "meta" | "createdAt", ExtArgs["result"]["emailContact"]>
  export type EmailContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailList?: boolean | EmailListDefaultArgs<ExtArgs>
  }
  export type EmailContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailList?: boolean | EmailListDefaultArgs<ExtArgs>
  }
  export type EmailContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailList?: boolean | EmailListDefaultArgs<ExtArgs>
  }

  export type $EmailContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailContact"
    objects: {
      emailList: Prisma.$EmailListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailListId: string
      name: string | null
      meta: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["emailContact"]>
    composites: {}
  }

  type EmailContactGetPayload<S extends boolean | null | undefined | EmailContactDefaultArgs> = $Result.GetResult<Prisma.$EmailContactPayload, S>

  type EmailContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailContactCountAggregateInputType | true
    }

  export interface EmailContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailContact'], meta: { name: 'EmailContact' } }
    /**
     * Find zero or one EmailContact that matches the filter.
     * @param {EmailContactFindUniqueArgs} args - Arguments to find a EmailContact
     * @example
     * // Get one EmailContact
     * const emailContact = await prisma.emailContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailContactFindUniqueArgs>(args: SelectSubset<T, EmailContactFindUniqueArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailContactFindUniqueOrThrowArgs} args - Arguments to find a EmailContact
     * @example
     * // Get one EmailContact
     * const emailContact = await prisma.emailContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailContactFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactFindFirstArgs} args - Arguments to find a EmailContact
     * @example
     * // Get one EmailContact
     * const emailContact = await prisma.emailContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailContactFindFirstArgs>(args?: SelectSubset<T, EmailContactFindFirstArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactFindFirstOrThrowArgs} args - Arguments to find a EmailContact
     * @example
     * // Get one EmailContact
     * const emailContact = await prisma.emailContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailContactFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailContacts
     * const emailContacts = await prisma.emailContact.findMany()
     * 
     * // Get first 10 EmailContacts
     * const emailContacts = await prisma.emailContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailContactWithIdOnly = await prisma.emailContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailContactFindManyArgs>(args?: SelectSubset<T, EmailContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailContact.
     * @param {EmailContactCreateArgs} args - Arguments to create a EmailContact.
     * @example
     * // Create one EmailContact
     * const EmailContact = await prisma.emailContact.create({
     *   data: {
     *     // ... data to create a EmailContact
     *   }
     * })
     * 
     */
    create<T extends EmailContactCreateArgs>(args: SelectSubset<T, EmailContactCreateArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailContacts.
     * @param {EmailContactCreateManyArgs} args - Arguments to create many EmailContacts.
     * @example
     * // Create many EmailContacts
     * const emailContact = await prisma.emailContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailContactCreateManyArgs>(args?: SelectSubset<T, EmailContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailContacts and returns the data saved in the database.
     * @param {EmailContactCreateManyAndReturnArgs} args - Arguments to create many EmailContacts.
     * @example
     * // Create many EmailContacts
     * const emailContact = await prisma.emailContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailContacts and only return the `id`
     * const emailContactWithIdOnly = await prisma.emailContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailContactCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailContact.
     * @param {EmailContactDeleteArgs} args - Arguments to delete one EmailContact.
     * @example
     * // Delete one EmailContact
     * const EmailContact = await prisma.emailContact.delete({
     *   where: {
     *     // ... filter to delete one EmailContact
     *   }
     * })
     * 
     */
    delete<T extends EmailContactDeleteArgs>(args: SelectSubset<T, EmailContactDeleteArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailContact.
     * @param {EmailContactUpdateArgs} args - Arguments to update one EmailContact.
     * @example
     * // Update one EmailContact
     * const emailContact = await prisma.emailContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailContactUpdateArgs>(args: SelectSubset<T, EmailContactUpdateArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailContacts.
     * @param {EmailContactDeleteManyArgs} args - Arguments to filter EmailContacts to delete.
     * @example
     * // Delete a few EmailContacts
     * const { count } = await prisma.emailContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailContactDeleteManyArgs>(args?: SelectSubset<T, EmailContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailContacts
     * const emailContact = await prisma.emailContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailContactUpdateManyArgs>(args: SelectSubset<T, EmailContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailContacts and returns the data updated in the database.
     * @param {EmailContactUpdateManyAndReturnArgs} args - Arguments to update many EmailContacts.
     * @example
     * // Update many EmailContacts
     * const emailContact = await prisma.emailContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailContacts and only return the `id`
     * const emailContactWithIdOnly = await prisma.emailContact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailContactUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailContact.
     * @param {EmailContactUpsertArgs} args - Arguments to update or create a EmailContact.
     * @example
     * // Update or create a EmailContact
     * const emailContact = await prisma.emailContact.upsert({
     *   create: {
     *     // ... data to create a EmailContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailContact we want to update
     *   }
     * })
     */
    upsert<T extends EmailContactUpsertArgs>(args: SelectSubset<T, EmailContactUpsertArgs<ExtArgs>>): Prisma__EmailContactClient<$Result.GetResult<Prisma.$EmailContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactCountArgs} args - Arguments to filter EmailContacts to count.
     * @example
     * // Count the number of EmailContacts
     * const count = await prisma.emailContact.count({
     *   where: {
     *     // ... the filter for the EmailContacts we want to count
     *   }
     * })
    **/
    count<T extends EmailContactCountArgs>(
      args?: Subset<T, EmailContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailContactAggregateArgs>(args: Subset<T, EmailContactAggregateArgs>): Prisma.PrismaPromise<GetEmailContactAggregateType<T>>

    /**
     * Group by EmailContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailContactGroupByArgs} args - Group by arguments.
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
      T extends EmailContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailContactGroupByArgs['orderBy'] }
        : { orderBy?: EmailContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailContact model
   */
  readonly fields: EmailContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emailList<T extends EmailListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailListDefaultArgs<ExtArgs>>): Prisma__EmailListClient<$Result.GetResult<Prisma.$EmailListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailContact model
   */
  interface EmailContactFieldRefs {
    readonly id: FieldRef<"EmailContact", 'String'>
    readonly email: FieldRef<"EmailContact", 'String'>
    readonly emailListId: FieldRef<"EmailContact", 'String'>
    readonly name: FieldRef<"EmailContact", 'String'>
    readonly meta: FieldRef<"EmailContact", 'Json'>
    readonly createdAt: FieldRef<"EmailContact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailContact findUnique
   */
  export type EmailContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    /**
     * Filter, which EmailContact to fetch.
     */
    where: EmailContactWhereUniqueInput
  }

  /**
   * EmailContact findUniqueOrThrow
   */
  export type EmailContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    /**
     * Filter, which EmailContact to fetch.
     */
    where: EmailContactWhereUniqueInput
  }

  /**
   * EmailContact findFirst
   */
  export type EmailContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    /**
     * Filter, which EmailContact to fetch.
     */
    where?: EmailContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailContacts to fetch.
     */
    orderBy?: EmailContactOrderByWithRelationInput | EmailContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailContacts.
     */
    cursor?: EmailContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailContacts.
     */
    distinct?: EmailContactScalarFieldEnum | EmailContactScalarFieldEnum[]
  }

  /**
   * EmailContact findFirstOrThrow
   */
  export type EmailContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    /**
     * Filter, which EmailContact to fetch.
     */
    where?: EmailContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailContacts to fetch.
     */
    orderBy?: EmailContactOrderByWithRelationInput | EmailContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailContacts.
     */
    cursor?: EmailContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailContacts.
     */
    distinct?: EmailContactScalarFieldEnum | EmailContactScalarFieldEnum[]
  }

  /**
   * EmailContact findMany
   */
  export type EmailContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    /**
     * Filter, which EmailContacts to fetch.
     */
    where?: EmailContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailContacts to fetch.
     */
    orderBy?: EmailContactOrderByWithRelationInput | EmailContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailContacts.
     */
    cursor?: EmailContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailContacts.
     */
    skip?: number
    distinct?: EmailContactScalarFieldEnum | EmailContactScalarFieldEnum[]
  }

  /**
   * EmailContact create
   */
  export type EmailContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailContact.
     */
    data: XOR<EmailContactCreateInput, EmailContactUncheckedCreateInput>
  }

  /**
   * EmailContact createMany
   */
  export type EmailContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailContacts.
     */
    data: EmailContactCreateManyInput | EmailContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailContact createManyAndReturn
   */
  export type EmailContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * The data used to create many EmailContacts.
     */
    data: EmailContactCreateManyInput | EmailContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailContact update
   */
  export type EmailContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailContact.
     */
    data: XOR<EmailContactUpdateInput, EmailContactUncheckedUpdateInput>
    /**
     * Choose, which EmailContact to update.
     */
    where: EmailContactWhereUniqueInput
  }

  /**
   * EmailContact updateMany
   */
  export type EmailContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailContacts.
     */
    data: XOR<EmailContactUpdateManyMutationInput, EmailContactUncheckedUpdateManyInput>
    /**
     * Filter which EmailContacts to update
     */
    where?: EmailContactWhereInput
    /**
     * Limit how many EmailContacts to update.
     */
    limit?: number
  }

  /**
   * EmailContact updateManyAndReturn
   */
  export type EmailContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * The data used to update EmailContacts.
     */
    data: XOR<EmailContactUpdateManyMutationInput, EmailContactUncheckedUpdateManyInput>
    /**
     * Filter which EmailContacts to update
     */
    where?: EmailContactWhereInput
    /**
     * Limit how many EmailContacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailContact upsert
   */
  export type EmailContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailContact to update in case it exists.
     */
    where: EmailContactWhereUniqueInput
    /**
     * In case the EmailContact found by the `where` argument doesn't exist, create a new EmailContact with this data.
     */
    create: XOR<EmailContactCreateInput, EmailContactUncheckedCreateInput>
    /**
     * In case the EmailContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailContactUpdateInput, EmailContactUncheckedUpdateInput>
  }

  /**
   * EmailContact delete
   */
  export type EmailContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
    /**
     * Filter which EmailContact to delete.
     */
    where: EmailContactWhereUniqueInput
  }

  /**
   * EmailContact deleteMany
   */
  export type EmailContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailContacts to delete
     */
    where?: EmailContactWhereInput
    /**
     * Limit how many EmailContacts to delete.
     */
    limit?: number
  }

  /**
   * EmailContact without action
   */
  export type EmailContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailContact
     */
    select?: EmailContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailContact
     */
    omit?: EmailContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailContactInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    first_name: 'first_name',
    last_name: 'last_name',
    avatar_url: 'avatar_url',
    clerkId: 'clerkId',
    meta: 'meta',
    onBoardingCompleted: 'onBoardingCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    industry: 'industry',
    createdAt: 'createdAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const WorkspaceUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workspaceId: 'workspaceId',
    role: 'role'
  };

  export type WorkspaceUserScalarFieldEnum = (typeof WorkspaceUserScalarFieldEnum)[keyof typeof WorkspaceUserScalarFieldEnum]


  export const EmailListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    workspaceId: 'workspaceId',
    uploadedById: 'uploadedById',
    createdAt: 'createdAt'
  };

  export type EmailListScalarFieldEnum = (typeof EmailListScalarFieldEnum)[keyof typeof EmailListScalarFieldEnum]


  export const EmailContactScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailListId: 'emailListId',
    name: 'name',
    meta: 'meta',
    createdAt: 'createdAt'
  };

  export type EmailContactScalarFieldEnum = (typeof EmailContactScalarFieldEnum)[keyof typeof EmailContactScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    clerkId?: StringNullableFilter<"User"> | string | null
    meta?: JsonNullableFilter<"User">
    onBoardingCompleted?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: WorkspaceUserListRelationFilter
    EmailList?: EmailListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    clerkId?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    onBoardingCompleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaces?: WorkspaceUserOrderByRelationAggregateInput
    EmailList?: EmailListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    meta?: JsonNullableFilter<"User">
    onBoardingCompleted?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: WorkspaceUserListRelationFilter
    EmailList?: EmailListListRelationFilter
  }, "id" | "email" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    clerkId?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    onBoardingCompleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    clerkId?: StringNullableWithAggregatesFilter<"User"> | string | null
    meta?: JsonNullableWithAggregatesFilter<"User">
    onBoardingCompleted?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    logo?: StringNullableFilter<"Workspace"> | string | null
    industry?: StringNullableFilter<"Workspace"> | string | null
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: WorkspaceUserListRelationFilter
    EmailList?: EmailListListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: WorkspaceUserOrderByRelationAggregateInput
    EmailList?: EmailListOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    logo?: StringNullableFilter<"Workspace"> | string | null
    industry?: StringNullableFilter<"Workspace"> | string | null
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: WorkspaceUserListRelationFilter
    EmailList?: EmailListListRelationFilter
  }, "id">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    logo?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
  }

  export type WorkspaceUserWhereInput = {
    AND?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    OR?: WorkspaceUserWhereInput[]
    NOT?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    id?: StringFilter<"WorkspaceUser"> | string
    userId?: StringFilter<"WorkspaceUser"> | string
    workspaceId?: StringFilter<"WorkspaceUser"> | string
    role?: StringFilter<"WorkspaceUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type WorkspaceUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type WorkspaceUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    OR?: WorkspaceUserWhereInput[]
    NOT?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    userId?: StringFilter<"WorkspaceUser"> | string
    workspaceId?: StringFilter<"WorkspaceUser"> | string
    role?: StringFilter<"WorkspaceUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type WorkspaceUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    _count?: WorkspaceUserCountOrderByAggregateInput
    _max?: WorkspaceUserMaxOrderByAggregateInput
    _min?: WorkspaceUserMinOrderByAggregateInput
  }

  export type WorkspaceUserScalarWhereWithAggregatesInput = {
    AND?: WorkspaceUserScalarWhereWithAggregatesInput | WorkspaceUserScalarWhereWithAggregatesInput[]
    OR?: WorkspaceUserScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceUserScalarWhereWithAggregatesInput | WorkspaceUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkspaceUser"> | string
    userId?: StringWithAggregatesFilter<"WorkspaceUser"> | string
    workspaceId?: StringWithAggregatesFilter<"WorkspaceUser"> | string
    role?: StringWithAggregatesFilter<"WorkspaceUser"> | string
  }

  export type EmailListWhereInput = {
    AND?: EmailListWhereInput | EmailListWhereInput[]
    OR?: EmailListWhereInput[]
    NOT?: EmailListWhereInput | EmailListWhereInput[]
    id?: StringFilter<"EmailList"> | string
    name?: StringFilter<"EmailList"> | string
    workspaceId?: StringFilter<"EmailList"> | string
    uploadedById?: StringFilter<"EmailList"> | string
    createdAt?: DateTimeFilter<"EmailList"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    emails?: EmailContactListRelationFilter
  }

  export type EmailListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
    emails?: EmailContactOrderByRelationAggregateInput
  }

  export type EmailListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailListWhereInput | EmailListWhereInput[]
    OR?: EmailListWhereInput[]
    NOT?: EmailListWhereInput | EmailListWhereInput[]
    name?: StringFilter<"EmailList"> | string
    workspaceId?: StringFilter<"EmailList"> | string
    uploadedById?: StringFilter<"EmailList"> | string
    createdAt?: DateTimeFilter<"EmailList"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    emails?: EmailContactListRelationFilter
  }, "id">

  export type EmailListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    _count?: EmailListCountOrderByAggregateInput
    _max?: EmailListMaxOrderByAggregateInput
    _min?: EmailListMinOrderByAggregateInput
  }

  export type EmailListScalarWhereWithAggregatesInput = {
    AND?: EmailListScalarWhereWithAggregatesInput | EmailListScalarWhereWithAggregatesInput[]
    OR?: EmailListScalarWhereWithAggregatesInput[]
    NOT?: EmailListScalarWhereWithAggregatesInput | EmailListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailList"> | string
    name?: StringWithAggregatesFilter<"EmailList"> | string
    workspaceId?: StringWithAggregatesFilter<"EmailList"> | string
    uploadedById?: StringWithAggregatesFilter<"EmailList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailList"> | Date | string
  }

  export type EmailContactWhereInput = {
    AND?: EmailContactWhereInput | EmailContactWhereInput[]
    OR?: EmailContactWhereInput[]
    NOT?: EmailContactWhereInput | EmailContactWhereInput[]
    id?: StringFilter<"EmailContact"> | string
    email?: StringFilter<"EmailContact"> | string
    emailListId?: StringFilter<"EmailContact"> | string
    name?: StringNullableFilter<"EmailContact"> | string | null
    meta?: JsonNullableFilter<"EmailContact">
    createdAt?: DateTimeFilter<"EmailContact"> | Date | string
    emailList?: XOR<EmailListScalarRelationFilter, EmailListWhereInput>
  }

  export type EmailContactOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailListId?: SortOrder
    name?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    emailList?: EmailListOrderByWithRelationInput
  }

  export type EmailContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailContactWhereInput | EmailContactWhereInput[]
    OR?: EmailContactWhereInput[]
    NOT?: EmailContactWhereInput | EmailContactWhereInput[]
    email?: StringFilter<"EmailContact"> | string
    emailListId?: StringFilter<"EmailContact"> | string
    name?: StringNullableFilter<"EmailContact"> | string | null
    meta?: JsonNullableFilter<"EmailContact">
    createdAt?: DateTimeFilter<"EmailContact"> | Date | string
    emailList?: XOR<EmailListScalarRelationFilter, EmailListWhereInput>
  }, "id">

  export type EmailContactOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailListId?: SortOrder
    name?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmailContactCountOrderByAggregateInput
    _max?: EmailContactMaxOrderByAggregateInput
    _min?: EmailContactMinOrderByAggregateInput
  }

  export type EmailContactScalarWhereWithAggregatesInput = {
    AND?: EmailContactScalarWhereWithAggregatesInput | EmailContactScalarWhereWithAggregatesInput[]
    OR?: EmailContactScalarWhereWithAggregatesInput[]
    NOT?: EmailContactScalarWhereWithAggregatesInput | EmailContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailContact"> | string
    email?: StringWithAggregatesFilter<"EmailContact"> | string
    emailListId?: StringWithAggregatesFilter<"EmailContact"> | string
    name?: StringNullableWithAggregatesFilter<"EmailContact"> | string | null
    meta?: JsonNullableWithAggregatesFilter<"EmailContact">
    createdAt?: DateTimeWithAggregatesFilter<"EmailContact"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar_url?: string | null
    clerkId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: WorkspaceUserCreateNestedManyWithoutUserInput
    EmailList?: EmailListCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar_url?: string | null
    clerkId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: WorkspaceUserUncheckedCreateNestedManyWithoutUserInput
    EmailList?: EmailListUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: WorkspaceUserUpdateManyWithoutUserNestedInput
    EmailList?: EmailListUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput
    EmailList?: EmailListUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar_url?: string | null
    clerkId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    logo?: string | null
    industry?: string | null
    createdAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    EmailList?: EmailListCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    logo?: string | null
    industry?: string | null
    createdAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    EmailList?: EmailListUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    EmailList?: EmailListUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    EmailList?: EmailListUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    logo?: string | null
    industry?: string | null
    createdAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUserCreateInput = {
    id?: string
    role: string
    user: UserCreateNestedOneWithoutWorkspacesInput
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
  }

  export type WorkspaceUserUncheckedCreateInput = {
    id?: string
    userId: string
    workspaceId: string
    role: string
  }

  export type WorkspaceUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
  }

  export type WorkspaceUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceUserCreateManyInput = {
    id?: string
    userId: string
    workspaceId: string
    role: string
  }

  export type WorkspaceUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type EmailListCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutEmailListInput
    uploadedBy: UserCreateNestedOneWithoutEmailListInput
    emails?: EmailContactCreateNestedManyWithoutEmailListInput
  }

  export type EmailListUncheckedCreateInput = {
    id?: string
    name: string
    workspaceId: string
    uploadedById: string
    createdAt?: Date | string
    emails?: EmailContactUncheckedCreateNestedManyWithoutEmailListInput
  }

  export type EmailListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutEmailListNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutEmailListNestedInput
    emails?: EmailContactUpdateManyWithoutEmailListNestedInput
  }

  export type EmailListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailContactUncheckedUpdateManyWithoutEmailListNestedInput
  }

  export type EmailListCreateManyInput = {
    id?: string
    name: string
    workspaceId: string
    uploadedById: string
    createdAt?: Date | string
  }

  export type EmailListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailContactCreateInput = {
    id?: string
    email: string
    name?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    emailList: EmailListCreateNestedOneWithoutEmailsInput
  }

  export type EmailContactUncheckedCreateInput = {
    id?: string
    email: string
    emailListId: string
    name?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailList?: EmailListUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type EmailContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailListId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailContactCreateManyInput = {
    id?: string
    email: string
    emailListId: string
    name?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailListId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkspaceUserListRelationFilter = {
    every?: WorkspaceUserWhereInput
    some?: WorkspaceUserWhereInput
    none?: WorkspaceUserWhereInput
  }

  export type EmailListListRelationFilter = {
    every?: EmailListWhereInput
    some?: EmailListWhereInput
    none?: EmailListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkspaceUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
    clerkId?: SortOrder
    meta?: SortOrder
    onBoardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
    clerkId?: SortOrder
    onBoardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
    clerkId?: SortOrder
    onBoardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type WorkspaceUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
  }

  export type WorkspaceUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
  }

  export type WorkspaceUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
  }

  export type EmailContactListRelationFilter = {
    every?: EmailContactWhereInput
    some?: EmailContactWhereInput
    none?: EmailContactWhereInput
  }

  export type EmailContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailListScalarRelationFilter = {
    is?: EmailListWhereInput
    isNot?: EmailListWhereInput
  }

  export type EmailContactCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailListId?: SortOrder
    name?: SortOrder
    meta?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailContactMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailListId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailContactMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailListId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceUserCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type EmailListCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<EmailListCreateWithoutUploadedByInput, EmailListUncheckedCreateWithoutUploadedByInput> | EmailListCreateWithoutUploadedByInput[] | EmailListUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: EmailListCreateOrConnectWithoutUploadedByInput | EmailListCreateOrConnectWithoutUploadedByInput[]
    createMany?: EmailListCreateManyUploadedByInputEnvelope
    connect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
  }

  export type WorkspaceUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type EmailListUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<EmailListCreateWithoutUploadedByInput, EmailListUncheckedCreateWithoutUploadedByInput> | EmailListCreateWithoutUploadedByInput[] | EmailListUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: EmailListCreateOrConnectWithoutUploadedByInput | EmailListCreateOrConnectWithoutUploadedByInput[]
    createMany?: EmailListCreateManyUploadedByInputEnvelope
    connect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkspaceUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutUserInput | WorkspaceUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutUserInput | WorkspaceUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutUserInput | WorkspaceUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type EmailListUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<EmailListCreateWithoutUploadedByInput, EmailListUncheckedCreateWithoutUploadedByInput> | EmailListCreateWithoutUploadedByInput[] | EmailListUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: EmailListCreateOrConnectWithoutUploadedByInput | EmailListCreateOrConnectWithoutUploadedByInput[]
    upsert?: EmailListUpsertWithWhereUniqueWithoutUploadedByInput | EmailListUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: EmailListCreateManyUploadedByInputEnvelope
    set?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    disconnect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    delete?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    connect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    update?: EmailListUpdateWithWhereUniqueWithoutUploadedByInput | EmailListUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: EmailListUpdateManyWithWhereWithoutUploadedByInput | EmailListUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: EmailListScalarWhereInput | EmailListScalarWhereInput[]
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutUserInput | WorkspaceUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutUserInput | WorkspaceUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutUserInput | WorkspaceUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type EmailListUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<EmailListCreateWithoutUploadedByInput, EmailListUncheckedCreateWithoutUploadedByInput> | EmailListCreateWithoutUploadedByInput[] | EmailListUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: EmailListCreateOrConnectWithoutUploadedByInput | EmailListCreateOrConnectWithoutUploadedByInput[]
    upsert?: EmailListUpsertWithWhereUniqueWithoutUploadedByInput | EmailListUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: EmailListCreateManyUploadedByInputEnvelope
    set?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    disconnect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    delete?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    connect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    update?: EmailListUpdateWithWhereUniqueWithoutUploadedByInput | EmailListUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: EmailListUpdateManyWithWhereWithoutUploadedByInput | EmailListUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: EmailListScalarWhereInput | EmailListScalarWhereInput[]
  }

  export type WorkspaceUserCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type EmailListCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<EmailListCreateWithoutWorkspaceInput, EmailListUncheckedCreateWithoutWorkspaceInput> | EmailListCreateWithoutWorkspaceInput[] | EmailListUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EmailListCreateOrConnectWithoutWorkspaceInput | EmailListCreateOrConnectWithoutWorkspaceInput[]
    createMany?: EmailListCreateManyWorkspaceInputEnvelope
    connect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
  }

  export type WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type EmailListUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<EmailListCreateWithoutWorkspaceInput, EmailListUncheckedCreateWithoutWorkspaceInput> | EmailListCreateWithoutWorkspaceInput[] | EmailListUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EmailListCreateOrConnectWithoutWorkspaceInput | EmailListCreateOrConnectWithoutWorkspaceInput[]
    createMany?: EmailListCreateManyWorkspaceInputEnvelope
    connect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
  }

  export type WorkspaceUserUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type EmailListUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<EmailListCreateWithoutWorkspaceInput, EmailListUncheckedCreateWithoutWorkspaceInput> | EmailListCreateWithoutWorkspaceInput[] | EmailListUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EmailListCreateOrConnectWithoutWorkspaceInput | EmailListCreateOrConnectWithoutWorkspaceInput[]
    upsert?: EmailListUpsertWithWhereUniqueWithoutWorkspaceInput | EmailListUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: EmailListCreateManyWorkspaceInputEnvelope
    set?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    disconnect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    delete?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    connect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    update?: EmailListUpdateWithWhereUniqueWithoutWorkspaceInput | EmailListUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: EmailListUpdateManyWithWhereWithoutWorkspaceInput | EmailListUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: EmailListScalarWhereInput | EmailListScalarWhereInput[]
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type EmailListUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<EmailListCreateWithoutWorkspaceInput, EmailListUncheckedCreateWithoutWorkspaceInput> | EmailListCreateWithoutWorkspaceInput[] | EmailListUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EmailListCreateOrConnectWithoutWorkspaceInput | EmailListCreateOrConnectWithoutWorkspaceInput[]
    upsert?: EmailListUpsertWithWhereUniqueWithoutWorkspaceInput | EmailListUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: EmailListCreateManyWorkspaceInputEnvelope
    set?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    disconnect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    delete?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    connect?: EmailListWhereUniqueInput | EmailListWhereUniqueInput[]
    update?: EmailListUpdateWithWhereUniqueWithoutWorkspaceInput | EmailListUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: EmailListUpdateManyWithWhereWithoutWorkspaceInput | EmailListUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: EmailListScalarWhereInput | EmailListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutUsersInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspacesInput, UserUpdateWithoutWorkspacesInput>, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    upsert?: WorkspaceUpsertWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutUsersInput, WorkspaceUpdateWithoutUsersInput>, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceCreateNestedOneWithoutEmailListInput = {
    create?: XOR<WorkspaceCreateWithoutEmailListInput, WorkspaceUncheckedCreateWithoutEmailListInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEmailListInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEmailListInput = {
    create?: XOR<UserCreateWithoutEmailListInput, UserUncheckedCreateWithoutEmailListInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailListInput
    connect?: UserWhereUniqueInput
  }

  export type EmailContactCreateNestedManyWithoutEmailListInput = {
    create?: XOR<EmailContactCreateWithoutEmailListInput, EmailContactUncheckedCreateWithoutEmailListInput> | EmailContactCreateWithoutEmailListInput[] | EmailContactUncheckedCreateWithoutEmailListInput[]
    connectOrCreate?: EmailContactCreateOrConnectWithoutEmailListInput | EmailContactCreateOrConnectWithoutEmailListInput[]
    createMany?: EmailContactCreateManyEmailListInputEnvelope
    connect?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
  }

  export type EmailContactUncheckedCreateNestedManyWithoutEmailListInput = {
    create?: XOR<EmailContactCreateWithoutEmailListInput, EmailContactUncheckedCreateWithoutEmailListInput> | EmailContactCreateWithoutEmailListInput[] | EmailContactUncheckedCreateWithoutEmailListInput[]
    connectOrCreate?: EmailContactCreateOrConnectWithoutEmailListInput | EmailContactCreateOrConnectWithoutEmailListInput[]
    createMany?: EmailContactCreateManyEmailListInputEnvelope
    connect?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutEmailListNestedInput = {
    create?: XOR<WorkspaceCreateWithoutEmailListInput, WorkspaceUncheckedCreateWithoutEmailListInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEmailListInput
    upsert?: WorkspaceUpsertWithoutEmailListInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutEmailListInput, WorkspaceUpdateWithoutEmailListInput>, WorkspaceUncheckedUpdateWithoutEmailListInput>
  }

  export type UserUpdateOneRequiredWithoutEmailListNestedInput = {
    create?: XOR<UserCreateWithoutEmailListInput, UserUncheckedCreateWithoutEmailListInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailListInput
    upsert?: UserUpsertWithoutEmailListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailListInput, UserUpdateWithoutEmailListInput>, UserUncheckedUpdateWithoutEmailListInput>
  }

  export type EmailContactUpdateManyWithoutEmailListNestedInput = {
    create?: XOR<EmailContactCreateWithoutEmailListInput, EmailContactUncheckedCreateWithoutEmailListInput> | EmailContactCreateWithoutEmailListInput[] | EmailContactUncheckedCreateWithoutEmailListInput[]
    connectOrCreate?: EmailContactCreateOrConnectWithoutEmailListInput | EmailContactCreateOrConnectWithoutEmailListInput[]
    upsert?: EmailContactUpsertWithWhereUniqueWithoutEmailListInput | EmailContactUpsertWithWhereUniqueWithoutEmailListInput[]
    createMany?: EmailContactCreateManyEmailListInputEnvelope
    set?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
    disconnect?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
    delete?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
    connect?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
    update?: EmailContactUpdateWithWhereUniqueWithoutEmailListInput | EmailContactUpdateWithWhereUniqueWithoutEmailListInput[]
    updateMany?: EmailContactUpdateManyWithWhereWithoutEmailListInput | EmailContactUpdateManyWithWhereWithoutEmailListInput[]
    deleteMany?: EmailContactScalarWhereInput | EmailContactScalarWhereInput[]
  }

  export type EmailContactUncheckedUpdateManyWithoutEmailListNestedInput = {
    create?: XOR<EmailContactCreateWithoutEmailListInput, EmailContactUncheckedCreateWithoutEmailListInput> | EmailContactCreateWithoutEmailListInput[] | EmailContactUncheckedCreateWithoutEmailListInput[]
    connectOrCreate?: EmailContactCreateOrConnectWithoutEmailListInput | EmailContactCreateOrConnectWithoutEmailListInput[]
    upsert?: EmailContactUpsertWithWhereUniqueWithoutEmailListInput | EmailContactUpsertWithWhereUniqueWithoutEmailListInput[]
    createMany?: EmailContactCreateManyEmailListInputEnvelope
    set?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
    disconnect?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
    delete?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
    connect?: EmailContactWhereUniqueInput | EmailContactWhereUniqueInput[]
    update?: EmailContactUpdateWithWhereUniqueWithoutEmailListInput | EmailContactUpdateWithWhereUniqueWithoutEmailListInput[]
    updateMany?: EmailContactUpdateManyWithWhereWithoutEmailListInput | EmailContactUpdateManyWithWhereWithoutEmailListInput[]
    deleteMany?: EmailContactScalarWhereInput | EmailContactScalarWhereInput[]
  }

  export type EmailListCreateNestedOneWithoutEmailsInput = {
    create?: XOR<EmailListCreateWithoutEmailsInput, EmailListUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: EmailListCreateOrConnectWithoutEmailsInput
    connect?: EmailListWhereUniqueInput
  }

  export type EmailListUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<EmailListCreateWithoutEmailsInput, EmailListUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: EmailListCreateOrConnectWithoutEmailsInput
    upsert?: EmailListUpsertWithoutEmailsInput
    connect?: EmailListWhereUniqueInput
    update?: XOR<XOR<EmailListUpdateToOneWithWhereWithoutEmailsInput, EmailListUpdateWithoutEmailsInput>, EmailListUncheckedUpdateWithoutEmailsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WorkspaceUserCreateWithoutUserInput = {
    id?: string
    role: string
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
  }

  export type WorkspaceUserUncheckedCreateWithoutUserInput = {
    id?: string
    workspaceId: string
    role: string
  }

  export type WorkspaceUserCreateOrConnectWithoutUserInput = {
    where: WorkspaceUserWhereUniqueInput
    create: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUserCreateManyUserInputEnvelope = {
    data: WorkspaceUserCreateManyUserInput | WorkspaceUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailListCreateWithoutUploadedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutEmailListInput
    emails?: EmailContactCreateNestedManyWithoutEmailListInput
  }

  export type EmailListUncheckedCreateWithoutUploadedByInput = {
    id?: string
    name: string
    workspaceId: string
    createdAt?: Date | string
    emails?: EmailContactUncheckedCreateNestedManyWithoutEmailListInput
  }

  export type EmailListCreateOrConnectWithoutUploadedByInput = {
    where: EmailListWhereUniqueInput
    create: XOR<EmailListCreateWithoutUploadedByInput, EmailListUncheckedCreateWithoutUploadedByInput>
  }

  export type EmailListCreateManyUploadedByInputEnvelope = {
    data: EmailListCreateManyUploadedByInput | EmailListCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUserUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkspaceUserWhereUniqueInput
    update: XOR<WorkspaceUserUpdateWithoutUserInput, WorkspaceUserUncheckedUpdateWithoutUserInput>
    create: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUserUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkspaceUserWhereUniqueInput
    data: XOR<WorkspaceUserUpdateWithoutUserInput, WorkspaceUserUncheckedUpdateWithoutUserInput>
  }

  export type WorkspaceUserUpdateManyWithWhereWithoutUserInput = {
    where: WorkspaceUserScalarWhereInput
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkspaceUserScalarWhereInput = {
    AND?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
    OR?: WorkspaceUserScalarWhereInput[]
    NOT?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
    id?: StringFilter<"WorkspaceUser"> | string
    userId?: StringFilter<"WorkspaceUser"> | string
    workspaceId?: StringFilter<"WorkspaceUser"> | string
    role?: StringFilter<"WorkspaceUser"> | string
  }

  export type EmailListUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: EmailListWhereUniqueInput
    update: XOR<EmailListUpdateWithoutUploadedByInput, EmailListUncheckedUpdateWithoutUploadedByInput>
    create: XOR<EmailListCreateWithoutUploadedByInput, EmailListUncheckedCreateWithoutUploadedByInput>
  }

  export type EmailListUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: EmailListWhereUniqueInput
    data: XOR<EmailListUpdateWithoutUploadedByInput, EmailListUncheckedUpdateWithoutUploadedByInput>
  }

  export type EmailListUpdateManyWithWhereWithoutUploadedByInput = {
    where: EmailListScalarWhereInput
    data: XOR<EmailListUpdateManyMutationInput, EmailListUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type EmailListScalarWhereInput = {
    AND?: EmailListScalarWhereInput | EmailListScalarWhereInput[]
    OR?: EmailListScalarWhereInput[]
    NOT?: EmailListScalarWhereInput | EmailListScalarWhereInput[]
    id?: StringFilter<"EmailList"> | string
    name?: StringFilter<"EmailList"> | string
    workspaceId?: StringFilter<"EmailList"> | string
    uploadedById?: StringFilter<"EmailList"> | string
    createdAt?: DateTimeFilter<"EmailList"> | Date | string
  }

  export type WorkspaceUserCreateWithoutWorkspaceInput = {
    id?: string
    role: string
    user: UserCreateNestedOneWithoutWorkspacesInput
  }

  export type WorkspaceUserUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    userId: string
    role: string
  }

  export type WorkspaceUserCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceUserWhereUniqueInput
    create: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceUserCreateManyWorkspaceInputEnvelope = {
    data: WorkspaceUserCreateManyWorkspaceInput | WorkspaceUserCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type EmailListCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutEmailListInput
    emails?: EmailContactCreateNestedManyWithoutEmailListInput
  }

  export type EmailListUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    uploadedById: string
    createdAt?: Date | string
    emails?: EmailContactUncheckedCreateNestedManyWithoutEmailListInput
  }

  export type EmailListCreateOrConnectWithoutWorkspaceInput = {
    where: EmailListWhereUniqueInput
    create: XOR<EmailListCreateWithoutWorkspaceInput, EmailListUncheckedCreateWithoutWorkspaceInput>
  }

  export type EmailListCreateManyWorkspaceInputEnvelope = {
    data: EmailListCreateManyWorkspaceInput | EmailListCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceUserWhereUniqueInput
    update: XOR<WorkspaceUserUpdateWithoutWorkspaceInput, WorkspaceUserUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceUserWhereUniqueInput
    data: XOR<WorkspaceUserUpdateWithoutWorkspaceInput, WorkspaceUserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WorkspaceUserScalarWhereInput
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type EmailListUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: EmailListWhereUniqueInput
    update: XOR<EmailListUpdateWithoutWorkspaceInput, EmailListUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<EmailListCreateWithoutWorkspaceInput, EmailListUncheckedCreateWithoutWorkspaceInput>
  }

  export type EmailListUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: EmailListWhereUniqueInput
    data: XOR<EmailListUpdateWithoutWorkspaceInput, EmailListUncheckedUpdateWithoutWorkspaceInput>
  }

  export type EmailListUpdateManyWithWhereWithoutWorkspaceInput = {
    where: EmailListScalarWhereInput
    data: XOR<EmailListUpdateManyMutationInput, EmailListUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type UserCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar_url?: string | null
    clerkId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    EmailList?: EmailListCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar_url?: string | null
    clerkId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    EmailList?: EmailListUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type WorkspaceCreateWithoutUsersInput = {
    id?: string
    name: string
    logo?: string | null
    industry?: string | null
    createdAt?: Date | string
    EmailList?: EmailListCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    logo?: string | null
    industry?: string | null
    createdAt?: Date | string
    EmailList?: EmailListUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUsersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailList?: EmailListUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailList?: EmailListUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type WorkspaceUpsertWithoutUsersInput = {
    update: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutUsersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailList?: EmailListUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailList?: EmailListUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutEmailListInput = {
    id?: string
    name: string
    logo?: string | null
    industry?: string | null
    createdAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutEmailListInput = {
    id?: string
    name: string
    logo?: string | null
    industry?: string | null
    createdAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutEmailListInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutEmailListInput, WorkspaceUncheckedCreateWithoutEmailListInput>
  }

  export type UserCreateWithoutEmailListInput = {
    id?: string
    email: string
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar_url?: string | null
    clerkId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: WorkspaceUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailListInput = {
    id?: string
    email: string
    name?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar_url?: string | null
    clerkId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: WorkspaceUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailListInput, UserUncheckedCreateWithoutEmailListInput>
  }

  export type EmailContactCreateWithoutEmailListInput = {
    id?: string
    email: string
    name?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailContactUncheckedCreateWithoutEmailListInput = {
    id?: string
    email: string
    name?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailContactCreateOrConnectWithoutEmailListInput = {
    where: EmailContactWhereUniqueInput
    create: XOR<EmailContactCreateWithoutEmailListInput, EmailContactUncheckedCreateWithoutEmailListInput>
  }

  export type EmailContactCreateManyEmailListInputEnvelope = {
    data: EmailContactCreateManyEmailListInput | EmailContactCreateManyEmailListInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutEmailListInput = {
    update: XOR<WorkspaceUpdateWithoutEmailListInput, WorkspaceUncheckedUpdateWithoutEmailListInput>
    create: XOR<WorkspaceCreateWithoutEmailListInput, WorkspaceUncheckedCreateWithoutEmailListInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutEmailListInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutEmailListInput, WorkspaceUncheckedUpdateWithoutEmailListInput>
  }

  export type WorkspaceUpdateWithoutEmailListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutEmailListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithoutEmailListInput = {
    update: XOR<UserUpdateWithoutEmailListInput, UserUncheckedUpdateWithoutEmailListInput>
    create: XOR<UserCreateWithoutEmailListInput, UserUncheckedCreateWithoutEmailListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailListInput, UserUncheckedUpdateWithoutEmailListInput>
  }

  export type UserUpdateWithoutEmailListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: WorkspaceUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    onBoardingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmailContactUpsertWithWhereUniqueWithoutEmailListInput = {
    where: EmailContactWhereUniqueInput
    update: XOR<EmailContactUpdateWithoutEmailListInput, EmailContactUncheckedUpdateWithoutEmailListInput>
    create: XOR<EmailContactCreateWithoutEmailListInput, EmailContactUncheckedCreateWithoutEmailListInput>
  }

  export type EmailContactUpdateWithWhereUniqueWithoutEmailListInput = {
    where: EmailContactWhereUniqueInput
    data: XOR<EmailContactUpdateWithoutEmailListInput, EmailContactUncheckedUpdateWithoutEmailListInput>
  }

  export type EmailContactUpdateManyWithWhereWithoutEmailListInput = {
    where: EmailContactScalarWhereInput
    data: XOR<EmailContactUpdateManyMutationInput, EmailContactUncheckedUpdateManyWithoutEmailListInput>
  }

  export type EmailContactScalarWhereInput = {
    AND?: EmailContactScalarWhereInput | EmailContactScalarWhereInput[]
    OR?: EmailContactScalarWhereInput[]
    NOT?: EmailContactScalarWhereInput | EmailContactScalarWhereInput[]
    id?: StringFilter<"EmailContact"> | string
    email?: StringFilter<"EmailContact"> | string
    emailListId?: StringFilter<"EmailContact"> | string
    name?: StringNullableFilter<"EmailContact"> | string | null
    meta?: JsonNullableFilter<"EmailContact">
    createdAt?: DateTimeFilter<"EmailContact"> | Date | string
  }

  export type EmailListCreateWithoutEmailsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutEmailListInput
    uploadedBy: UserCreateNestedOneWithoutEmailListInput
  }

  export type EmailListUncheckedCreateWithoutEmailsInput = {
    id?: string
    name: string
    workspaceId: string
    uploadedById: string
    createdAt?: Date | string
  }

  export type EmailListCreateOrConnectWithoutEmailsInput = {
    where: EmailListWhereUniqueInput
    create: XOR<EmailListCreateWithoutEmailsInput, EmailListUncheckedCreateWithoutEmailsInput>
  }

  export type EmailListUpsertWithoutEmailsInput = {
    update: XOR<EmailListUpdateWithoutEmailsInput, EmailListUncheckedUpdateWithoutEmailsInput>
    create: XOR<EmailListCreateWithoutEmailsInput, EmailListUncheckedCreateWithoutEmailsInput>
    where?: EmailListWhereInput
  }

  export type EmailListUpdateToOneWithWhereWithoutEmailsInput = {
    where?: EmailListWhereInput
    data: XOR<EmailListUpdateWithoutEmailsInput, EmailListUncheckedUpdateWithoutEmailsInput>
  }

  export type EmailListUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutEmailListNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutEmailListNestedInput
  }

  export type EmailListUncheckedUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUserCreateManyUserInput = {
    id?: string
    workspaceId: string
    role: string
  }

  export type EmailListCreateManyUploadedByInput = {
    id?: string
    name: string
    workspaceId: string
    createdAt?: Date | string
  }

  export type WorkspaceUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
  }

  export type WorkspaceUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type EmailListUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutEmailListNestedInput
    emails?: EmailContactUpdateManyWithoutEmailListNestedInput
  }

  export type EmailListUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailContactUncheckedUpdateManyWithoutEmailListNestedInput
  }

  export type EmailListUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUserCreateManyWorkspaceInput = {
    id?: string
    userId: string
    role: string
  }

  export type EmailListCreateManyWorkspaceInput = {
    id?: string
    name: string
    uploadedById: string
    createdAt?: Date | string
  }

  export type WorkspaceUserUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type WorkspaceUserUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type EmailListUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutEmailListNestedInput
    emails?: EmailContactUpdateManyWithoutEmailListNestedInput
  }

  export type EmailListUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailContactUncheckedUpdateManyWithoutEmailListNestedInput
  }

  export type EmailListUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailContactCreateManyEmailListInput = {
    id?: string
    email: string
    name?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailContactUpdateWithoutEmailListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailContactUncheckedUpdateWithoutEmailListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailContactUncheckedUpdateManyWithoutEmailListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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