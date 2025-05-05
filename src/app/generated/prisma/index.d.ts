
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
 * Model BannerImage
 * 
 */
export type BannerImage = $Result.DefaultSelection<Prisma.$BannerImagePayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LocationType: {
  STATE: 'STATE',
  CITY: 'CITY',
  PLACE: 'PLACE'
};

export type LocationType = (typeof LocationType)[keyof typeof LocationType]

}

export type LocationType = $Enums.LocationType

export const LocationType: typeof $Enums.LocationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BannerImages
 * const bannerImages = await prisma.bannerImage.findMany()
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
   * // Fetch zero or more BannerImages
   * const bannerImages = await prisma.bannerImage.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bannerImage`: Exposes CRUD operations for the **BannerImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BannerImages
    * const bannerImages = await prisma.bannerImage.findMany()
    * ```
    */
  get bannerImage(): Prisma.BannerImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    BannerImage: 'BannerImage',
    Location: 'Location'
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
      modelProps: "bannerImage" | "location"
      txIsolationLevel: never
    }
    model: {
      BannerImage: {
        payload: Prisma.$BannerImagePayload<ExtArgs>
        fields: Prisma.BannerImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerImagePayload>
          }
          findFirst: {
            args: Prisma.BannerImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerImagePayload>
          }
          findMany: {
            args: Prisma.BannerImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerImagePayload>[]
          }
          create: {
            args: Prisma.BannerImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerImagePayload>
          }
          createMany: {
            args: Prisma.BannerImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BannerImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerImagePayload>
          }
          update: {
            args: Prisma.BannerImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerImagePayload>
          }
          deleteMany: {
            args: Prisma.BannerImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BannerImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerImagePayload>
          }
          aggregate: {
            args: Prisma.BannerImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBannerImage>
          }
          groupBy: {
            args: Prisma.BannerImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerImageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BannerImageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BannerImageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BannerImageCountArgs<ExtArgs>
            result: $Utils.Optional<BannerImageCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LocationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LocationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    bannerImage?: BannerImageOmit
    location?: LocationOmit
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
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    children: number
    BannerImages: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | LocationCountOutputTypeCountChildrenArgs
    BannerImages?: boolean | LocationCountOutputTypeCountBannerImagesArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountBannerImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BannerImage
   */

  export type AggregateBannerImage = {
    _count: BannerImageCountAggregateOutputType | null
    _min: BannerImageMinAggregateOutputType | null
    _max: BannerImageMaxAggregateOutputType | null
  }

  export type BannerImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    locationId: string | null
  }

  export type BannerImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    locationId: string | null
  }

  export type BannerImageCountAggregateOutputType = {
    id: number
    url: number
    locationId: number
    _all: number
  }


  export type BannerImageMinAggregateInputType = {
    id?: true
    url?: true
    locationId?: true
  }

  export type BannerImageMaxAggregateInputType = {
    id?: true
    url?: true
    locationId?: true
  }

  export type BannerImageCountAggregateInputType = {
    id?: true
    url?: true
    locationId?: true
    _all?: true
  }

  export type BannerImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BannerImage to aggregate.
     */
    where?: BannerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerImages to fetch.
     */
    orderBy?: BannerImageOrderByWithRelationInput | BannerImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BannerImages
    **/
    _count?: true | BannerImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerImageMaxAggregateInputType
  }

  export type GetBannerImageAggregateType<T extends BannerImageAggregateArgs> = {
        [P in keyof T & keyof AggregateBannerImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBannerImage[P]>
      : GetScalarType<T[P], AggregateBannerImage[P]>
  }




  export type BannerImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerImageWhereInput
    orderBy?: BannerImageOrderByWithAggregationInput | BannerImageOrderByWithAggregationInput[]
    by: BannerImageScalarFieldEnum[] | BannerImageScalarFieldEnum
    having?: BannerImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerImageCountAggregateInputType | true
    _min?: BannerImageMinAggregateInputType
    _max?: BannerImageMaxAggregateInputType
  }

  export type BannerImageGroupByOutputType = {
    id: string
    url: string
    locationId: string
    _count: BannerImageCountAggregateOutputType | null
    _min: BannerImageMinAggregateOutputType | null
    _max: BannerImageMaxAggregateOutputType | null
  }

  type GetBannerImageGroupByPayload<T extends BannerImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerImageGroupByOutputType[P]>
            : GetScalarType<T[P], BannerImageGroupByOutputType[P]>
        }
      >
    >


  export type BannerImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    locationId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bannerImage"]>



  export type BannerImageSelectScalar = {
    id?: boolean
    url?: boolean
    locationId?: boolean
  }

  export type BannerImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "locationId", ExtArgs["result"]["bannerImage"]>
  export type BannerImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $BannerImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BannerImage"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      locationId: string
    }, ExtArgs["result"]["bannerImage"]>
    composites: {}
  }

  type BannerImageGetPayload<S extends boolean | null | undefined | BannerImageDefaultArgs> = $Result.GetResult<Prisma.$BannerImagePayload, S>

  type BannerImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerImageCountAggregateInputType | true
    }

  export interface BannerImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BannerImage'], meta: { name: 'BannerImage' } }
    /**
     * Find zero or one BannerImage that matches the filter.
     * @param {BannerImageFindUniqueArgs} args - Arguments to find a BannerImage
     * @example
     * // Get one BannerImage
     * const bannerImage = await prisma.bannerImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerImageFindUniqueArgs>(args: SelectSubset<T, BannerImageFindUniqueArgs<ExtArgs>>): Prisma__BannerImageClient<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BannerImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerImageFindUniqueOrThrowArgs} args - Arguments to find a BannerImage
     * @example
     * // Get one BannerImage
     * const bannerImage = await prisma.bannerImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerImageFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerImageClient<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BannerImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerImageFindFirstArgs} args - Arguments to find a BannerImage
     * @example
     * // Get one BannerImage
     * const bannerImage = await prisma.bannerImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerImageFindFirstArgs>(args?: SelectSubset<T, BannerImageFindFirstArgs<ExtArgs>>): Prisma__BannerImageClient<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BannerImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerImageFindFirstOrThrowArgs} args - Arguments to find a BannerImage
     * @example
     * // Get one BannerImage
     * const bannerImage = await prisma.bannerImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerImageFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerImageClient<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BannerImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BannerImages
     * const bannerImages = await prisma.bannerImage.findMany()
     * 
     * // Get first 10 BannerImages
     * const bannerImages = await prisma.bannerImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerImageWithIdOnly = await prisma.bannerImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerImageFindManyArgs>(args?: SelectSubset<T, BannerImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BannerImage.
     * @param {BannerImageCreateArgs} args - Arguments to create a BannerImage.
     * @example
     * // Create one BannerImage
     * const BannerImage = await prisma.bannerImage.create({
     *   data: {
     *     // ... data to create a BannerImage
     *   }
     * })
     * 
     */
    create<T extends BannerImageCreateArgs>(args: SelectSubset<T, BannerImageCreateArgs<ExtArgs>>): Prisma__BannerImageClient<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BannerImages.
     * @param {BannerImageCreateManyArgs} args - Arguments to create many BannerImages.
     * @example
     * // Create many BannerImages
     * const bannerImage = await prisma.bannerImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerImageCreateManyArgs>(args?: SelectSubset<T, BannerImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BannerImage.
     * @param {BannerImageDeleteArgs} args - Arguments to delete one BannerImage.
     * @example
     * // Delete one BannerImage
     * const BannerImage = await prisma.bannerImage.delete({
     *   where: {
     *     // ... filter to delete one BannerImage
     *   }
     * })
     * 
     */
    delete<T extends BannerImageDeleteArgs>(args: SelectSubset<T, BannerImageDeleteArgs<ExtArgs>>): Prisma__BannerImageClient<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BannerImage.
     * @param {BannerImageUpdateArgs} args - Arguments to update one BannerImage.
     * @example
     * // Update one BannerImage
     * const bannerImage = await prisma.bannerImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerImageUpdateArgs>(args: SelectSubset<T, BannerImageUpdateArgs<ExtArgs>>): Prisma__BannerImageClient<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BannerImages.
     * @param {BannerImageDeleteManyArgs} args - Arguments to filter BannerImages to delete.
     * @example
     * // Delete a few BannerImages
     * const { count } = await prisma.bannerImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerImageDeleteManyArgs>(args?: SelectSubset<T, BannerImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BannerImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BannerImages
     * const bannerImage = await prisma.bannerImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerImageUpdateManyArgs>(args: SelectSubset<T, BannerImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BannerImage.
     * @param {BannerImageUpsertArgs} args - Arguments to update or create a BannerImage.
     * @example
     * // Update or create a BannerImage
     * const bannerImage = await prisma.bannerImage.upsert({
     *   create: {
     *     // ... data to create a BannerImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BannerImage we want to update
     *   }
     * })
     */
    upsert<T extends BannerImageUpsertArgs>(args: SelectSubset<T, BannerImageUpsertArgs<ExtArgs>>): Prisma__BannerImageClient<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BannerImages that matches the filter.
     * @param {BannerImageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const bannerImage = await prisma.bannerImage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BannerImageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BannerImage.
     * @param {BannerImageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const bannerImage = await prisma.bannerImage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BannerImageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of BannerImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerImageCountArgs} args - Arguments to filter BannerImages to count.
     * @example
     * // Count the number of BannerImages
     * const count = await prisma.bannerImage.count({
     *   where: {
     *     // ... the filter for the BannerImages we want to count
     *   }
     * })
    **/
    count<T extends BannerImageCountArgs>(
      args?: Subset<T, BannerImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BannerImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerImageAggregateArgs>(args: Subset<T, BannerImageAggregateArgs>): Prisma.PrismaPromise<GetBannerImageAggregateType<T>>

    /**
     * Group by BannerImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerImageGroupByArgs} args - Group by arguments.
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
      T extends BannerImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerImageGroupByArgs['orderBy'] }
        : { orderBy?: BannerImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BannerImage model
   */
  readonly fields: BannerImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BannerImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BannerImage model
   */
  interface BannerImageFieldRefs {
    readonly id: FieldRef<"BannerImage", 'String'>
    readonly url: FieldRef<"BannerImage", 'String'>
    readonly locationId: FieldRef<"BannerImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BannerImage findUnique
   */
  export type BannerImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    /**
     * Filter, which BannerImage to fetch.
     */
    where: BannerImageWhereUniqueInput
  }

  /**
   * BannerImage findUniqueOrThrow
   */
  export type BannerImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    /**
     * Filter, which BannerImage to fetch.
     */
    where: BannerImageWhereUniqueInput
  }

  /**
   * BannerImage findFirst
   */
  export type BannerImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    /**
     * Filter, which BannerImage to fetch.
     */
    where?: BannerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerImages to fetch.
     */
    orderBy?: BannerImageOrderByWithRelationInput | BannerImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BannerImages.
     */
    cursor?: BannerImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannerImages.
     */
    distinct?: BannerImageScalarFieldEnum | BannerImageScalarFieldEnum[]
  }

  /**
   * BannerImage findFirstOrThrow
   */
  export type BannerImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    /**
     * Filter, which BannerImage to fetch.
     */
    where?: BannerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerImages to fetch.
     */
    orderBy?: BannerImageOrderByWithRelationInput | BannerImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BannerImages.
     */
    cursor?: BannerImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannerImages.
     */
    distinct?: BannerImageScalarFieldEnum | BannerImageScalarFieldEnum[]
  }

  /**
   * BannerImage findMany
   */
  export type BannerImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    /**
     * Filter, which BannerImages to fetch.
     */
    where?: BannerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerImages to fetch.
     */
    orderBy?: BannerImageOrderByWithRelationInput | BannerImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BannerImages.
     */
    cursor?: BannerImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerImages.
     */
    skip?: number
    distinct?: BannerImageScalarFieldEnum | BannerImageScalarFieldEnum[]
  }

  /**
   * BannerImage create
   */
  export type BannerImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    /**
     * The data needed to create a BannerImage.
     */
    data: XOR<BannerImageCreateInput, BannerImageUncheckedCreateInput>
  }

  /**
   * BannerImage createMany
   */
  export type BannerImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BannerImages.
     */
    data: BannerImageCreateManyInput | BannerImageCreateManyInput[]
  }

  /**
   * BannerImage update
   */
  export type BannerImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    /**
     * The data needed to update a BannerImage.
     */
    data: XOR<BannerImageUpdateInput, BannerImageUncheckedUpdateInput>
    /**
     * Choose, which BannerImage to update.
     */
    where: BannerImageWhereUniqueInput
  }

  /**
   * BannerImage updateMany
   */
  export type BannerImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BannerImages.
     */
    data: XOR<BannerImageUpdateManyMutationInput, BannerImageUncheckedUpdateManyInput>
    /**
     * Filter which BannerImages to update
     */
    where?: BannerImageWhereInput
    /**
     * Limit how many BannerImages to update.
     */
    limit?: number
  }

  /**
   * BannerImage upsert
   */
  export type BannerImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    /**
     * The filter to search for the BannerImage to update in case it exists.
     */
    where: BannerImageWhereUniqueInput
    /**
     * In case the BannerImage found by the `where` argument doesn't exist, create a new BannerImage with this data.
     */
    create: XOR<BannerImageCreateInput, BannerImageUncheckedCreateInput>
    /**
     * In case the BannerImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerImageUpdateInput, BannerImageUncheckedUpdateInput>
  }

  /**
   * BannerImage delete
   */
  export type BannerImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    /**
     * Filter which BannerImage to delete.
     */
    where: BannerImageWhereUniqueInput
  }

  /**
   * BannerImage deleteMany
   */
  export type BannerImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BannerImages to delete
     */
    where?: BannerImageWhereInput
    /**
     * Limit how many BannerImages to delete.
     */
    limit?: number
  }

  /**
   * BannerImage findRaw
   */
  export type BannerImageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BannerImage aggregateRaw
   */
  export type BannerImageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BannerImage without action
   */
  export type BannerImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: $Enums.LocationType | null
    description: string | null
    parentId: string | null
    address: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: $Enums.LocationType | null
    description: string | null
    parentId: string | null
    address: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    type: number
    description: number
    parentId: number
    address: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    description?: true
    parentId?: true
    address?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    description?: true
    parentId?: true
    address?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    description?: true
    parentId?: true
    address?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    name: string
    slug: string
    type: $Enums.LocationType
    description: string | null
    parentId: string | null
    address: string
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    description?: boolean
    parentId?: boolean
    address?: boolean
    parent?: boolean | Location$parentArgs<ExtArgs>
    children?: boolean | Location$childrenArgs<ExtArgs>
    BannerImages?: boolean | Location$BannerImagesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>



  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    description?: boolean
    parentId?: boolean
    address?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "type" | "description" | "parentId" | "address", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Location$parentArgs<ExtArgs>
    children?: boolean | Location$childrenArgs<ExtArgs>
    BannerImages?: boolean | Location$BannerImagesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      parent: Prisma.$LocationPayload<ExtArgs> | null
      children: Prisma.$LocationPayload<ExtArgs>[]
      BannerImages: Prisma.$BannerImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      type: $Enums.LocationType
      description: string | null
      parentId: string | null
      address: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * @param {LocationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const location = await prisma.location.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LocationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Location.
     * @param {LocationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const location = await prisma.location.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LocationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Location$parentArgs<ExtArgs> = {}>(args?: Subset<T, Location$parentArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Location$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Location$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BannerImages<T extends Location$BannerImagesArgs<ExtArgs> = {}>(args?: Subset<T, Location$BannerImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly slug: FieldRef<"Location", 'String'>
    readonly type: FieldRef<"Location", 'LocationType'>
    readonly description: FieldRef<"Location", 'String'>
    readonly parentId: FieldRef<"Location", 'String'>
    readonly address: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location findRaw
   */
  export type LocationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Location aggregateRaw
   */
  export type LocationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Location.parent
   */
  export type Location$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Location.children
   */
  export type Location$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location.BannerImages
   */
  export type Location$BannerImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerImage
     */
    select?: BannerImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerImage
     */
    omit?: BannerImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerImageInclude<ExtArgs> | null
    where?: BannerImageWhereInput
    orderBy?: BannerImageOrderByWithRelationInput | BannerImageOrderByWithRelationInput[]
    cursor?: BannerImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BannerImageScalarFieldEnum | BannerImageScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const BannerImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    locationId: 'locationId'
  };

  export type BannerImageScalarFieldEnum = (typeof BannerImageScalarFieldEnum)[keyof typeof BannerImageScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    type: 'type',
    description: 'description',
    parentId: 'parentId',
    address: 'address'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'LocationType'
   */
  export type EnumLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationType'>
    


  /**
   * Reference to a field of type 'LocationType[]'
   */
  export type ListEnumLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationType[]'>
    


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


  export type BannerImageWhereInput = {
    AND?: BannerImageWhereInput | BannerImageWhereInput[]
    OR?: BannerImageWhereInput[]
    NOT?: BannerImageWhereInput | BannerImageWhereInput[]
    id?: StringFilter<"BannerImage"> | string
    url?: StringFilter<"BannerImage"> | string
    locationId?: StringFilter<"BannerImage"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type BannerImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    locationId?: SortOrder
    location?: LocationOrderByWithRelationInput
  }

  export type BannerImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerImageWhereInput | BannerImageWhereInput[]
    OR?: BannerImageWhereInput[]
    NOT?: BannerImageWhereInput | BannerImageWhereInput[]
    url?: StringFilter<"BannerImage"> | string
    locationId?: StringFilter<"BannerImage"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id">

  export type BannerImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    locationId?: SortOrder
    _count?: BannerImageCountOrderByAggregateInput
    _max?: BannerImageMaxOrderByAggregateInput
    _min?: BannerImageMinOrderByAggregateInput
  }

  export type BannerImageScalarWhereWithAggregatesInput = {
    AND?: BannerImageScalarWhereWithAggregatesInput | BannerImageScalarWhereWithAggregatesInput[]
    OR?: BannerImageScalarWhereWithAggregatesInput[]
    NOT?: BannerImageScalarWhereWithAggregatesInput | BannerImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BannerImage"> | string
    url?: StringWithAggregatesFilter<"BannerImage"> | string
    locationId?: StringWithAggregatesFilter<"BannerImage"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    slug?: StringFilter<"Location"> | string
    type?: EnumLocationTypeFilter<"Location"> | $Enums.LocationType
    description?: StringNullableFilter<"Location"> | string | null
    parentId?: StringNullableFilter<"Location"> | string | null
    address?: StringFilter<"Location"> | string
    parent?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    children?: LocationListRelationFilter
    BannerImages?: BannerImageListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    address?: SortOrder
    parent?: LocationOrderByWithRelationInput
    children?: LocationOrderByRelationAggregateInput
    BannerImages?: BannerImageOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    address?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    type?: EnumLocationTypeFilter<"Location"> | $Enums.LocationType
    description?: StringNullableFilter<"Location"> | string | null
    parentId?: StringNullableFilter<"Location"> | string | null
    parent?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    children?: LocationListRelationFilter
    BannerImages?: BannerImageListRelationFilter
  }, "id" | "slug" | "address">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    address?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    slug?: StringWithAggregatesFilter<"Location"> | string
    type?: EnumLocationTypeWithAggregatesFilter<"Location"> | $Enums.LocationType
    description?: StringNullableWithAggregatesFilter<"Location"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"Location"> | string | null
    address?: StringWithAggregatesFilter<"Location"> | string
  }

  export type BannerImageCreateInput = {
    id?: string
    url: string
    location: LocationCreateNestedOneWithoutBannerImagesInput
  }

  export type BannerImageUncheckedCreateInput = {
    id?: string
    url: string
    locationId: string
  }

  export type BannerImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutBannerImagesNestedInput
  }

  export type BannerImageUncheckedUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type BannerImageCreateManyInput = {
    id?: string
    url: string
    locationId: string
  }

  export type BannerImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BannerImageUncheckedUpdateManyInput = {
    url?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    address: string
    parent?: LocationCreateNestedOneWithoutChildrenInput
    children?: LocationCreateNestedManyWithoutParentInput
    BannerImages?: BannerImageCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    parentId?: string | null
    address: string
    children?: LocationUncheckedCreateNestedManyWithoutParentInput
    BannerImages?: BannerImageUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    parent?: LocationUpdateOneWithoutChildrenNestedInput
    children?: LocationUpdateManyWithoutParentNestedInput
    BannerImages?: BannerImageUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    children?: LocationUncheckedUpdateManyWithoutParentNestedInput
    BannerImages?: BannerImageUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    parentId?: string | null
    address: string
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
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

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type BannerImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    locationId?: SortOrder
  }

  export type BannerImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    locationId?: SortOrder
  }

  export type BannerImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    locationId?: SortOrder
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

  export type EnumLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeFilter<$PrismaModel> | $Enums.LocationType
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
    isSet?: boolean
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type BannerImageListRelationFilter = {
    every?: BannerImageWhereInput
    some?: BannerImageWhereInput
    none?: BannerImageWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BannerImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    address?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    address?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    address?: SortOrder
  }

  export type EnumLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumLocationTypeFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type LocationCreateNestedOneWithoutBannerImagesInput = {
    create?: XOR<LocationCreateWithoutBannerImagesInput, LocationUncheckedCreateWithoutBannerImagesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutBannerImagesInput
    connect?: LocationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LocationUpdateOneRequiredWithoutBannerImagesNestedInput = {
    create?: XOR<LocationCreateWithoutBannerImagesInput, LocationUncheckedCreateWithoutBannerImagesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutBannerImagesInput
    upsert?: LocationUpsertWithoutBannerImagesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutBannerImagesInput, LocationUpdateWithoutBannerImagesInput>, LocationUncheckedUpdateWithoutBannerImagesInput>
  }

  export type LocationCreateNestedOneWithoutChildrenInput = {
    create?: XOR<LocationCreateWithoutChildrenInput, LocationUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: LocationCreateOrConnectWithoutChildrenInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationCreateNestedManyWithoutParentInput = {
    create?: XOR<LocationCreateWithoutParentInput, LocationUncheckedCreateWithoutParentInput> | LocationCreateWithoutParentInput[] | LocationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutParentInput | LocationCreateOrConnectWithoutParentInput[]
    createMany?: LocationCreateManyParentInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type BannerImageCreateNestedManyWithoutLocationInput = {
    create?: XOR<BannerImageCreateWithoutLocationInput, BannerImageUncheckedCreateWithoutLocationInput> | BannerImageCreateWithoutLocationInput[] | BannerImageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BannerImageCreateOrConnectWithoutLocationInput | BannerImageCreateOrConnectWithoutLocationInput[]
    createMany?: BannerImageCreateManyLocationInputEnvelope
    connect?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<LocationCreateWithoutParentInput, LocationUncheckedCreateWithoutParentInput> | LocationCreateWithoutParentInput[] | LocationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutParentInput | LocationCreateOrConnectWithoutParentInput[]
    createMany?: LocationCreateManyParentInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type BannerImageUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<BannerImageCreateWithoutLocationInput, BannerImageUncheckedCreateWithoutLocationInput> | BannerImageCreateWithoutLocationInput[] | BannerImageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BannerImageCreateOrConnectWithoutLocationInput | BannerImageCreateOrConnectWithoutLocationInput[]
    createMany?: BannerImageCreateManyLocationInputEnvelope
    connect?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
  }

  export type EnumLocationTypeFieldUpdateOperationsInput = {
    set?: $Enums.LocationType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type LocationUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<LocationCreateWithoutChildrenInput, LocationUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: LocationCreateOrConnectWithoutChildrenInput
    upsert?: LocationUpsertWithoutChildrenInput
    disconnect?: boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutChildrenInput, LocationUpdateWithoutChildrenInput>, LocationUncheckedUpdateWithoutChildrenInput>
  }

  export type LocationUpdateManyWithoutParentNestedInput = {
    create?: XOR<LocationCreateWithoutParentInput, LocationUncheckedCreateWithoutParentInput> | LocationCreateWithoutParentInput[] | LocationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutParentInput | LocationCreateOrConnectWithoutParentInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutParentInput | LocationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: LocationCreateManyParentInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutParentInput | LocationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutParentInput | LocationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type BannerImageUpdateManyWithoutLocationNestedInput = {
    create?: XOR<BannerImageCreateWithoutLocationInput, BannerImageUncheckedCreateWithoutLocationInput> | BannerImageCreateWithoutLocationInput[] | BannerImageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BannerImageCreateOrConnectWithoutLocationInput | BannerImageCreateOrConnectWithoutLocationInput[]
    upsert?: BannerImageUpsertWithWhereUniqueWithoutLocationInput | BannerImageUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: BannerImageCreateManyLocationInputEnvelope
    set?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
    disconnect?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
    delete?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
    connect?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
    update?: BannerImageUpdateWithWhereUniqueWithoutLocationInput | BannerImageUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: BannerImageUpdateManyWithWhereWithoutLocationInput | BannerImageUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: BannerImageScalarWhereInput | BannerImageScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<LocationCreateWithoutParentInput, LocationUncheckedCreateWithoutParentInput> | LocationCreateWithoutParentInput[] | LocationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutParentInput | LocationCreateOrConnectWithoutParentInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutParentInput | LocationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: LocationCreateManyParentInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutParentInput | LocationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutParentInput | LocationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type BannerImageUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<BannerImageCreateWithoutLocationInput, BannerImageUncheckedCreateWithoutLocationInput> | BannerImageCreateWithoutLocationInput[] | BannerImageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BannerImageCreateOrConnectWithoutLocationInput | BannerImageCreateOrConnectWithoutLocationInput[]
    upsert?: BannerImageUpsertWithWhereUniqueWithoutLocationInput | BannerImageUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: BannerImageCreateManyLocationInputEnvelope
    set?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
    disconnect?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
    delete?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
    connect?: BannerImageWhereUniqueInput | BannerImageWhereUniqueInput[]
    update?: BannerImageUpdateWithWhereUniqueWithoutLocationInput | BannerImageUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: BannerImageUpdateManyWithWhereWithoutLocationInput | BannerImageUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: BannerImageScalarWhereInput | BannerImageScalarWhereInput[]
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

  export type NestedEnumLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeFilter<$PrismaModel> | $Enums.LocationType
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
    isSet?: boolean
  }

  export type NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumLocationTypeFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type LocationCreateWithoutBannerImagesInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    address: string
    parent?: LocationCreateNestedOneWithoutChildrenInput
    children?: LocationCreateNestedManyWithoutParentInput
  }

  export type LocationUncheckedCreateWithoutBannerImagesInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    parentId?: string | null
    address: string
    children?: LocationUncheckedCreateNestedManyWithoutParentInput
  }

  export type LocationCreateOrConnectWithoutBannerImagesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutBannerImagesInput, LocationUncheckedCreateWithoutBannerImagesInput>
  }

  export type LocationUpsertWithoutBannerImagesInput = {
    update: XOR<LocationUpdateWithoutBannerImagesInput, LocationUncheckedUpdateWithoutBannerImagesInput>
    create: XOR<LocationCreateWithoutBannerImagesInput, LocationUncheckedCreateWithoutBannerImagesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutBannerImagesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutBannerImagesInput, LocationUncheckedUpdateWithoutBannerImagesInput>
  }

  export type LocationUpdateWithoutBannerImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    parent?: LocationUpdateOneWithoutChildrenNestedInput
    children?: LocationUpdateManyWithoutParentNestedInput
  }

  export type LocationUncheckedUpdateWithoutBannerImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    children?: LocationUncheckedUpdateManyWithoutParentNestedInput
  }

  export type LocationCreateWithoutChildrenInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    address: string
    parent?: LocationCreateNestedOneWithoutChildrenInput
    BannerImages?: BannerImageCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    parentId?: string | null
    address: string
    BannerImages?: BannerImageUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutChildrenInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutChildrenInput, LocationUncheckedCreateWithoutChildrenInput>
  }

  export type LocationCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    address: string
    children?: LocationCreateNestedManyWithoutParentInput
    BannerImages?: BannerImageCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    address: string
    children?: LocationUncheckedCreateNestedManyWithoutParentInput
    BannerImages?: BannerImageUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutParentInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutParentInput, LocationUncheckedCreateWithoutParentInput>
  }

  export type LocationCreateManyParentInputEnvelope = {
    data: LocationCreateManyParentInput | LocationCreateManyParentInput[]
  }

  export type BannerImageCreateWithoutLocationInput = {
    id?: string
    url: string
  }

  export type BannerImageUncheckedCreateWithoutLocationInput = {
    id?: string
    url: string
  }

  export type BannerImageCreateOrConnectWithoutLocationInput = {
    where: BannerImageWhereUniqueInput
    create: XOR<BannerImageCreateWithoutLocationInput, BannerImageUncheckedCreateWithoutLocationInput>
  }

  export type BannerImageCreateManyLocationInputEnvelope = {
    data: BannerImageCreateManyLocationInput | BannerImageCreateManyLocationInput[]
  }

  export type LocationUpsertWithoutChildrenInput = {
    update: XOR<LocationUpdateWithoutChildrenInput, LocationUncheckedUpdateWithoutChildrenInput>
    create: XOR<LocationCreateWithoutChildrenInput, LocationUncheckedCreateWithoutChildrenInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutChildrenInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutChildrenInput, LocationUncheckedUpdateWithoutChildrenInput>
  }

  export type LocationUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    parent?: LocationUpdateOneWithoutChildrenNestedInput
    BannerImages?: BannerImageUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    BannerImages?: BannerImageUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUpsertWithWhereUniqueWithoutParentInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutParentInput, LocationUncheckedUpdateWithoutParentInput>
    create: XOR<LocationCreateWithoutParentInput, LocationUncheckedCreateWithoutParentInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutParentInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutParentInput, LocationUncheckedUpdateWithoutParentInput>
  }

  export type LocationUpdateManyWithWhereWithoutParentInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutParentInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    slug?: StringFilter<"Location"> | string
    type?: EnumLocationTypeFilter<"Location"> | $Enums.LocationType
    description?: StringNullableFilter<"Location"> | string | null
    parentId?: StringNullableFilter<"Location"> | string | null
    address?: StringFilter<"Location"> | string
  }

  export type BannerImageUpsertWithWhereUniqueWithoutLocationInput = {
    where: BannerImageWhereUniqueInput
    update: XOR<BannerImageUpdateWithoutLocationInput, BannerImageUncheckedUpdateWithoutLocationInput>
    create: XOR<BannerImageCreateWithoutLocationInput, BannerImageUncheckedCreateWithoutLocationInput>
  }

  export type BannerImageUpdateWithWhereUniqueWithoutLocationInput = {
    where: BannerImageWhereUniqueInput
    data: XOR<BannerImageUpdateWithoutLocationInput, BannerImageUncheckedUpdateWithoutLocationInput>
  }

  export type BannerImageUpdateManyWithWhereWithoutLocationInput = {
    where: BannerImageScalarWhereInput
    data: XOR<BannerImageUpdateManyMutationInput, BannerImageUncheckedUpdateManyWithoutLocationInput>
  }

  export type BannerImageScalarWhereInput = {
    AND?: BannerImageScalarWhereInput | BannerImageScalarWhereInput[]
    OR?: BannerImageScalarWhereInput[]
    NOT?: BannerImageScalarWhereInput | BannerImageScalarWhereInput[]
    id?: StringFilter<"BannerImage"> | string
    url?: StringFilter<"BannerImage"> | string
    locationId?: StringFilter<"BannerImage"> | string
  }

  export type LocationCreateManyParentInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.LocationType
    description?: string | null
    address: string
  }

  export type BannerImageCreateManyLocationInput = {
    id?: string
    url: string
  }

  export type LocationUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    children?: LocationUpdateManyWithoutParentNestedInput
    BannerImages?: BannerImageUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    children?: LocationUncheckedUpdateManyWithoutParentNestedInput
    BannerImages?: BannerImageUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type BannerImageUpdateWithoutLocationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BannerImageUncheckedUpdateWithoutLocationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BannerImageUncheckedUpdateManyWithoutLocationInput = {
    url?: StringFieldUpdateOperationsInput | string
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