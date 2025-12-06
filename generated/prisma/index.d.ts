
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
 * Model FavoriteMusic
 * 
 */
export type FavoriteMusic = $Result.DefaultSelection<Prisma.$FavoriteMusicPayload>
/**
 * Model FavoriteVideo
 * 
 */
export type FavoriteVideo = $Result.DefaultSelection<Prisma.$FavoriteVideoPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Series
 * 
 */
export type Series = $Result.DefaultSelection<Prisma.$SeriesPayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Music
 * 
 */
export type Music = $Result.DefaultSelection<Prisma.$MusicPayload>
/**
 * Model MusicPlay
 * 
 */
export type MusicPlay = $Result.DefaultSelection<Prisma.$MusicPlayPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model PlaylistMusic
 * 
 */
export type PlaylistMusic = $Result.DefaultSelection<Prisma.$PlaylistMusicPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VideoType: {
  movie: 'movie',
  episode: 'episode'
};

export type VideoType = (typeof VideoType)[keyof typeof VideoType]

}

export type VideoType = $Enums.VideoType

export const VideoType: typeof $Enums.VideoType

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
   * `prisma.favoriteMusic`: Exposes CRUD operations for the **FavoriteMusic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteMusics
    * const favoriteMusics = await prisma.favoriteMusic.findMany()
    * ```
    */
  get favoriteMusic(): Prisma.FavoriteMusicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteVideo`: Exposes CRUD operations for the **FavoriteVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteVideos
    * const favoriteVideos = await prisma.favoriteVideo.findMany()
    * ```
    */
  get favoriteVideo(): Prisma.FavoriteVideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.series`: Exposes CRUD operations for the **Series** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.series.findMany()
    * ```
    */
  get series(): Prisma.SeriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.music`: Exposes CRUD operations for the **Music** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Music
    * const music = await prisma.music.findMany()
    * ```
    */
  get music(): Prisma.MusicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.musicPlay`: Exposes CRUD operations for the **MusicPlay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MusicPlays
    * const musicPlays = await prisma.musicPlay.findMany()
    * ```
    */
  get musicPlay(): Prisma.MusicPlayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlistMusic`: Exposes CRUD operations for the **PlaylistMusic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistMusics
    * const playlistMusics = await prisma.playlistMusic.findMany()
    * ```
    */
  get playlistMusic(): Prisma.PlaylistMusicDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    FavoriteMusic: 'FavoriteMusic',
    FavoriteVideo: 'FavoriteVideo',
    History: 'History',
    Video: 'Video',
    Movie: 'Movie',
    Series: 'Series',
    Episode: 'Episode',
    Artist: 'Artist',
    Album: 'Album',
    Music: 'Music',
    MusicPlay: 'MusicPlay',
    Playlist: 'Playlist',
    PlaylistMusic: 'PlaylistMusic'
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
      modelProps: "user" | "favoriteMusic" | "favoriteVideo" | "history" | "video" | "movie" | "series" | "episode" | "artist" | "album" | "music" | "musicPlay" | "playlist" | "playlistMusic"
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
      FavoriteMusic: {
        payload: Prisma.$FavoriteMusicPayload<ExtArgs>
        fields: Prisma.FavoriteMusicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteMusicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteMusicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteMusicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteMusicPayload>
          }
          findFirst: {
            args: Prisma.FavoriteMusicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteMusicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteMusicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteMusicPayload>
          }
          findMany: {
            args: Prisma.FavoriteMusicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteMusicPayload>[]
          }
          create: {
            args: Prisma.FavoriteMusicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteMusicPayload>
          }
          createMany: {
            args: Prisma.FavoriteMusicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoriteMusicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteMusicPayload>
          }
          update: {
            args: Prisma.FavoriteMusicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteMusicPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteMusicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteMusicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteMusicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteMusicPayload>
          }
          aggregate: {
            args: Prisma.FavoriteMusicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteMusic>
          }
          groupBy: {
            args: Prisma.FavoriteMusicGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteMusicGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteMusicCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteMusicCountAggregateOutputType> | number
          }
        }
      }
      FavoriteVideo: {
        payload: Prisma.$FavoriteVideoPayload<ExtArgs>
        fields: Prisma.FavoriteVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteVideoPayload>
          }
          findFirst: {
            args: Prisma.FavoriteVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteVideoPayload>
          }
          findMany: {
            args: Prisma.FavoriteVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteVideoPayload>[]
          }
          create: {
            args: Prisma.FavoriteVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteVideoPayload>
          }
          createMany: {
            args: Prisma.FavoriteVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoriteVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteVideoPayload>
          }
          update: {
            args: Prisma.FavoriteVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteVideoPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteVideoPayload>
          }
          aggregate: {
            args: Prisma.FavoriteVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteVideo>
          }
          groupBy: {
            args: Prisma.FavoriteVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteVideoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteVideoCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Series: {
        payload: Prisma.$SeriesPayload<ExtArgs>
        fields: Prisma.SeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findFirst: {
            args: Prisma.SeriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findMany: {
            args: Prisma.SeriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          create: {
            args: Prisma.SeriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          createMany: {
            args: Prisma.SeriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          update: {
            args: Prisma.SeriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          deleteMany: {
            args: Prisma.SeriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          aggregate: {
            args: Prisma.SeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeries>
          }
          groupBy: {
            args: Prisma.SeriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeriesCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Music: {
        payload: Prisma.$MusicPayload<ExtArgs>
        fields: Prisma.MusicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          findFirst: {
            args: Prisma.MusicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          findMany: {
            args: Prisma.MusicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>[]
          }
          create: {
            args: Prisma.MusicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          createMany: {
            args: Prisma.MusicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MusicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          update: {
            args: Prisma.MusicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          deleteMany: {
            args: Prisma.MusicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MusicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          aggregate: {
            args: Prisma.MusicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusic>
          }
          groupBy: {
            args: Prisma.MusicGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicCountArgs<ExtArgs>
            result: $Utils.Optional<MusicCountAggregateOutputType> | number
          }
        }
      }
      MusicPlay: {
        payload: Prisma.$MusicPlayPayload<ExtArgs>
        fields: Prisma.MusicPlayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicPlayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPlayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicPlayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPlayPayload>
          }
          findFirst: {
            args: Prisma.MusicPlayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPlayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicPlayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPlayPayload>
          }
          findMany: {
            args: Prisma.MusicPlayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPlayPayload>[]
          }
          create: {
            args: Prisma.MusicPlayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPlayPayload>
          }
          createMany: {
            args: Prisma.MusicPlayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MusicPlayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPlayPayload>
          }
          update: {
            args: Prisma.MusicPlayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPlayPayload>
          }
          deleteMany: {
            args: Prisma.MusicPlayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicPlayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MusicPlayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPlayPayload>
          }
          aggregate: {
            args: Prisma.MusicPlayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusicPlay>
          }
          groupBy: {
            args: Prisma.MusicPlayGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicPlayGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicPlayCountArgs<ExtArgs>
            result: $Utils.Optional<MusicPlayCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      PlaylistMusic: {
        payload: Prisma.$PlaylistMusicPayload<ExtArgs>
        fields: Prisma.PlaylistMusicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistMusicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistMusicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistMusicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistMusicPayload>
          }
          findFirst: {
            args: Prisma.PlaylistMusicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistMusicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistMusicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistMusicPayload>
          }
          findMany: {
            args: Prisma.PlaylistMusicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistMusicPayload>[]
          }
          create: {
            args: Prisma.PlaylistMusicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistMusicPayload>
          }
          createMany: {
            args: Prisma.PlaylistMusicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlaylistMusicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistMusicPayload>
          }
          update: {
            args: Prisma.PlaylistMusicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistMusicPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistMusicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistMusicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistMusicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistMusicPayload>
          }
          aggregate: {
            args: Prisma.PlaylistMusicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistMusic>
          }
          groupBy: {
            args: Prisma.PlaylistMusicGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistMusicGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistMusicCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistMusicCountAggregateOutputType> | number
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
    favoriteMusic?: FavoriteMusicOmit
    favoriteVideo?: FavoriteVideoOmit
    history?: HistoryOmit
    video?: VideoOmit
    movie?: MovieOmit
    series?: SeriesOmit
    episode?: EpisodeOmit
    artist?: ArtistOmit
    album?: AlbumOmit
    music?: MusicOmit
    musicPlay?: MusicPlayOmit
    playlist?: PlaylistOmit
    playlistMusic?: PlaylistMusicOmit
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
    favoritesMusic: number
    favoritesVideo: number
    history: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritesMusic?: boolean | UserCountOutputTypeCountFavoritesMusicArgs
    favoritesVideo?: boolean | UserCountOutputTypeCountFavoritesVideoArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
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
  export type UserCountOutputTypeCountFavoritesMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteMusicWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteVideoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    episodes: number
    favoritesVideo: number
    history: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | VideoCountOutputTypeCountEpisodesArgs
    favoritesVideo?: boolean | VideoCountOutputTypeCountFavoritesVideoArgs
    history?: boolean | VideoCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountFavoritesVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteVideoWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type SeriesCountOutputType
   */

  export type SeriesCountOutputType = {
    episodes: number
  }

  export type SeriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | SeriesCountOutputTypeCountEpisodesArgs
  }

  // Custom InputTypes
  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCountOutputType
     */
    select?: SeriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    albums: number
    music: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | ArtistCountOutputTypeCountAlbumsArgs
    music?: boolean | ArtistCountOutputTypeCountMusicArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    music: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    music?: boolean | AlbumCountOutputTypeCountMusicArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicWhereInput
  }


  /**
   * Count Type MusicCountOutputType
   */

  export type MusicCountOutputType = {
    musicPlays: number
    playlists: number
    favoritesMusic: number
    history: number
  }

  export type MusicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicPlays?: boolean | MusicCountOutputTypeCountMusicPlaysArgs
    playlists?: boolean | MusicCountOutputTypeCountPlaylistsArgs
    favoritesMusic?: boolean | MusicCountOutputTypeCountFavoritesMusicArgs
    history?: boolean | MusicCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicCountOutputType
     */
    select?: MusicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeCountMusicPlaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicPlayWhereInput
  }

  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistMusicWhereInput
  }

  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeCountFavoritesMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteMusicWhereInput
  }

  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    music: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    music?: boolean | PlaylistCountOutputTypeCountMusicArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistMusicWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    googleId: string | null
    picture: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    googleId: string | null
    picture: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    googleId: number
    picture: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    googleId?: true
    picture?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    googleId?: true
    picture?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    googleId?: true
    picture?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    googleId: string
    picture: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleId?: boolean
    picture?: boolean
    favoritesMusic?: boolean | User$favoritesMusicArgs<ExtArgs>
    favoritesVideo?: boolean | User$favoritesVideoArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleId?: boolean
    picture?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt" | "googleId" | "picture", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritesMusic?: boolean | User$favoritesMusicArgs<ExtArgs>
    favoritesVideo?: boolean | User$favoritesVideoArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favoritesMusic: Prisma.$FavoriteMusicPayload<ExtArgs>[]
      favoritesVideo: Prisma.$FavoriteVideoPayload<ExtArgs>[]
      history: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      googleId: string
      picture: string | null
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
    favoritesMusic<T extends User$favoritesMusicArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesMusicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritesVideo<T extends User$favoritesVideoArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesVideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
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
   * User.favoritesMusic
   */
  export type User$favoritesMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    where?: FavoriteMusicWhereInput
    orderBy?: FavoriteMusicOrderByWithRelationInput | FavoriteMusicOrderByWithRelationInput[]
    cursor?: FavoriteMusicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteMusicScalarFieldEnum | FavoriteMusicScalarFieldEnum[]
  }

  /**
   * User.favoritesVideo
   */
  export type User$favoritesVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    where?: FavoriteVideoWhereInput
    orderBy?: FavoriteVideoOrderByWithRelationInput | FavoriteVideoOrderByWithRelationInput[]
    cursor?: FavoriteVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteVideoScalarFieldEnum | FavoriteVideoScalarFieldEnum[]
  }

  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
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
   * Model FavoriteMusic
   */

  export type AggregateFavoriteMusic = {
    _count: FavoriteMusicCountAggregateOutputType | null
    _avg: FavoriteMusicAvgAggregateOutputType | null
    _sum: FavoriteMusicSumAggregateOutputType | null
    _min: FavoriteMusicMinAggregateOutputType | null
    _max: FavoriteMusicMaxAggregateOutputType | null
  }

  export type FavoriteMusicAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    musicId: number | null
  }

  export type FavoriteMusicSumAggregateOutputType = {
    id: number | null
    userId: number | null
    musicId: number | null
  }

  export type FavoriteMusicMinAggregateOutputType = {
    id: number | null
    userId: number | null
    musicId: number | null
    createdAt: Date | null
  }

  export type FavoriteMusicMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    musicId: number | null
    createdAt: Date | null
  }

  export type FavoriteMusicCountAggregateOutputType = {
    id: number
    userId: number
    musicId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMusicAvgAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
  }

  export type FavoriteMusicSumAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
  }

  export type FavoriteMusicMinAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
    createdAt?: true
  }

  export type FavoriteMusicMaxAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
    createdAt?: true
  }

  export type FavoriteMusicCountAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteMusicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteMusic to aggregate.
     */
    where?: FavoriteMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteMusics to fetch.
     */
    orderBy?: FavoriteMusicOrderByWithRelationInput | FavoriteMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteMusics
    **/
    _count?: true | FavoriteMusicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteMusicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteMusicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMusicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMusicMaxAggregateInputType
  }

  export type GetFavoriteMusicAggregateType<T extends FavoriteMusicAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteMusic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteMusic[P]>
      : GetScalarType<T[P], AggregateFavoriteMusic[P]>
  }




  export type FavoriteMusicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteMusicWhereInput
    orderBy?: FavoriteMusicOrderByWithAggregationInput | FavoriteMusicOrderByWithAggregationInput[]
    by: FavoriteMusicScalarFieldEnum[] | FavoriteMusicScalarFieldEnum
    having?: FavoriteMusicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteMusicCountAggregateInputType | true
    _avg?: FavoriteMusicAvgAggregateInputType
    _sum?: FavoriteMusicSumAggregateInputType
    _min?: FavoriteMusicMinAggregateInputType
    _max?: FavoriteMusicMaxAggregateInputType
  }

  export type FavoriteMusicGroupByOutputType = {
    id: number
    userId: number
    musicId: number
    createdAt: Date
    _count: FavoriteMusicCountAggregateOutputType | null
    _avg: FavoriteMusicAvgAggregateOutputType | null
    _sum: FavoriteMusicSumAggregateOutputType | null
    _min: FavoriteMusicMinAggregateOutputType | null
    _max: FavoriteMusicMaxAggregateOutputType | null
  }

  type GetFavoriteMusicGroupByPayload<T extends FavoriteMusicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteMusicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteMusicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteMusicGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteMusicGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteMusicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    musicId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteMusic"]>



  export type FavoriteMusicSelectScalar = {
    id?: boolean
    userId?: boolean
    musicId?: boolean
    createdAt?: boolean
  }

  export type FavoriteMusicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "musicId" | "createdAt", ExtArgs["result"]["favoriteMusic"]>
  export type FavoriteMusicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }

  export type $FavoriteMusicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteMusic"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      music: Prisma.$MusicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      musicId: number
      createdAt: Date
    }, ExtArgs["result"]["favoriteMusic"]>
    composites: {}
  }

  type FavoriteMusicGetPayload<S extends boolean | null | undefined | FavoriteMusicDefaultArgs> = $Result.GetResult<Prisma.$FavoriteMusicPayload, S>

  type FavoriteMusicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteMusicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteMusicCountAggregateInputType | true
    }

  export interface FavoriteMusicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteMusic'], meta: { name: 'FavoriteMusic' } }
    /**
     * Find zero or one FavoriteMusic that matches the filter.
     * @param {FavoriteMusicFindUniqueArgs} args - Arguments to find a FavoriteMusic
     * @example
     * // Get one FavoriteMusic
     * const favoriteMusic = await prisma.favoriteMusic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteMusicFindUniqueArgs>(args: SelectSubset<T, FavoriteMusicFindUniqueArgs<ExtArgs>>): Prisma__FavoriteMusicClient<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteMusic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteMusicFindUniqueOrThrowArgs} args - Arguments to find a FavoriteMusic
     * @example
     * // Get one FavoriteMusic
     * const favoriteMusic = await prisma.favoriteMusic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteMusicFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteMusicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteMusicClient<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteMusic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteMusicFindFirstArgs} args - Arguments to find a FavoriteMusic
     * @example
     * // Get one FavoriteMusic
     * const favoriteMusic = await prisma.favoriteMusic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteMusicFindFirstArgs>(args?: SelectSubset<T, FavoriteMusicFindFirstArgs<ExtArgs>>): Prisma__FavoriteMusicClient<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteMusic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteMusicFindFirstOrThrowArgs} args - Arguments to find a FavoriteMusic
     * @example
     * // Get one FavoriteMusic
     * const favoriteMusic = await prisma.favoriteMusic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteMusicFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteMusicFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteMusicClient<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteMusics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteMusicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteMusics
     * const favoriteMusics = await prisma.favoriteMusic.findMany()
     * 
     * // Get first 10 FavoriteMusics
     * const favoriteMusics = await prisma.favoriteMusic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteMusicWithIdOnly = await prisma.favoriteMusic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteMusicFindManyArgs>(args?: SelectSubset<T, FavoriteMusicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteMusic.
     * @param {FavoriteMusicCreateArgs} args - Arguments to create a FavoriteMusic.
     * @example
     * // Create one FavoriteMusic
     * const FavoriteMusic = await prisma.favoriteMusic.create({
     *   data: {
     *     // ... data to create a FavoriteMusic
     *   }
     * })
     * 
     */
    create<T extends FavoriteMusicCreateArgs>(args: SelectSubset<T, FavoriteMusicCreateArgs<ExtArgs>>): Prisma__FavoriteMusicClient<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteMusics.
     * @param {FavoriteMusicCreateManyArgs} args - Arguments to create many FavoriteMusics.
     * @example
     * // Create many FavoriteMusics
     * const favoriteMusic = await prisma.favoriteMusic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteMusicCreateManyArgs>(args?: SelectSubset<T, FavoriteMusicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FavoriteMusic.
     * @param {FavoriteMusicDeleteArgs} args - Arguments to delete one FavoriteMusic.
     * @example
     * // Delete one FavoriteMusic
     * const FavoriteMusic = await prisma.favoriteMusic.delete({
     *   where: {
     *     // ... filter to delete one FavoriteMusic
     *   }
     * })
     * 
     */
    delete<T extends FavoriteMusicDeleteArgs>(args: SelectSubset<T, FavoriteMusicDeleteArgs<ExtArgs>>): Prisma__FavoriteMusicClient<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteMusic.
     * @param {FavoriteMusicUpdateArgs} args - Arguments to update one FavoriteMusic.
     * @example
     * // Update one FavoriteMusic
     * const favoriteMusic = await prisma.favoriteMusic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteMusicUpdateArgs>(args: SelectSubset<T, FavoriteMusicUpdateArgs<ExtArgs>>): Prisma__FavoriteMusicClient<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteMusics.
     * @param {FavoriteMusicDeleteManyArgs} args - Arguments to filter FavoriteMusics to delete.
     * @example
     * // Delete a few FavoriteMusics
     * const { count } = await prisma.favoriteMusic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteMusicDeleteManyArgs>(args?: SelectSubset<T, FavoriteMusicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteMusicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteMusics
     * const favoriteMusic = await prisma.favoriteMusic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteMusicUpdateManyArgs>(args: SelectSubset<T, FavoriteMusicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavoriteMusic.
     * @param {FavoriteMusicUpsertArgs} args - Arguments to update or create a FavoriteMusic.
     * @example
     * // Update or create a FavoriteMusic
     * const favoriteMusic = await prisma.favoriteMusic.upsert({
     *   create: {
     *     // ... data to create a FavoriteMusic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteMusic we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteMusicUpsertArgs>(args: SelectSubset<T, FavoriteMusicUpsertArgs<ExtArgs>>): Prisma__FavoriteMusicClient<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteMusicCountArgs} args - Arguments to filter FavoriteMusics to count.
     * @example
     * // Count the number of FavoriteMusics
     * const count = await prisma.favoriteMusic.count({
     *   where: {
     *     // ... the filter for the FavoriteMusics we want to count
     *   }
     * })
    **/
    count<T extends FavoriteMusicCountArgs>(
      args?: Subset<T, FavoriteMusicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteMusicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteMusicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteMusicAggregateArgs>(args: Subset<T, FavoriteMusicAggregateArgs>): Prisma.PrismaPromise<GetFavoriteMusicAggregateType<T>>

    /**
     * Group by FavoriteMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteMusicGroupByArgs} args - Group by arguments.
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
      T extends FavoriteMusicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteMusicGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteMusicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteMusicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteMusicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteMusic model
   */
  readonly fields: FavoriteMusicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteMusic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteMusicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    music<T extends MusicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MusicDefaultArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FavoriteMusic model
   */
  interface FavoriteMusicFieldRefs {
    readonly id: FieldRef<"FavoriteMusic", 'Int'>
    readonly userId: FieldRef<"FavoriteMusic", 'Int'>
    readonly musicId: FieldRef<"FavoriteMusic", 'Int'>
    readonly createdAt: FieldRef<"FavoriteMusic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteMusic findUnique
   */
  export type FavoriteMusicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteMusic to fetch.
     */
    where: FavoriteMusicWhereUniqueInput
  }

  /**
   * FavoriteMusic findUniqueOrThrow
   */
  export type FavoriteMusicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteMusic to fetch.
     */
    where: FavoriteMusicWhereUniqueInput
  }

  /**
   * FavoriteMusic findFirst
   */
  export type FavoriteMusicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteMusic to fetch.
     */
    where?: FavoriteMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteMusics to fetch.
     */
    orderBy?: FavoriteMusicOrderByWithRelationInput | FavoriteMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteMusics.
     */
    cursor?: FavoriteMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteMusics.
     */
    distinct?: FavoriteMusicScalarFieldEnum | FavoriteMusicScalarFieldEnum[]
  }

  /**
   * FavoriteMusic findFirstOrThrow
   */
  export type FavoriteMusicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteMusic to fetch.
     */
    where?: FavoriteMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteMusics to fetch.
     */
    orderBy?: FavoriteMusicOrderByWithRelationInput | FavoriteMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteMusics.
     */
    cursor?: FavoriteMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteMusics.
     */
    distinct?: FavoriteMusicScalarFieldEnum | FavoriteMusicScalarFieldEnum[]
  }

  /**
   * FavoriteMusic findMany
   */
  export type FavoriteMusicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteMusics to fetch.
     */
    where?: FavoriteMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteMusics to fetch.
     */
    orderBy?: FavoriteMusicOrderByWithRelationInput | FavoriteMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteMusics.
     */
    cursor?: FavoriteMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteMusics.
     */
    skip?: number
    distinct?: FavoriteMusicScalarFieldEnum | FavoriteMusicScalarFieldEnum[]
  }

  /**
   * FavoriteMusic create
   */
  export type FavoriteMusicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteMusic.
     */
    data: XOR<FavoriteMusicCreateInput, FavoriteMusicUncheckedCreateInput>
  }

  /**
   * FavoriteMusic createMany
   */
  export type FavoriteMusicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteMusics.
     */
    data: FavoriteMusicCreateManyInput | FavoriteMusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteMusic update
   */
  export type FavoriteMusicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteMusic.
     */
    data: XOR<FavoriteMusicUpdateInput, FavoriteMusicUncheckedUpdateInput>
    /**
     * Choose, which FavoriteMusic to update.
     */
    where: FavoriteMusicWhereUniqueInput
  }

  /**
   * FavoriteMusic updateMany
   */
  export type FavoriteMusicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteMusics.
     */
    data: XOR<FavoriteMusicUpdateManyMutationInput, FavoriteMusicUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteMusics to update
     */
    where?: FavoriteMusicWhereInput
    /**
     * Limit how many FavoriteMusics to update.
     */
    limit?: number
  }

  /**
   * FavoriteMusic upsert
   */
  export type FavoriteMusicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteMusic to update in case it exists.
     */
    where: FavoriteMusicWhereUniqueInput
    /**
     * In case the FavoriteMusic found by the `where` argument doesn't exist, create a new FavoriteMusic with this data.
     */
    create: XOR<FavoriteMusicCreateInput, FavoriteMusicUncheckedCreateInput>
    /**
     * In case the FavoriteMusic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteMusicUpdateInput, FavoriteMusicUncheckedUpdateInput>
  }

  /**
   * FavoriteMusic delete
   */
  export type FavoriteMusicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    /**
     * Filter which FavoriteMusic to delete.
     */
    where: FavoriteMusicWhereUniqueInput
  }

  /**
   * FavoriteMusic deleteMany
   */
  export type FavoriteMusicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteMusics to delete
     */
    where?: FavoriteMusicWhereInput
    /**
     * Limit how many FavoriteMusics to delete.
     */
    limit?: number
  }

  /**
   * FavoriteMusic without action
   */
  export type FavoriteMusicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteVideo
   */

  export type AggregateFavoriteVideo = {
    _count: FavoriteVideoCountAggregateOutputType | null
    _avg: FavoriteVideoAvgAggregateOutputType | null
    _sum: FavoriteVideoSumAggregateOutputType | null
    _min: FavoriteVideoMinAggregateOutputType | null
    _max: FavoriteVideoMaxAggregateOutputType | null
  }

  export type FavoriteVideoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    videoId: number | null
  }

  export type FavoriteVideoSumAggregateOutputType = {
    id: number | null
    userId: number | null
    videoId: number | null
  }

  export type FavoriteVideoMinAggregateOutputType = {
    id: number | null
    userId: number | null
    videoId: number | null
    createdAt: Date | null
  }

  export type FavoriteVideoMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    videoId: number | null
    createdAt: Date | null
  }

  export type FavoriteVideoCountAggregateOutputType = {
    id: number
    userId: number
    videoId: number
    createdAt: number
    _all: number
  }


  export type FavoriteVideoAvgAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
  }

  export type FavoriteVideoSumAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
  }

  export type FavoriteVideoMinAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    createdAt?: true
  }

  export type FavoriteVideoMaxAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    createdAt?: true
  }

  export type FavoriteVideoCountAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteVideo to aggregate.
     */
    where?: FavoriteVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteVideos to fetch.
     */
    orderBy?: FavoriteVideoOrderByWithRelationInput | FavoriteVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteVideos
    **/
    _count?: true | FavoriteVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteVideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteVideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteVideoMaxAggregateInputType
  }

  export type GetFavoriteVideoAggregateType<T extends FavoriteVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteVideo[P]>
      : GetScalarType<T[P], AggregateFavoriteVideo[P]>
  }




  export type FavoriteVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteVideoWhereInput
    orderBy?: FavoriteVideoOrderByWithAggregationInput | FavoriteVideoOrderByWithAggregationInput[]
    by: FavoriteVideoScalarFieldEnum[] | FavoriteVideoScalarFieldEnum
    having?: FavoriteVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteVideoCountAggregateInputType | true
    _avg?: FavoriteVideoAvgAggregateInputType
    _sum?: FavoriteVideoSumAggregateInputType
    _min?: FavoriteVideoMinAggregateInputType
    _max?: FavoriteVideoMaxAggregateInputType
  }

  export type FavoriteVideoGroupByOutputType = {
    id: number
    userId: number
    videoId: number
    createdAt: Date
    _count: FavoriteVideoCountAggregateOutputType | null
    _avg: FavoriteVideoAvgAggregateOutputType | null
    _sum: FavoriteVideoSumAggregateOutputType | null
    _min: FavoriteVideoMinAggregateOutputType | null
    _max: FavoriteVideoMaxAggregateOutputType | null
  }

  type GetFavoriteVideoGroupByPayload<T extends FavoriteVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteVideoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteVideoGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteVideo"]>



  export type FavoriteVideoSelectScalar = {
    id?: boolean
    userId?: boolean
    videoId?: boolean
    createdAt?: boolean
  }

  export type FavoriteVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "videoId" | "createdAt", ExtArgs["result"]["favoriteVideo"]>
  export type FavoriteVideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $FavoriteVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteVideo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      videoId: number
      createdAt: Date
    }, ExtArgs["result"]["favoriteVideo"]>
    composites: {}
  }

  type FavoriteVideoGetPayload<S extends boolean | null | undefined | FavoriteVideoDefaultArgs> = $Result.GetResult<Prisma.$FavoriteVideoPayload, S>

  type FavoriteVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteVideoCountAggregateInputType | true
    }

  export interface FavoriteVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteVideo'], meta: { name: 'FavoriteVideo' } }
    /**
     * Find zero or one FavoriteVideo that matches the filter.
     * @param {FavoriteVideoFindUniqueArgs} args - Arguments to find a FavoriteVideo
     * @example
     * // Get one FavoriteVideo
     * const favoriteVideo = await prisma.favoriteVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteVideoFindUniqueArgs>(args: SelectSubset<T, FavoriteVideoFindUniqueArgs<ExtArgs>>): Prisma__FavoriteVideoClient<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteVideoFindUniqueOrThrowArgs} args - Arguments to find a FavoriteVideo
     * @example
     * // Get one FavoriteVideo
     * const favoriteVideo = await prisma.favoriteVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteVideoClient<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteVideoFindFirstArgs} args - Arguments to find a FavoriteVideo
     * @example
     * // Get one FavoriteVideo
     * const favoriteVideo = await prisma.favoriteVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteVideoFindFirstArgs>(args?: SelectSubset<T, FavoriteVideoFindFirstArgs<ExtArgs>>): Prisma__FavoriteVideoClient<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteVideoFindFirstOrThrowArgs} args - Arguments to find a FavoriteVideo
     * @example
     * // Get one FavoriteVideo
     * const favoriteVideo = await prisma.favoriteVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteVideoClient<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteVideos
     * const favoriteVideos = await prisma.favoriteVideo.findMany()
     * 
     * // Get first 10 FavoriteVideos
     * const favoriteVideos = await prisma.favoriteVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteVideoWithIdOnly = await prisma.favoriteVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteVideoFindManyArgs>(args?: SelectSubset<T, FavoriteVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteVideo.
     * @param {FavoriteVideoCreateArgs} args - Arguments to create a FavoriteVideo.
     * @example
     * // Create one FavoriteVideo
     * const FavoriteVideo = await prisma.favoriteVideo.create({
     *   data: {
     *     // ... data to create a FavoriteVideo
     *   }
     * })
     * 
     */
    create<T extends FavoriteVideoCreateArgs>(args: SelectSubset<T, FavoriteVideoCreateArgs<ExtArgs>>): Prisma__FavoriteVideoClient<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteVideos.
     * @param {FavoriteVideoCreateManyArgs} args - Arguments to create many FavoriteVideos.
     * @example
     * // Create many FavoriteVideos
     * const favoriteVideo = await prisma.favoriteVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteVideoCreateManyArgs>(args?: SelectSubset<T, FavoriteVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FavoriteVideo.
     * @param {FavoriteVideoDeleteArgs} args - Arguments to delete one FavoriteVideo.
     * @example
     * // Delete one FavoriteVideo
     * const FavoriteVideo = await prisma.favoriteVideo.delete({
     *   where: {
     *     // ... filter to delete one FavoriteVideo
     *   }
     * })
     * 
     */
    delete<T extends FavoriteVideoDeleteArgs>(args: SelectSubset<T, FavoriteVideoDeleteArgs<ExtArgs>>): Prisma__FavoriteVideoClient<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteVideo.
     * @param {FavoriteVideoUpdateArgs} args - Arguments to update one FavoriteVideo.
     * @example
     * // Update one FavoriteVideo
     * const favoriteVideo = await prisma.favoriteVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteVideoUpdateArgs>(args: SelectSubset<T, FavoriteVideoUpdateArgs<ExtArgs>>): Prisma__FavoriteVideoClient<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteVideos.
     * @param {FavoriteVideoDeleteManyArgs} args - Arguments to filter FavoriteVideos to delete.
     * @example
     * // Delete a few FavoriteVideos
     * const { count } = await prisma.favoriteVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteVideoDeleteManyArgs>(args?: SelectSubset<T, FavoriteVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteVideos
     * const favoriteVideo = await prisma.favoriteVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteVideoUpdateManyArgs>(args: SelectSubset<T, FavoriteVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavoriteVideo.
     * @param {FavoriteVideoUpsertArgs} args - Arguments to update or create a FavoriteVideo.
     * @example
     * // Update or create a FavoriteVideo
     * const favoriteVideo = await prisma.favoriteVideo.upsert({
     *   create: {
     *     // ... data to create a FavoriteVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteVideo we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteVideoUpsertArgs>(args: SelectSubset<T, FavoriteVideoUpsertArgs<ExtArgs>>): Prisma__FavoriteVideoClient<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteVideoCountArgs} args - Arguments to filter FavoriteVideos to count.
     * @example
     * // Count the number of FavoriteVideos
     * const count = await prisma.favoriteVideo.count({
     *   where: {
     *     // ... the filter for the FavoriteVideos we want to count
     *   }
     * })
    **/
    count<T extends FavoriteVideoCountArgs>(
      args?: Subset<T, FavoriteVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteVideoAggregateArgs>(args: Subset<T, FavoriteVideoAggregateArgs>): Prisma.PrismaPromise<GetFavoriteVideoAggregateType<T>>

    /**
     * Group by FavoriteVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteVideoGroupByArgs} args - Group by arguments.
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
      T extends FavoriteVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteVideoGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteVideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteVideo model
   */
  readonly fields: FavoriteVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FavoriteVideo model
   */
  interface FavoriteVideoFieldRefs {
    readonly id: FieldRef<"FavoriteVideo", 'Int'>
    readonly userId: FieldRef<"FavoriteVideo", 'Int'>
    readonly videoId: FieldRef<"FavoriteVideo", 'Int'>
    readonly createdAt: FieldRef<"FavoriteVideo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteVideo findUnique
   */
  export type FavoriteVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteVideo to fetch.
     */
    where: FavoriteVideoWhereUniqueInput
  }

  /**
   * FavoriteVideo findUniqueOrThrow
   */
  export type FavoriteVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteVideo to fetch.
     */
    where: FavoriteVideoWhereUniqueInput
  }

  /**
   * FavoriteVideo findFirst
   */
  export type FavoriteVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteVideo to fetch.
     */
    where?: FavoriteVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteVideos to fetch.
     */
    orderBy?: FavoriteVideoOrderByWithRelationInput | FavoriteVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteVideos.
     */
    cursor?: FavoriteVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteVideos.
     */
    distinct?: FavoriteVideoScalarFieldEnum | FavoriteVideoScalarFieldEnum[]
  }

  /**
   * FavoriteVideo findFirstOrThrow
   */
  export type FavoriteVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteVideo to fetch.
     */
    where?: FavoriteVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteVideos to fetch.
     */
    orderBy?: FavoriteVideoOrderByWithRelationInput | FavoriteVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteVideos.
     */
    cursor?: FavoriteVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteVideos.
     */
    distinct?: FavoriteVideoScalarFieldEnum | FavoriteVideoScalarFieldEnum[]
  }

  /**
   * FavoriteVideo findMany
   */
  export type FavoriteVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteVideos to fetch.
     */
    where?: FavoriteVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteVideos to fetch.
     */
    orderBy?: FavoriteVideoOrderByWithRelationInput | FavoriteVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteVideos.
     */
    cursor?: FavoriteVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteVideos.
     */
    skip?: number
    distinct?: FavoriteVideoScalarFieldEnum | FavoriteVideoScalarFieldEnum[]
  }

  /**
   * FavoriteVideo create
   */
  export type FavoriteVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteVideo.
     */
    data: XOR<FavoriteVideoCreateInput, FavoriteVideoUncheckedCreateInput>
  }

  /**
   * FavoriteVideo createMany
   */
  export type FavoriteVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteVideos.
     */
    data: FavoriteVideoCreateManyInput | FavoriteVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteVideo update
   */
  export type FavoriteVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteVideo.
     */
    data: XOR<FavoriteVideoUpdateInput, FavoriteVideoUncheckedUpdateInput>
    /**
     * Choose, which FavoriteVideo to update.
     */
    where: FavoriteVideoWhereUniqueInput
  }

  /**
   * FavoriteVideo updateMany
   */
  export type FavoriteVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteVideos.
     */
    data: XOR<FavoriteVideoUpdateManyMutationInput, FavoriteVideoUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteVideos to update
     */
    where?: FavoriteVideoWhereInput
    /**
     * Limit how many FavoriteVideos to update.
     */
    limit?: number
  }

  /**
   * FavoriteVideo upsert
   */
  export type FavoriteVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteVideo to update in case it exists.
     */
    where: FavoriteVideoWhereUniqueInput
    /**
     * In case the FavoriteVideo found by the `where` argument doesn't exist, create a new FavoriteVideo with this data.
     */
    create: XOR<FavoriteVideoCreateInput, FavoriteVideoUncheckedCreateInput>
    /**
     * In case the FavoriteVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteVideoUpdateInput, FavoriteVideoUncheckedUpdateInput>
  }

  /**
   * FavoriteVideo delete
   */
  export type FavoriteVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    /**
     * Filter which FavoriteVideo to delete.
     */
    where: FavoriteVideoWhereUniqueInput
  }

  /**
   * FavoriteVideo deleteMany
   */
  export type FavoriteVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteVideos to delete
     */
    where?: FavoriteVideoWhereInput
    /**
     * Limit how many FavoriteVideos to delete.
     */
    limit?: number
  }

  /**
   * FavoriteVideo without action
   */
  export type FavoriteVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    musicId: number | null
    videoId: number | null
  }

  export type HistorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    musicId: number | null
    videoId: number | null
  }

  export type HistoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    musicId: number | null
    videoId: number | null
    playedAt: Date | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    musicId: number | null
    videoId: number | null
    playedAt: Date | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    userId: number
    musicId: number
    videoId: number
    playedAt: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
    videoId?: true
  }

  export type HistorySumAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
    videoId?: true
  }

  export type HistoryMinAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
    videoId?: true
    playedAt?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
    videoId?: true
    playedAt?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    userId?: true
    musicId?: true
    videoId?: true
    playedAt?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: number
    userId: number
    musicId: number | null
    videoId: number | null
    playedAt: Date
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    musicId?: boolean
    videoId?: boolean
    playedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    music?: boolean | History$musicArgs<ExtArgs>
    video?: boolean | History$videoArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>



  export type HistorySelectScalar = {
    id?: boolean
    userId?: boolean
    musicId?: boolean
    videoId?: boolean
    playedAt?: boolean
  }

  export type HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "musicId" | "videoId" | "playedAt", ExtArgs["result"]["history"]>
  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    music?: boolean | History$musicArgs<ExtArgs>
    video?: boolean | History$videoArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      music: Prisma.$MusicPayload<ExtArgs> | null
      video: Prisma.$VideoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      musicId: number | null
      videoId: number | null
      playedAt: Date
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
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
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    music<T extends History$musicArgs<ExtArgs> = {}>(args?: Subset<T, History$musicArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    video<T extends History$videoArgs<ExtArgs> = {}>(args?: Subset<T, History$videoArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the History model
   */
  interface HistoryFieldRefs {
    readonly id: FieldRef<"History", 'Int'>
    readonly userId: FieldRef<"History", 'Int'>
    readonly musicId: FieldRef<"History", 'Int'>
    readonly videoId: FieldRef<"History", 'Int'>
    readonly playedAt: FieldRef<"History", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to delete.
     */
    limit?: number
  }

  /**
   * History.music
   */
  export type History$musicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    where?: MusicWhereInput
  }

  /**
   * History.video
   */
  export type History$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    release_year: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    release_year: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    thumbnail: string | null
    api_url: string | null
    type: $Enums.VideoType | null
    release_year: number | null
    duration: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    thumbnail: string | null
    api_url: string | null
    type: $Enums.VideoType | null
    release_year: number | null
    duration: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    title: number
    description: number
    thumbnail: number
    api_url: number
    type: number
    release_year: number
    duration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    release_year?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    release_year?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    api_url?: true
    type?: true
    release_year?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    api_url?: true
    type?: true
    release_year?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    api_url?: true
    type?: true
    release_year?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    title: string
    description: string | null
    thumbnail: string | null
    api_url: string
    type: $Enums.VideoType
    release_year: number | null
    duration: string | null
    createdAt: Date
    updatedAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    api_url?: boolean
    type?: boolean
    release_year?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | Video$movieArgs<ExtArgs>
    episodes?: boolean | Video$episodesArgs<ExtArgs>
    favoritesVideo?: boolean | Video$favoritesVideoArgs<ExtArgs>
    history?: boolean | Video$historyArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>



  export type VideoSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    api_url?: boolean
    type?: boolean
    release_year?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "thumbnail" | "api_url" | "type" | "release_year" | "duration" | "createdAt" | "updatedAt", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | Video$movieArgs<ExtArgs>
    episodes?: boolean | Video$episodesArgs<ExtArgs>
    favoritesVideo?: boolean | Video$favoritesVideoArgs<ExtArgs>
    history?: boolean | Video$historyArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs> | null
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      favoritesVideo: Prisma.$FavoriteVideoPayload<ExtArgs>[]
      history: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      thumbnail: string | null
      api_url: string
      type: $Enums.VideoType
      release_year: number | null
      duration: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends Video$movieArgs<ExtArgs> = {}>(args?: Subset<T, Video$movieArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    episodes<T extends Video$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Video$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritesVideo<T extends Video$favoritesVideoArgs<ExtArgs> = {}>(args?: Subset<T, Video$favoritesVideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Video$historyArgs<ExtArgs> = {}>(args?: Subset<T, Video$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly title: FieldRef<"Video", 'String'>
    readonly description: FieldRef<"Video", 'String'>
    readonly thumbnail: FieldRef<"Video", 'String'>
    readonly api_url: FieldRef<"Video", 'String'>
    readonly type: FieldRef<"Video", 'VideoType'>
    readonly release_year: FieldRef<"Video", 'Int'>
    readonly duration: FieldRef<"Video", 'String'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.movie
   */
  export type Video$movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
  }

  /**
   * Video.episodes
   */
  export type Video$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Video.favoritesVideo
   */
  export type Video$favoritesVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteVideo
     */
    select?: FavoriteVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteVideo
     */
    omit?: FavoriteVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteVideoInclude<ExtArgs> | null
    where?: FavoriteVideoWhereInput
    orderBy?: FavoriteVideoOrderByWithRelationInput | FavoriteVideoOrderByWithRelationInput[]
    cursor?: FavoriteVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteVideoScalarFieldEnum | FavoriteVideoScalarFieldEnum[]
  }

  /**
   * Video.history
   */
  export type Video$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    video_id: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    video_id: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    video_id: number | null
    director: string | null
    cast: string | null
    genre: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    video_id: number | null
    director: string | null
    cast: string | null
    genre: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    video_id: number
    director: number
    cast: number
    genre: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    video_id?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    video_id?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    video_id?: true
    director?: true
    cast?: true
    genre?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    video_id?: true
    director?: true
    cast?: true
    genre?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    video_id?: true
    director?: true
    cast?: true
    genre?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    video_id: number
    director: string | null
    cast: string | null
    genre: string | null
    createdAt: Date
    updatedAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_id?: boolean
    director?: boolean
    cast?: boolean
    genre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>



  export type MovieSelectScalar = {
    id?: boolean
    video_id?: boolean
    director?: boolean
    cast?: boolean
    genre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "video_id" | "director" | "cast" | "genre" | "createdAt" | "updatedAt", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      video_id: number
      director: string | null
      cast: string | null
      genre: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'Int'>
    readonly video_id: FieldRef<"Movie", 'Int'>
    readonly director: FieldRef<"Movie", 'String'>
    readonly cast: FieldRef<"Movie", 'String'>
    readonly genre: FieldRef<"Movie", 'String'>
    readonly createdAt: FieldRef<"Movie", 'DateTime'>
    readonly updatedAt: FieldRef<"Movie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model Series
   */

  export type AggregateSeries = {
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  export type SeriesAvgAggregateOutputType = {
    id: number | null
    start_year: number | null
    end_year: number | null
  }

  export type SeriesSumAggregateOutputType = {
    id: number | null
    start_year: number | null
    end_year: number | null
  }

  export type SeriesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    thumbnail: string | null
    start_year: number | null
    end_year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    thumbnail: string | null
    start_year: number | null
    end_year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    thumbnail: number
    start_year: number
    end_year: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeriesAvgAggregateInputType = {
    id?: true
    start_year?: true
    end_year?: true
  }

  export type SeriesSumAggregateInputType = {
    id?: true
    start_year?: true
    end_year?: true
  }

  export type SeriesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    start_year?: true
    end_year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    start_year?: true
    end_year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    start_year?: true
    end_year?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to aggregate.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesMaxAggregateInputType
  }

  export type GetSeriesAggregateType<T extends SeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeries[P]>
      : GetScalarType<T[P], AggregateSeries[P]>
  }




  export type SeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithAggregationInput | SeriesOrderByWithAggregationInput[]
    by: SeriesScalarFieldEnum[] | SeriesScalarFieldEnum
    having?: SeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCountAggregateInputType | true
    _avg?: SeriesAvgAggregateInputType
    _sum?: SeriesSumAggregateInputType
    _min?: SeriesMinAggregateInputType
    _max?: SeriesMaxAggregateInputType
  }

  export type SeriesGroupByOutputType = {
    id: number
    title: string
    description: string | null
    thumbnail: string | null
    start_year: number | null
    end_year: number | null
    createdAt: Date
    updatedAt: Date
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  type GetSeriesGroupByPayload<T extends SeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesGroupByOutputType[P]>
        }
      >
    >


  export type SeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    start_year?: boolean
    end_year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episodes?: boolean | Series$episodesArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>



  export type SeriesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    start_year?: boolean
    end_year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "thumbnail" | "start_year" | "end_year" | "createdAt" | "updatedAt", ExtArgs["result"]["series"]>
  export type SeriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | Series$episodesArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Series"
    objects: {
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      thumbnail: string | null
      start_year: number | null
      end_year: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["series"]>
    composites: {}
  }

  type SeriesGetPayload<S extends boolean | null | undefined | SeriesDefaultArgs> = $Result.GetResult<Prisma.$SeriesPayload, S>

  type SeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeriesCountAggregateInputType | true
    }

  export interface SeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Series'], meta: { name: 'Series' } }
    /**
     * Find zero or one Series that matches the filter.
     * @param {SeriesFindUniqueArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeriesFindUniqueArgs>(args: SelectSubset<T, SeriesFindUniqueArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Series that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeriesFindUniqueOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeriesFindUniqueOrThrowArgs>(args: SelectSubset<T, SeriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeriesFindFirstArgs>(args?: SelectSubset<T, SeriesFindFirstArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeriesFindFirstOrThrowArgs>(args?: SelectSubset<T, SeriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.series.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.series.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesWithIdOnly = await prisma.series.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeriesFindManyArgs>(args?: SelectSubset<T, SeriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Series.
     * @param {SeriesCreateArgs} args - Arguments to create a Series.
     * @example
     * // Create one Series
     * const Series = await prisma.series.create({
     *   data: {
     *     // ... data to create a Series
     *   }
     * })
     * 
     */
    create<T extends SeriesCreateArgs>(args: SelectSubset<T, SeriesCreateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Series.
     * @param {SeriesCreateManyArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeriesCreateManyArgs>(args?: SelectSubset<T, SeriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Series.
     * @param {SeriesDeleteArgs} args - Arguments to delete one Series.
     * @example
     * // Delete one Series
     * const Series = await prisma.series.delete({
     *   where: {
     *     // ... filter to delete one Series
     *   }
     * })
     * 
     */
    delete<T extends SeriesDeleteArgs>(args: SelectSubset<T, SeriesDeleteArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Series.
     * @param {SeriesUpdateArgs} args - Arguments to update one Series.
     * @example
     * // Update one Series
     * const series = await prisma.series.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeriesUpdateArgs>(args: SelectSubset<T, SeriesUpdateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Series.
     * @param {SeriesDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.series.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeriesDeleteManyArgs>(args?: SelectSubset<T, SeriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeriesUpdateManyArgs>(args: SelectSubset<T, SeriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Series.
     * @param {SeriesUpsertArgs} args - Arguments to update or create a Series.
     * @example
     * // Update or create a Series
     * const series = await prisma.series.upsert({
     *   create: {
     *     // ... data to create a Series
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Series we want to update
     *   }
     * })
     */
    upsert<T extends SeriesUpsertArgs>(args: SelectSubset<T, SeriesUpsertArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.series.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SeriesCountArgs>(
      args?: Subset<T, SeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeriesAggregateArgs>(args: Subset<T, SeriesAggregateArgs>): Prisma.PrismaPromise<GetSeriesAggregateType<T>>

    /**
     * Group by Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGroupByArgs} args - Group by arguments.
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
      T extends SeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesGroupByArgs['orderBy'] }
        : { orderBy?: SeriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Series model
   */
  readonly fields: SeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Series.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends Series$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Series$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Series model
   */
  interface SeriesFieldRefs {
    readonly id: FieldRef<"Series", 'Int'>
    readonly title: FieldRef<"Series", 'String'>
    readonly description: FieldRef<"Series", 'String'>
    readonly thumbnail: FieldRef<"Series", 'String'>
    readonly start_year: FieldRef<"Series", 'Int'>
    readonly end_year: FieldRef<"Series", 'Int'>
    readonly createdAt: FieldRef<"Series", 'DateTime'>
    readonly updatedAt: FieldRef<"Series", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Series findUnique
   */
  export type SeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findUniqueOrThrow
   */
  export type SeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findFirst
   */
  export type SeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findFirstOrThrow
   */
  export type SeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findMany
   */
  export type SeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series create
   */
  export type SeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Series.
     */
    data: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
  }

  /**
   * Series createMany
   */
  export type SeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Series update
   */
  export type SeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Series.
     */
    data: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
    /**
     * Choose, which Series to update.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series updateMany
   */
  export type SeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Series upsert
   */
  export type SeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Series to update in case it exists.
     */
    where: SeriesWhereUniqueInput
    /**
     * In case the Series found by the `where` argument doesn't exist, create a new Series with this data.
     */
    create: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
    /**
     * In case the Series was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
  }

  /**
   * Series delete
   */
  export type SeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter which Series to delete.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series deleteMany
   */
  export type SeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to delete.
     */
    limit?: number
  }

  /**
   * Series.episodes
   */
  export type Series$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Series without action
   */
  export type SeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    id: number | null
    video_id: number | null
    series_id: number | null
    season_number: number | null
    episode_number: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    id: number | null
    video_id: number | null
    series_id: number | null
    season_number: number | null
    episode_number: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: number | null
    video_id: number | null
    series_id: number | null
    season_number: number | null
    episode_number: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: number | null
    video_id: number | null
    series_id: number | null
    season_number: number | null
    episode_number: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    video_id: number
    series_id: number
    season_number: number
    episode_number: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    id?: true
    video_id?: true
    series_id?: true
    season_number?: true
    episode_number?: true
  }

  export type EpisodeSumAggregateInputType = {
    id?: true
    video_id?: true
    series_id?: true
    season_number?: true
    episode_number?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    video_id?: true
    series_id?: true
    season_number?: true
    episode_number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    video_id?: true
    series_id?: true
    season_number?: true
    episode_number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    video_id?: true
    series_id?: true
    season_number?: true
    episode_number?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: number
    video_id: number
    series_id: number
    season_number: number
    episode_number: number
    createdAt: Date
    updatedAt: Date
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_id?: boolean
    series_id?: boolean
    season_number?: boolean
    episode_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>



  export type EpisodeSelectScalar = {
    id?: boolean
    video_id?: boolean
    series_id?: boolean
    season_number?: boolean
    episode_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "video_id" | "series_id" | "season_number" | "episode_number" | "createdAt" | "updatedAt", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
      series: Prisma.$SeriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      video_id: number
      series_id: number
      season_number: number
      episode_number: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
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
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    series<T extends SeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeriesDefaultArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'Int'>
    readonly video_id: FieldRef<"Episode", 'Int'>
    readonly series_id: FieldRef<"Episode", 'Int'>
    readonly season_number: FieldRef<"Episode", 'Int'>
    readonly episode_number: FieldRef<"Episode", 'Int'>
    readonly createdAt: FieldRef<"Episode", 'DateTime'>
    readonly updatedAt: FieldRef<"Episode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: number
    name: string
    bio: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    music?: boolean | Artist$musicArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>



  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bio" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    music?: boolean | Artist$musicArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      albums: Prisma.$AlbumPayload<ExtArgs>[]
      music: Prisma.$MusicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      bio: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    albums<T extends Artist$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    music<T extends Artist$musicArgs<ExtArgs> = {}>(args?: Subset<T, Artist$musicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'Int'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly bio: FieldRef<"Artist", 'String'>
    readonly image: FieldRef<"Artist", 'String'>
    readonly createdAt: FieldRef<"Artist", 'DateTime'>
    readonly updatedAt: FieldRef<"Artist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.albums
   */
  export type Artist$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Artist.music
   */
  export type Artist$musicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    where?: MusicWhereInput
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    cursor?: MusicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    artistId: number | null
    releaseYear: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    artistId: number | null
    releaseYear: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    title: string | null
    artistId: number | null
    releaseYear: number | null
    coverImage: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    title: string | null
    artistId: number | null
    releaseYear: number | null
    coverImage: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    artistId: number
    releaseYear: number
    coverImage: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    artistId?: true
    releaseYear?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    artistId?: true
    releaseYear?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
    artistId?: true
    releaseYear?: true
    coverImage?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
    artistId?: true
    releaseYear?: true
    coverImage?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    artistId?: true
    releaseYear?: true
    coverImage?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    title: string
    artistId: number
    releaseYear: number | null
    coverImage: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artistId?: boolean
    releaseYear?: boolean
    coverImage?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    music?: boolean | Album$musicArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>



  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
    artistId?: boolean
    releaseYear?: boolean
    coverImage?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "artistId" | "releaseYear" | "coverImage" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    music?: boolean | Album$musicArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs>
      music: Prisma.$MusicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      artistId: number
      releaseYear: number | null
      coverImage: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    music<T extends Album$musicArgs<ExtArgs> = {}>(args?: Subset<T, Album$musicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'Int'>
    readonly title: FieldRef<"Album", 'String'>
    readonly artistId: FieldRef<"Album", 'Int'>
    readonly releaseYear: FieldRef<"Album", 'Int'>
    readonly coverImage: FieldRef<"Album", 'String'>
    readonly description: FieldRef<"Album", 'String'>
    readonly createdAt: FieldRef<"Album", 'DateTime'>
    readonly updatedAt: FieldRef<"Album", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.music
   */
  export type Album$musicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    where?: MusicWhereInput
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    cursor?: MusicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Music
   */

  export type AggregateMusic = {
    _count: MusicCountAggregateOutputType | null
    _avg: MusicAvgAggregateOutputType | null
    _sum: MusicSumAggregateOutputType | null
    _min: MusicMinAggregateOutputType | null
    _max: MusicMaxAggregateOutputType | null
  }

  export type MusicAvgAggregateOutputType = {
    id: number | null
    albumId: number | null
    artistId: number | null
  }

  export type MusicSumAggregateOutputType = {
    id: number | null
    albumId: number | null
    artistId: number | null
  }

  export type MusicMinAggregateOutputType = {
    id: number | null
    title: string | null
    albumId: number | null
    artistId: number | null
    duration: string | null
    genre: string | null
    apiUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MusicMaxAggregateOutputType = {
    id: number | null
    title: string | null
    albumId: number | null
    artistId: number | null
    duration: string | null
    genre: string | null
    apiUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MusicCountAggregateOutputType = {
    id: number
    title: number
    albumId: number
    artistId: number
    duration: number
    genre: number
    apiUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MusicAvgAggregateInputType = {
    id?: true
    albumId?: true
    artistId?: true
  }

  export type MusicSumAggregateInputType = {
    id?: true
    albumId?: true
    artistId?: true
  }

  export type MusicMinAggregateInputType = {
    id?: true
    title?: true
    albumId?: true
    artistId?: true
    duration?: true
    genre?: true
    apiUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MusicMaxAggregateInputType = {
    id?: true
    title?: true
    albumId?: true
    artistId?: true
    duration?: true
    genre?: true
    apiUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MusicCountAggregateInputType = {
    id?: true
    title?: true
    albumId?: true
    artistId?: true
    duration?: true
    genre?: true
    apiUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MusicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Music to aggregate.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Music
    **/
    _count?: true | MusicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MusicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MusicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicMaxAggregateInputType
  }

  export type GetMusicAggregateType<T extends MusicAggregateArgs> = {
        [P in keyof T & keyof AggregateMusic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusic[P]>
      : GetScalarType<T[P], AggregateMusic[P]>
  }




  export type MusicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicWhereInput
    orderBy?: MusicOrderByWithAggregationInput | MusicOrderByWithAggregationInput[]
    by: MusicScalarFieldEnum[] | MusicScalarFieldEnum
    having?: MusicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicCountAggregateInputType | true
    _avg?: MusicAvgAggregateInputType
    _sum?: MusicSumAggregateInputType
    _min?: MusicMinAggregateInputType
    _max?: MusicMaxAggregateInputType
  }

  export type MusicGroupByOutputType = {
    id: number
    title: string
    albumId: number
    artistId: number
    duration: string | null
    genre: string | null
    apiUrl: string
    createdAt: Date
    updatedAt: Date
    _count: MusicCountAggregateOutputType | null
    _avg: MusicAvgAggregateOutputType | null
    _sum: MusicSumAggregateOutputType | null
    _min: MusicMinAggregateOutputType | null
    _max: MusicMaxAggregateOutputType | null
  }

  type GetMusicGroupByPayload<T extends MusicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicGroupByOutputType[P]>
            : GetScalarType<T[P], MusicGroupByOutputType[P]>
        }
      >
    >


  export type MusicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    albumId?: boolean
    artistId?: boolean
    duration?: boolean
    genre?: boolean
    apiUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    musicPlays?: boolean | Music$musicPlaysArgs<ExtArgs>
    playlists?: boolean | Music$playlistsArgs<ExtArgs>
    favoritesMusic?: boolean | Music$favoritesMusicArgs<ExtArgs>
    history?: boolean | Music$historyArgs<ExtArgs>
    _count?: boolean | MusicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["music"]>



  export type MusicSelectScalar = {
    id?: boolean
    title?: boolean
    albumId?: boolean
    artistId?: boolean
    duration?: boolean
    genre?: boolean
    apiUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MusicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "albumId" | "artistId" | "duration" | "genre" | "apiUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["music"]>
  export type MusicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    musicPlays?: boolean | Music$musicPlaysArgs<ExtArgs>
    playlists?: boolean | Music$playlistsArgs<ExtArgs>
    favoritesMusic?: boolean | Music$favoritesMusicArgs<ExtArgs>
    history?: boolean | Music$historyArgs<ExtArgs>
    _count?: boolean | MusicCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MusicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Music"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>
      artist: Prisma.$ArtistPayload<ExtArgs>
      musicPlays: Prisma.$MusicPlayPayload<ExtArgs>[]
      playlists: Prisma.$PlaylistMusicPayload<ExtArgs>[]
      favoritesMusic: Prisma.$FavoriteMusicPayload<ExtArgs>[]
      history: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      albumId: number
      artistId: number
      duration: string | null
      genre: string | null
      apiUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["music"]>
    composites: {}
  }

  type MusicGetPayload<S extends boolean | null | undefined | MusicDefaultArgs> = $Result.GetResult<Prisma.$MusicPayload, S>

  type MusicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicCountAggregateInputType | true
    }

  export interface MusicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Music'], meta: { name: 'Music' } }
    /**
     * Find zero or one Music that matches the filter.
     * @param {MusicFindUniqueArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicFindUniqueArgs>(args: SelectSubset<T, MusicFindUniqueArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Music that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicFindUniqueOrThrowArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Music that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicFindFirstArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicFindFirstArgs>(args?: SelectSubset<T, MusicFindFirstArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Music that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicFindFirstOrThrowArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Music that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Music
     * const music = await prisma.music.findMany()
     * 
     * // Get first 10 Music
     * const music = await prisma.music.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicWithIdOnly = await prisma.music.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicFindManyArgs>(args?: SelectSubset<T, MusicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Music.
     * @param {MusicCreateArgs} args - Arguments to create a Music.
     * @example
     * // Create one Music
     * const Music = await prisma.music.create({
     *   data: {
     *     // ... data to create a Music
     *   }
     * })
     * 
     */
    create<T extends MusicCreateArgs>(args: SelectSubset<T, MusicCreateArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Music.
     * @param {MusicCreateManyArgs} args - Arguments to create many Music.
     * @example
     * // Create many Music
     * const music = await prisma.music.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicCreateManyArgs>(args?: SelectSubset<T, MusicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Music.
     * @param {MusicDeleteArgs} args - Arguments to delete one Music.
     * @example
     * // Delete one Music
     * const Music = await prisma.music.delete({
     *   where: {
     *     // ... filter to delete one Music
     *   }
     * })
     * 
     */
    delete<T extends MusicDeleteArgs>(args: SelectSubset<T, MusicDeleteArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Music.
     * @param {MusicUpdateArgs} args - Arguments to update one Music.
     * @example
     * // Update one Music
     * const music = await prisma.music.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicUpdateArgs>(args: SelectSubset<T, MusicUpdateArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Music.
     * @param {MusicDeleteManyArgs} args - Arguments to filter Music to delete.
     * @example
     * // Delete a few Music
     * const { count } = await prisma.music.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicDeleteManyArgs>(args?: SelectSubset<T, MusicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Music
     * const music = await prisma.music.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicUpdateManyArgs>(args: SelectSubset<T, MusicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Music.
     * @param {MusicUpsertArgs} args - Arguments to update or create a Music.
     * @example
     * // Update or create a Music
     * const music = await prisma.music.upsert({
     *   create: {
     *     // ... data to create a Music
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Music we want to update
     *   }
     * })
     */
    upsert<T extends MusicUpsertArgs>(args: SelectSubset<T, MusicUpsertArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicCountArgs} args - Arguments to filter Music to count.
     * @example
     * // Count the number of Music
     * const count = await prisma.music.count({
     *   where: {
     *     // ... the filter for the Music we want to count
     *   }
     * })
    **/
    count<T extends MusicCountArgs>(
      args?: Subset<T, MusicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicAggregateArgs>(args: Subset<T, MusicAggregateArgs>): Prisma.PrismaPromise<GetMusicAggregateType<T>>

    /**
     * Group by Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicGroupByArgs} args - Group by arguments.
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
      T extends MusicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicGroupByArgs['orderBy'] }
        : { orderBy?: MusicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MusicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Music model
   */
  readonly fields: MusicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Music.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    musicPlays<T extends Music$musicPlaysArgs<ExtArgs> = {}>(args?: Subset<T, Music$musicPlaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends Music$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, Music$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritesMusic<T extends Music$favoritesMusicArgs<ExtArgs> = {}>(args?: Subset<T, Music$favoritesMusicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteMusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Music$historyArgs<ExtArgs> = {}>(args?: Subset<T, Music$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Music model
   */
  interface MusicFieldRefs {
    readonly id: FieldRef<"Music", 'Int'>
    readonly title: FieldRef<"Music", 'String'>
    readonly albumId: FieldRef<"Music", 'Int'>
    readonly artistId: FieldRef<"Music", 'Int'>
    readonly duration: FieldRef<"Music", 'String'>
    readonly genre: FieldRef<"Music", 'String'>
    readonly apiUrl: FieldRef<"Music", 'String'>
    readonly createdAt: FieldRef<"Music", 'DateTime'>
    readonly updatedAt: FieldRef<"Music", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Music findUnique
   */
  export type MusicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music findUniqueOrThrow
   */
  export type MusicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music findFirst
   */
  export type MusicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Music.
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Music.
     */
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Music findFirstOrThrow
   */
  export type MusicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Music.
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Music.
     */
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Music findMany
   */
  export type MusicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Music.
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Music create
   */
  export type MusicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * The data needed to create a Music.
     */
    data: XOR<MusicCreateInput, MusicUncheckedCreateInput>
  }

  /**
   * Music createMany
   */
  export type MusicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Music.
     */
    data: MusicCreateManyInput | MusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Music update
   */
  export type MusicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * The data needed to update a Music.
     */
    data: XOR<MusicUpdateInput, MusicUncheckedUpdateInput>
    /**
     * Choose, which Music to update.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music updateMany
   */
  export type MusicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Music.
     */
    data: XOR<MusicUpdateManyMutationInput, MusicUncheckedUpdateManyInput>
    /**
     * Filter which Music to update
     */
    where?: MusicWhereInput
    /**
     * Limit how many Music to update.
     */
    limit?: number
  }

  /**
   * Music upsert
   */
  export type MusicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * The filter to search for the Music to update in case it exists.
     */
    where: MusicWhereUniqueInput
    /**
     * In case the Music found by the `where` argument doesn't exist, create a new Music with this data.
     */
    create: XOR<MusicCreateInput, MusicUncheckedCreateInput>
    /**
     * In case the Music was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicUpdateInput, MusicUncheckedUpdateInput>
  }

  /**
   * Music delete
   */
  export type MusicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter which Music to delete.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music deleteMany
   */
  export type MusicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Music to delete
     */
    where?: MusicWhereInput
    /**
     * Limit how many Music to delete.
     */
    limit?: number
  }

  /**
   * Music.musicPlays
   */
  export type Music$musicPlaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    where?: MusicPlayWhereInput
    orderBy?: MusicPlayOrderByWithRelationInput | MusicPlayOrderByWithRelationInput[]
    cursor?: MusicPlayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicPlayScalarFieldEnum | MusicPlayScalarFieldEnum[]
  }

  /**
   * Music.playlists
   */
  export type Music$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    where?: PlaylistMusicWhereInput
    orderBy?: PlaylistMusicOrderByWithRelationInput | PlaylistMusicOrderByWithRelationInput[]
    cursor?: PlaylistMusicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistMusicScalarFieldEnum | PlaylistMusicScalarFieldEnum[]
  }

  /**
   * Music.favoritesMusic
   */
  export type Music$favoritesMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteMusic
     */
    select?: FavoriteMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteMusic
     */
    omit?: FavoriteMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteMusicInclude<ExtArgs> | null
    where?: FavoriteMusicWhereInput
    orderBy?: FavoriteMusicOrderByWithRelationInput | FavoriteMusicOrderByWithRelationInput[]
    cursor?: FavoriteMusicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteMusicScalarFieldEnum | FavoriteMusicScalarFieldEnum[]
  }

  /**
   * Music.history
   */
  export type Music$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Music without action
   */
  export type MusicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Music
     */
    omit?: MusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
  }


  /**
   * Model MusicPlay
   */

  export type AggregateMusicPlay = {
    _count: MusicPlayCountAggregateOutputType | null
    _avg: MusicPlayAvgAggregateOutputType | null
    _sum: MusicPlaySumAggregateOutputType | null
    _min: MusicPlayMinAggregateOutputType | null
    _max: MusicPlayMaxAggregateOutputType | null
  }

  export type MusicPlayAvgAggregateOutputType = {
    id: number | null
    musicId: number | null
    userId: number | null
  }

  export type MusicPlaySumAggregateOutputType = {
    id: number | null
    musicId: number | null
    userId: number | null
  }

  export type MusicPlayMinAggregateOutputType = {
    id: number | null
    musicId: number | null
    playedAt: Date | null
    ip: string | null
    userId: number | null
    device: string | null
  }

  export type MusicPlayMaxAggregateOutputType = {
    id: number | null
    musicId: number | null
    playedAt: Date | null
    ip: string | null
    userId: number | null
    device: string | null
  }

  export type MusicPlayCountAggregateOutputType = {
    id: number
    musicId: number
    playedAt: number
    ip: number
    userId: number
    device: number
    _all: number
  }


  export type MusicPlayAvgAggregateInputType = {
    id?: true
    musicId?: true
    userId?: true
  }

  export type MusicPlaySumAggregateInputType = {
    id?: true
    musicId?: true
    userId?: true
  }

  export type MusicPlayMinAggregateInputType = {
    id?: true
    musicId?: true
    playedAt?: true
    ip?: true
    userId?: true
    device?: true
  }

  export type MusicPlayMaxAggregateInputType = {
    id?: true
    musicId?: true
    playedAt?: true
    ip?: true
    userId?: true
    device?: true
  }

  export type MusicPlayCountAggregateInputType = {
    id?: true
    musicId?: true
    playedAt?: true
    ip?: true
    userId?: true
    device?: true
    _all?: true
  }

  export type MusicPlayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicPlay to aggregate.
     */
    where?: MusicPlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicPlays to fetch.
     */
    orderBy?: MusicPlayOrderByWithRelationInput | MusicPlayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicPlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicPlays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicPlays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MusicPlays
    **/
    _count?: true | MusicPlayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MusicPlayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MusicPlaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicPlayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicPlayMaxAggregateInputType
  }

  export type GetMusicPlayAggregateType<T extends MusicPlayAggregateArgs> = {
        [P in keyof T & keyof AggregateMusicPlay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusicPlay[P]>
      : GetScalarType<T[P], AggregateMusicPlay[P]>
  }




  export type MusicPlayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicPlayWhereInput
    orderBy?: MusicPlayOrderByWithAggregationInput | MusicPlayOrderByWithAggregationInput[]
    by: MusicPlayScalarFieldEnum[] | MusicPlayScalarFieldEnum
    having?: MusicPlayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicPlayCountAggregateInputType | true
    _avg?: MusicPlayAvgAggregateInputType
    _sum?: MusicPlaySumAggregateInputType
    _min?: MusicPlayMinAggregateInputType
    _max?: MusicPlayMaxAggregateInputType
  }

  export type MusicPlayGroupByOutputType = {
    id: number
    musicId: number
    playedAt: Date
    ip: string | null
    userId: number | null
    device: string | null
    _count: MusicPlayCountAggregateOutputType | null
    _avg: MusicPlayAvgAggregateOutputType | null
    _sum: MusicPlaySumAggregateOutputType | null
    _min: MusicPlayMinAggregateOutputType | null
    _max: MusicPlayMaxAggregateOutputType | null
  }

  type GetMusicPlayGroupByPayload<T extends MusicPlayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicPlayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicPlayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicPlayGroupByOutputType[P]>
            : GetScalarType<T[P], MusicPlayGroupByOutputType[P]>
        }
      >
    >


  export type MusicPlaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    musicId?: boolean
    playedAt?: boolean
    ip?: boolean
    userId?: boolean
    device?: boolean
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musicPlay"]>



  export type MusicPlaySelectScalar = {
    id?: boolean
    musicId?: boolean
    playedAt?: boolean
    ip?: boolean
    userId?: boolean
    device?: boolean
  }

  export type MusicPlayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "musicId" | "playedAt" | "ip" | "userId" | "device", ExtArgs["result"]["musicPlay"]>
  export type MusicPlayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }

  export type $MusicPlayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MusicPlay"
    objects: {
      music: Prisma.$MusicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      musicId: number
      playedAt: Date
      ip: string | null
      userId: number | null
      device: string | null
    }, ExtArgs["result"]["musicPlay"]>
    composites: {}
  }

  type MusicPlayGetPayload<S extends boolean | null | undefined | MusicPlayDefaultArgs> = $Result.GetResult<Prisma.$MusicPlayPayload, S>

  type MusicPlayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicPlayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicPlayCountAggregateInputType | true
    }

  export interface MusicPlayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MusicPlay'], meta: { name: 'MusicPlay' } }
    /**
     * Find zero or one MusicPlay that matches the filter.
     * @param {MusicPlayFindUniqueArgs} args - Arguments to find a MusicPlay
     * @example
     * // Get one MusicPlay
     * const musicPlay = await prisma.musicPlay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicPlayFindUniqueArgs>(args: SelectSubset<T, MusicPlayFindUniqueArgs<ExtArgs>>): Prisma__MusicPlayClient<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MusicPlay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicPlayFindUniqueOrThrowArgs} args - Arguments to find a MusicPlay
     * @example
     * // Get one MusicPlay
     * const musicPlay = await prisma.musicPlay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicPlayFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicPlayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicPlayClient<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicPlay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicPlayFindFirstArgs} args - Arguments to find a MusicPlay
     * @example
     * // Get one MusicPlay
     * const musicPlay = await prisma.musicPlay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicPlayFindFirstArgs>(args?: SelectSubset<T, MusicPlayFindFirstArgs<ExtArgs>>): Prisma__MusicPlayClient<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicPlay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicPlayFindFirstOrThrowArgs} args - Arguments to find a MusicPlay
     * @example
     * // Get one MusicPlay
     * const musicPlay = await prisma.musicPlay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicPlayFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicPlayFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicPlayClient<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MusicPlays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicPlayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MusicPlays
     * const musicPlays = await prisma.musicPlay.findMany()
     * 
     * // Get first 10 MusicPlays
     * const musicPlays = await prisma.musicPlay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicPlayWithIdOnly = await prisma.musicPlay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicPlayFindManyArgs>(args?: SelectSubset<T, MusicPlayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MusicPlay.
     * @param {MusicPlayCreateArgs} args - Arguments to create a MusicPlay.
     * @example
     * // Create one MusicPlay
     * const MusicPlay = await prisma.musicPlay.create({
     *   data: {
     *     // ... data to create a MusicPlay
     *   }
     * })
     * 
     */
    create<T extends MusicPlayCreateArgs>(args: SelectSubset<T, MusicPlayCreateArgs<ExtArgs>>): Prisma__MusicPlayClient<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MusicPlays.
     * @param {MusicPlayCreateManyArgs} args - Arguments to create many MusicPlays.
     * @example
     * // Create many MusicPlays
     * const musicPlay = await prisma.musicPlay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicPlayCreateManyArgs>(args?: SelectSubset<T, MusicPlayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MusicPlay.
     * @param {MusicPlayDeleteArgs} args - Arguments to delete one MusicPlay.
     * @example
     * // Delete one MusicPlay
     * const MusicPlay = await prisma.musicPlay.delete({
     *   where: {
     *     // ... filter to delete one MusicPlay
     *   }
     * })
     * 
     */
    delete<T extends MusicPlayDeleteArgs>(args: SelectSubset<T, MusicPlayDeleteArgs<ExtArgs>>): Prisma__MusicPlayClient<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MusicPlay.
     * @param {MusicPlayUpdateArgs} args - Arguments to update one MusicPlay.
     * @example
     * // Update one MusicPlay
     * const musicPlay = await prisma.musicPlay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicPlayUpdateArgs>(args: SelectSubset<T, MusicPlayUpdateArgs<ExtArgs>>): Prisma__MusicPlayClient<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MusicPlays.
     * @param {MusicPlayDeleteManyArgs} args - Arguments to filter MusicPlays to delete.
     * @example
     * // Delete a few MusicPlays
     * const { count } = await prisma.musicPlay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicPlayDeleteManyArgs>(args?: SelectSubset<T, MusicPlayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicPlays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicPlayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MusicPlays
     * const musicPlay = await prisma.musicPlay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicPlayUpdateManyArgs>(args: SelectSubset<T, MusicPlayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MusicPlay.
     * @param {MusicPlayUpsertArgs} args - Arguments to update or create a MusicPlay.
     * @example
     * // Update or create a MusicPlay
     * const musicPlay = await prisma.musicPlay.upsert({
     *   create: {
     *     // ... data to create a MusicPlay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MusicPlay we want to update
     *   }
     * })
     */
    upsert<T extends MusicPlayUpsertArgs>(args: SelectSubset<T, MusicPlayUpsertArgs<ExtArgs>>): Prisma__MusicPlayClient<$Result.GetResult<Prisma.$MusicPlayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MusicPlays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicPlayCountArgs} args - Arguments to filter MusicPlays to count.
     * @example
     * // Count the number of MusicPlays
     * const count = await prisma.musicPlay.count({
     *   where: {
     *     // ... the filter for the MusicPlays we want to count
     *   }
     * })
    **/
    count<T extends MusicPlayCountArgs>(
      args?: Subset<T, MusicPlayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicPlayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MusicPlay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicPlayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicPlayAggregateArgs>(args: Subset<T, MusicPlayAggregateArgs>): Prisma.PrismaPromise<GetMusicPlayAggregateType<T>>

    /**
     * Group by MusicPlay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicPlayGroupByArgs} args - Group by arguments.
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
      T extends MusicPlayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicPlayGroupByArgs['orderBy'] }
        : { orderBy?: MusicPlayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MusicPlayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicPlayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MusicPlay model
   */
  readonly fields: MusicPlayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MusicPlay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicPlayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    music<T extends MusicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MusicDefaultArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MusicPlay model
   */
  interface MusicPlayFieldRefs {
    readonly id: FieldRef<"MusicPlay", 'Int'>
    readonly musicId: FieldRef<"MusicPlay", 'Int'>
    readonly playedAt: FieldRef<"MusicPlay", 'DateTime'>
    readonly ip: FieldRef<"MusicPlay", 'String'>
    readonly userId: FieldRef<"MusicPlay", 'Int'>
    readonly device: FieldRef<"MusicPlay", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MusicPlay findUnique
   */
  export type MusicPlayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    /**
     * Filter, which MusicPlay to fetch.
     */
    where: MusicPlayWhereUniqueInput
  }

  /**
   * MusicPlay findUniqueOrThrow
   */
  export type MusicPlayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    /**
     * Filter, which MusicPlay to fetch.
     */
    where: MusicPlayWhereUniqueInput
  }

  /**
   * MusicPlay findFirst
   */
  export type MusicPlayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    /**
     * Filter, which MusicPlay to fetch.
     */
    where?: MusicPlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicPlays to fetch.
     */
    orderBy?: MusicPlayOrderByWithRelationInput | MusicPlayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicPlays.
     */
    cursor?: MusicPlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicPlays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicPlays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicPlays.
     */
    distinct?: MusicPlayScalarFieldEnum | MusicPlayScalarFieldEnum[]
  }

  /**
   * MusicPlay findFirstOrThrow
   */
  export type MusicPlayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    /**
     * Filter, which MusicPlay to fetch.
     */
    where?: MusicPlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicPlays to fetch.
     */
    orderBy?: MusicPlayOrderByWithRelationInput | MusicPlayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicPlays.
     */
    cursor?: MusicPlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicPlays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicPlays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicPlays.
     */
    distinct?: MusicPlayScalarFieldEnum | MusicPlayScalarFieldEnum[]
  }

  /**
   * MusicPlay findMany
   */
  export type MusicPlayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    /**
     * Filter, which MusicPlays to fetch.
     */
    where?: MusicPlayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicPlays to fetch.
     */
    orderBy?: MusicPlayOrderByWithRelationInput | MusicPlayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MusicPlays.
     */
    cursor?: MusicPlayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicPlays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicPlays.
     */
    skip?: number
    distinct?: MusicPlayScalarFieldEnum | MusicPlayScalarFieldEnum[]
  }

  /**
   * MusicPlay create
   */
  export type MusicPlayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    /**
     * The data needed to create a MusicPlay.
     */
    data: XOR<MusicPlayCreateInput, MusicPlayUncheckedCreateInput>
  }

  /**
   * MusicPlay createMany
   */
  export type MusicPlayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MusicPlays.
     */
    data: MusicPlayCreateManyInput | MusicPlayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MusicPlay update
   */
  export type MusicPlayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    /**
     * The data needed to update a MusicPlay.
     */
    data: XOR<MusicPlayUpdateInput, MusicPlayUncheckedUpdateInput>
    /**
     * Choose, which MusicPlay to update.
     */
    where: MusicPlayWhereUniqueInput
  }

  /**
   * MusicPlay updateMany
   */
  export type MusicPlayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MusicPlays.
     */
    data: XOR<MusicPlayUpdateManyMutationInput, MusicPlayUncheckedUpdateManyInput>
    /**
     * Filter which MusicPlays to update
     */
    where?: MusicPlayWhereInput
    /**
     * Limit how many MusicPlays to update.
     */
    limit?: number
  }

  /**
   * MusicPlay upsert
   */
  export type MusicPlayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    /**
     * The filter to search for the MusicPlay to update in case it exists.
     */
    where: MusicPlayWhereUniqueInput
    /**
     * In case the MusicPlay found by the `where` argument doesn't exist, create a new MusicPlay with this data.
     */
    create: XOR<MusicPlayCreateInput, MusicPlayUncheckedCreateInput>
    /**
     * In case the MusicPlay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicPlayUpdateInput, MusicPlayUncheckedUpdateInput>
  }

  /**
   * MusicPlay delete
   */
  export type MusicPlayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
    /**
     * Filter which MusicPlay to delete.
     */
    where: MusicPlayWhereUniqueInput
  }

  /**
   * MusicPlay deleteMany
   */
  export type MusicPlayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicPlays to delete
     */
    where?: MusicPlayWhereInput
    /**
     * Limit how many MusicPlays to delete.
     */
    limit?: number
  }

  /**
   * MusicPlay without action
   */
  export type MusicPlayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicPlay
     */
    select?: MusicPlaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicPlay
     */
    omit?: MusicPlayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicPlayInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    userId: number | null
    isPublic: boolean | null
    coverImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    userId: number | null
    isPublic: boolean | null
    coverImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    title: number
    description: number
    userId: number
    isPublic: number
    coverImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PlaylistSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    isPublic?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    isPublic?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    isPublic?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: number
    title: string
    description: string | null
    userId: number | null
    isPublic: boolean
    coverImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    isPublic?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    music?: boolean | Playlist$musicArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>



  export type PlaylistSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    isPublic?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "userId" | "isPublic" | "coverImage" | "createdAt" | "updatedAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    music?: boolean | Playlist$musicArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      music: Prisma.$PlaylistMusicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      userId: number | null
      isPublic: boolean
      coverImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
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
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    music<T extends Playlist$musicArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$musicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'Int'>
    readonly title: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly userId: FieldRef<"Playlist", 'Int'>
    readonly isPublic: FieldRef<"Playlist", 'Boolean'>
    readonly coverImage: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.music
   */
  export type Playlist$musicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    where?: PlaylistMusicWhereInput
    orderBy?: PlaylistMusicOrderByWithRelationInput | PlaylistMusicOrderByWithRelationInput[]
    cursor?: PlaylistMusicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistMusicScalarFieldEnum | PlaylistMusicScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistMusic
   */

  export type AggregatePlaylistMusic = {
    _count: PlaylistMusicCountAggregateOutputType | null
    _avg: PlaylistMusicAvgAggregateOutputType | null
    _sum: PlaylistMusicSumAggregateOutputType | null
    _min: PlaylistMusicMinAggregateOutputType | null
    _max: PlaylistMusicMaxAggregateOutputType | null
  }

  export type PlaylistMusicAvgAggregateOutputType = {
    id: number | null
    playlistId: number | null
    musicId: number | null
    sortOrder: number | null
  }

  export type PlaylistMusicSumAggregateOutputType = {
    id: number | null
    playlistId: number | null
    musicId: number | null
    sortOrder: number | null
  }

  export type PlaylistMusicMinAggregateOutputType = {
    id: number | null
    playlistId: number | null
    musicId: number | null
    sortOrder: number | null
    addedAt: Date | null
  }

  export type PlaylistMusicMaxAggregateOutputType = {
    id: number | null
    playlistId: number | null
    musicId: number | null
    sortOrder: number | null
    addedAt: Date | null
  }

  export type PlaylistMusicCountAggregateOutputType = {
    id: number
    playlistId: number
    musicId: number
    sortOrder: number
    addedAt: number
    _all: number
  }


  export type PlaylistMusicAvgAggregateInputType = {
    id?: true
    playlistId?: true
    musicId?: true
    sortOrder?: true
  }

  export type PlaylistMusicSumAggregateInputType = {
    id?: true
    playlistId?: true
    musicId?: true
    sortOrder?: true
  }

  export type PlaylistMusicMinAggregateInputType = {
    id?: true
    playlistId?: true
    musicId?: true
    sortOrder?: true
    addedAt?: true
  }

  export type PlaylistMusicMaxAggregateInputType = {
    id?: true
    playlistId?: true
    musicId?: true
    sortOrder?: true
    addedAt?: true
  }

  export type PlaylistMusicCountAggregateInputType = {
    id?: true
    playlistId?: true
    musicId?: true
    sortOrder?: true
    addedAt?: true
    _all?: true
  }

  export type PlaylistMusicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistMusic to aggregate.
     */
    where?: PlaylistMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistMusics to fetch.
     */
    orderBy?: PlaylistMusicOrderByWithRelationInput | PlaylistMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistMusics
    **/
    _count?: true | PlaylistMusicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistMusicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistMusicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMusicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMusicMaxAggregateInputType
  }

  export type GetPlaylistMusicAggregateType<T extends PlaylistMusicAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistMusic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistMusic[P]>
      : GetScalarType<T[P], AggregatePlaylistMusic[P]>
  }




  export type PlaylistMusicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistMusicWhereInput
    orderBy?: PlaylistMusicOrderByWithAggregationInput | PlaylistMusicOrderByWithAggregationInput[]
    by: PlaylistMusicScalarFieldEnum[] | PlaylistMusicScalarFieldEnum
    having?: PlaylistMusicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistMusicCountAggregateInputType | true
    _avg?: PlaylistMusicAvgAggregateInputType
    _sum?: PlaylistMusicSumAggregateInputType
    _min?: PlaylistMusicMinAggregateInputType
    _max?: PlaylistMusicMaxAggregateInputType
  }

  export type PlaylistMusicGroupByOutputType = {
    id: number
    playlistId: number
    musicId: number
    sortOrder: number
    addedAt: Date
    _count: PlaylistMusicCountAggregateOutputType | null
    _avg: PlaylistMusicAvgAggregateOutputType | null
    _sum: PlaylistMusicSumAggregateOutputType | null
    _min: PlaylistMusicMinAggregateOutputType | null
    _max: PlaylistMusicMaxAggregateOutputType | null
  }

  type GetPlaylistMusicGroupByPayload<T extends PlaylistMusicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistMusicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistMusicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistMusicGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistMusicGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistMusicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    musicId?: boolean
    sortOrder?: boolean
    addedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistMusic"]>



  export type PlaylistMusicSelectScalar = {
    id?: boolean
    playlistId?: boolean
    musicId?: boolean
    sortOrder?: boolean
    addedAt?: boolean
  }

  export type PlaylistMusicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlistId" | "musicId" | "sortOrder" | "addedAt", ExtArgs["result"]["playlistMusic"]>
  export type PlaylistMusicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }

  export type $PlaylistMusicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistMusic"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      music: Prisma.$MusicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playlistId: number
      musicId: number
      sortOrder: number
      addedAt: Date
    }, ExtArgs["result"]["playlistMusic"]>
    composites: {}
  }

  type PlaylistMusicGetPayload<S extends boolean | null | undefined | PlaylistMusicDefaultArgs> = $Result.GetResult<Prisma.$PlaylistMusicPayload, S>

  type PlaylistMusicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistMusicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistMusicCountAggregateInputType | true
    }

  export interface PlaylistMusicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistMusic'], meta: { name: 'PlaylistMusic' } }
    /**
     * Find zero or one PlaylistMusic that matches the filter.
     * @param {PlaylistMusicFindUniqueArgs} args - Arguments to find a PlaylistMusic
     * @example
     * // Get one PlaylistMusic
     * const playlistMusic = await prisma.playlistMusic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistMusicFindUniqueArgs>(args: SelectSubset<T, PlaylistMusicFindUniqueArgs<ExtArgs>>): Prisma__PlaylistMusicClient<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaylistMusic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistMusicFindUniqueOrThrowArgs} args - Arguments to find a PlaylistMusic
     * @example
     * // Get one PlaylistMusic
     * const playlistMusic = await prisma.playlistMusic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistMusicFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistMusicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistMusicClient<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistMusic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMusicFindFirstArgs} args - Arguments to find a PlaylistMusic
     * @example
     * // Get one PlaylistMusic
     * const playlistMusic = await prisma.playlistMusic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistMusicFindFirstArgs>(args?: SelectSubset<T, PlaylistMusicFindFirstArgs<ExtArgs>>): Prisma__PlaylistMusicClient<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistMusic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMusicFindFirstOrThrowArgs} args - Arguments to find a PlaylistMusic
     * @example
     * // Get one PlaylistMusic
     * const playlistMusic = await prisma.playlistMusic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistMusicFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistMusicFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistMusicClient<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaylistMusics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMusicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistMusics
     * const playlistMusics = await prisma.playlistMusic.findMany()
     * 
     * // Get first 10 PlaylistMusics
     * const playlistMusics = await prisma.playlistMusic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistMusicWithIdOnly = await prisma.playlistMusic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistMusicFindManyArgs>(args?: SelectSubset<T, PlaylistMusicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaylistMusic.
     * @param {PlaylistMusicCreateArgs} args - Arguments to create a PlaylistMusic.
     * @example
     * // Create one PlaylistMusic
     * const PlaylistMusic = await prisma.playlistMusic.create({
     *   data: {
     *     // ... data to create a PlaylistMusic
     *   }
     * })
     * 
     */
    create<T extends PlaylistMusicCreateArgs>(args: SelectSubset<T, PlaylistMusicCreateArgs<ExtArgs>>): Prisma__PlaylistMusicClient<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaylistMusics.
     * @param {PlaylistMusicCreateManyArgs} args - Arguments to create many PlaylistMusics.
     * @example
     * // Create many PlaylistMusics
     * const playlistMusic = await prisma.playlistMusic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistMusicCreateManyArgs>(args?: SelectSubset<T, PlaylistMusicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlaylistMusic.
     * @param {PlaylistMusicDeleteArgs} args - Arguments to delete one PlaylistMusic.
     * @example
     * // Delete one PlaylistMusic
     * const PlaylistMusic = await prisma.playlistMusic.delete({
     *   where: {
     *     // ... filter to delete one PlaylistMusic
     *   }
     * })
     * 
     */
    delete<T extends PlaylistMusicDeleteArgs>(args: SelectSubset<T, PlaylistMusicDeleteArgs<ExtArgs>>): Prisma__PlaylistMusicClient<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaylistMusic.
     * @param {PlaylistMusicUpdateArgs} args - Arguments to update one PlaylistMusic.
     * @example
     * // Update one PlaylistMusic
     * const playlistMusic = await prisma.playlistMusic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistMusicUpdateArgs>(args: SelectSubset<T, PlaylistMusicUpdateArgs<ExtArgs>>): Prisma__PlaylistMusicClient<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaylistMusics.
     * @param {PlaylistMusicDeleteManyArgs} args - Arguments to filter PlaylistMusics to delete.
     * @example
     * // Delete a few PlaylistMusics
     * const { count } = await prisma.playlistMusic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistMusicDeleteManyArgs>(args?: SelectSubset<T, PlaylistMusicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMusicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistMusics
     * const playlistMusic = await prisma.playlistMusic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistMusicUpdateManyArgs>(args: SelectSubset<T, PlaylistMusicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlaylistMusic.
     * @param {PlaylistMusicUpsertArgs} args - Arguments to update or create a PlaylistMusic.
     * @example
     * // Update or create a PlaylistMusic
     * const playlistMusic = await prisma.playlistMusic.upsert({
     *   create: {
     *     // ... data to create a PlaylistMusic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistMusic we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistMusicUpsertArgs>(args: SelectSubset<T, PlaylistMusicUpsertArgs<ExtArgs>>): Prisma__PlaylistMusicClient<$Result.GetResult<Prisma.$PlaylistMusicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaylistMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMusicCountArgs} args - Arguments to filter PlaylistMusics to count.
     * @example
     * // Count the number of PlaylistMusics
     * const count = await prisma.playlistMusic.count({
     *   where: {
     *     // ... the filter for the PlaylistMusics we want to count
     *   }
     * })
    **/
    count<T extends PlaylistMusicCountArgs>(
      args?: Subset<T, PlaylistMusicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistMusicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMusicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistMusicAggregateArgs>(args: Subset<T, PlaylistMusicAggregateArgs>): Prisma.PrismaPromise<GetPlaylistMusicAggregateType<T>>

    /**
     * Group by PlaylistMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMusicGroupByArgs} args - Group by arguments.
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
      T extends PlaylistMusicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistMusicGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistMusicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistMusicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistMusicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistMusic model
   */
  readonly fields: PlaylistMusicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistMusic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistMusicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    music<T extends MusicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MusicDefaultArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlaylistMusic model
   */
  interface PlaylistMusicFieldRefs {
    readonly id: FieldRef<"PlaylistMusic", 'Int'>
    readonly playlistId: FieldRef<"PlaylistMusic", 'Int'>
    readonly musicId: FieldRef<"PlaylistMusic", 'Int'>
    readonly sortOrder: FieldRef<"PlaylistMusic", 'Int'>
    readonly addedAt: FieldRef<"PlaylistMusic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistMusic findUnique
   */
  export type PlaylistMusicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistMusic to fetch.
     */
    where: PlaylistMusicWhereUniqueInput
  }

  /**
   * PlaylistMusic findUniqueOrThrow
   */
  export type PlaylistMusicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistMusic to fetch.
     */
    where: PlaylistMusicWhereUniqueInput
  }

  /**
   * PlaylistMusic findFirst
   */
  export type PlaylistMusicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistMusic to fetch.
     */
    where?: PlaylistMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistMusics to fetch.
     */
    orderBy?: PlaylistMusicOrderByWithRelationInput | PlaylistMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistMusics.
     */
    cursor?: PlaylistMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistMusics.
     */
    distinct?: PlaylistMusicScalarFieldEnum | PlaylistMusicScalarFieldEnum[]
  }

  /**
   * PlaylistMusic findFirstOrThrow
   */
  export type PlaylistMusicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistMusic to fetch.
     */
    where?: PlaylistMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistMusics to fetch.
     */
    orderBy?: PlaylistMusicOrderByWithRelationInput | PlaylistMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistMusics.
     */
    cursor?: PlaylistMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistMusics.
     */
    distinct?: PlaylistMusicScalarFieldEnum | PlaylistMusicScalarFieldEnum[]
  }

  /**
   * PlaylistMusic findMany
   */
  export type PlaylistMusicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistMusics to fetch.
     */
    where?: PlaylistMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistMusics to fetch.
     */
    orderBy?: PlaylistMusicOrderByWithRelationInput | PlaylistMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistMusics.
     */
    cursor?: PlaylistMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistMusics.
     */
    skip?: number
    distinct?: PlaylistMusicScalarFieldEnum | PlaylistMusicScalarFieldEnum[]
  }

  /**
   * PlaylistMusic create
   */
  export type PlaylistMusicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistMusic.
     */
    data: XOR<PlaylistMusicCreateInput, PlaylistMusicUncheckedCreateInput>
  }

  /**
   * PlaylistMusic createMany
   */
  export type PlaylistMusicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistMusics.
     */
    data: PlaylistMusicCreateManyInput | PlaylistMusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaylistMusic update
   */
  export type PlaylistMusicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistMusic.
     */
    data: XOR<PlaylistMusicUpdateInput, PlaylistMusicUncheckedUpdateInput>
    /**
     * Choose, which PlaylistMusic to update.
     */
    where: PlaylistMusicWhereUniqueInput
  }

  /**
   * PlaylistMusic updateMany
   */
  export type PlaylistMusicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistMusics.
     */
    data: XOR<PlaylistMusicUpdateManyMutationInput, PlaylistMusicUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistMusics to update
     */
    where?: PlaylistMusicWhereInput
    /**
     * Limit how many PlaylistMusics to update.
     */
    limit?: number
  }

  /**
   * PlaylistMusic upsert
   */
  export type PlaylistMusicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistMusic to update in case it exists.
     */
    where: PlaylistMusicWhereUniqueInput
    /**
     * In case the PlaylistMusic found by the `where` argument doesn't exist, create a new PlaylistMusic with this data.
     */
    create: XOR<PlaylistMusicCreateInput, PlaylistMusicUncheckedCreateInput>
    /**
     * In case the PlaylistMusic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistMusicUpdateInput, PlaylistMusicUncheckedUpdateInput>
  }

  /**
   * PlaylistMusic delete
   */
  export type PlaylistMusicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
    /**
     * Filter which PlaylistMusic to delete.
     */
    where: PlaylistMusicWhereUniqueInput
  }

  /**
   * PlaylistMusic deleteMany
   */
  export type PlaylistMusicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistMusics to delete
     */
    where?: PlaylistMusicWhereInput
    /**
     * Limit how many PlaylistMusics to delete.
     */
    limit?: number
  }

  /**
   * PlaylistMusic without action
   */
  export type PlaylistMusicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistMusic
     */
    select?: PlaylistMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistMusic
     */
    omit?: PlaylistMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistMusicInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    googleId: 'googleId',
    picture: 'picture'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FavoriteMusicScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    musicId: 'musicId',
    createdAt: 'createdAt'
  };

  export type FavoriteMusicScalarFieldEnum = (typeof FavoriteMusicScalarFieldEnum)[keyof typeof FavoriteMusicScalarFieldEnum]


  export const FavoriteVideoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    videoId: 'videoId',
    createdAt: 'createdAt'
  };

  export type FavoriteVideoScalarFieldEnum = (typeof FavoriteVideoScalarFieldEnum)[keyof typeof FavoriteVideoScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    musicId: 'musicId',
    videoId: 'videoId',
    playedAt: 'playedAt'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    api_url: 'api_url',
    type: 'type',
    release_year: 'release_year',
    duration: 'duration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    video_id: 'video_id',
    director: 'director',
    cast: 'cast',
    genre: 'genre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const SeriesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    start_year: 'start_year',
    end_year: 'end_year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeriesScalarFieldEnum = (typeof SeriesScalarFieldEnum)[keyof typeof SeriesScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    video_id: 'video_id',
    series_id: 'series_id',
    season_number: 'season_number',
    episode_number: 'episode_number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bio: 'bio',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    artistId: 'artistId',
    releaseYear: 'releaseYear',
    coverImage: 'coverImage',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const MusicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    albumId: 'albumId',
    artistId: 'artistId',
    duration: 'duration',
    genre: 'genre',
    apiUrl: 'apiUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MusicScalarFieldEnum = (typeof MusicScalarFieldEnum)[keyof typeof MusicScalarFieldEnum]


  export const MusicPlayScalarFieldEnum: {
    id: 'id',
    musicId: 'musicId',
    playedAt: 'playedAt',
    ip: 'ip',
    userId: 'userId',
    device: 'device'
  };

  export type MusicPlayScalarFieldEnum = (typeof MusicPlayScalarFieldEnum)[keyof typeof MusicPlayScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId',
    isPublic: 'isPublic',
    coverImage: 'coverImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const PlaylistMusicScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    musicId: 'musicId',
    sortOrder: 'sortOrder',
    addedAt: 'addedAt'
  };

  export type PlaylistMusicScalarFieldEnum = (typeof PlaylistMusicScalarFieldEnum)[keyof typeof PlaylistMusicScalarFieldEnum]


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


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password',
    googleId: 'googleId',
    picture: 'picture'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VideoOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    api_url: 'api_url',
    duration: 'duration'
  };

  export type VideoOrderByRelevanceFieldEnum = (typeof VideoOrderByRelevanceFieldEnum)[keyof typeof VideoOrderByRelevanceFieldEnum]


  export const MovieOrderByRelevanceFieldEnum: {
    director: 'director',
    cast: 'cast',
    genre: 'genre'
  };

  export type MovieOrderByRelevanceFieldEnum = (typeof MovieOrderByRelevanceFieldEnum)[keyof typeof MovieOrderByRelevanceFieldEnum]


  export const SeriesOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail'
  };

  export type SeriesOrderByRelevanceFieldEnum = (typeof SeriesOrderByRelevanceFieldEnum)[keyof typeof SeriesOrderByRelevanceFieldEnum]


  export const ArtistOrderByRelevanceFieldEnum: {
    name: 'name',
    bio: 'bio',
    image: 'image'
  };

  export type ArtistOrderByRelevanceFieldEnum = (typeof ArtistOrderByRelevanceFieldEnum)[keyof typeof ArtistOrderByRelevanceFieldEnum]


  export const AlbumOrderByRelevanceFieldEnum: {
    title: 'title',
    coverImage: 'coverImage',
    description: 'description'
  };

  export type AlbumOrderByRelevanceFieldEnum = (typeof AlbumOrderByRelevanceFieldEnum)[keyof typeof AlbumOrderByRelevanceFieldEnum]


  export const MusicOrderByRelevanceFieldEnum: {
    title: 'title',
    duration: 'duration',
    genre: 'genre',
    apiUrl: 'apiUrl'
  };

  export type MusicOrderByRelevanceFieldEnum = (typeof MusicOrderByRelevanceFieldEnum)[keyof typeof MusicOrderByRelevanceFieldEnum]


  export const MusicPlayOrderByRelevanceFieldEnum: {
    ip: 'ip',
    device: 'device'
  };

  export type MusicPlayOrderByRelevanceFieldEnum = (typeof MusicPlayOrderByRelevanceFieldEnum)[keyof typeof MusicPlayOrderByRelevanceFieldEnum]


  export const PlaylistOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    coverImage: 'coverImage'
  };

  export type PlaylistOrderByRelevanceFieldEnum = (typeof PlaylistOrderByRelevanceFieldEnum)[keyof typeof PlaylistOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'VideoType'
   */
  export type EnumVideoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    googleId?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    favoritesMusic?: FavoriteMusicListRelationFilter
    favoritesVideo?: FavoriteVideoListRelationFilter
    history?: HistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    picture?: SortOrderInput | SortOrder
    favoritesMusic?: FavoriteMusicOrderByRelationAggregateInput
    favoritesVideo?: FavoriteVideoOrderByRelationAggregateInput
    history?: HistoryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    picture?: StringNullableFilter<"User"> | string | null
    favoritesMusic?: FavoriteMusicListRelationFilter
    favoritesVideo?: FavoriteVideoListRelationFilter
    history?: HistoryListRelationFilter
  }, "id" | "username" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    picture?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    googleId?: StringWithAggregatesFilter<"User"> | string
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type FavoriteMusicWhereInput = {
    AND?: FavoriteMusicWhereInput | FavoriteMusicWhereInput[]
    OR?: FavoriteMusicWhereInput[]
    NOT?: FavoriteMusicWhereInput | FavoriteMusicWhereInput[]
    id?: IntFilter<"FavoriteMusic"> | number
    userId?: IntFilter<"FavoriteMusic"> | number
    musicId?: IntFilter<"FavoriteMusic"> | number
    createdAt?: DateTimeFilter<"FavoriteMusic"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }

  export type FavoriteMusicOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    music?: MusicOrderByWithRelationInput
  }

  export type FavoriteMusicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoriteMusicWhereInput | FavoriteMusicWhereInput[]
    OR?: FavoriteMusicWhereInput[]
    NOT?: FavoriteMusicWhereInput | FavoriteMusicWhereInput[]
    userId?: IntFilter<"FavoriteMusic"> | number
    musicId?: IntFilter<"FavoriteMusic"> | number
    createdAt?: DateTimeFilter<"FavoriteMusic"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }, "id">

  export type FavoriteMusicOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteMusicCountOrderByAggregateInput
    _avg?: FavoriteMusicAvgOrderByAggregateInput
    _max?: FavoriteMusicMaxOrderByAggregateInput
    _min?: FavoriteMusicMinOrderByAggregateInput
    _sum?: FavoriteMusicSumOrderByAggregateInput
  }

  export type FavoriteMusicScalarWhereWithAggregatesInput = {
    AND?: FavoriteMusicScalarWhereWithAggregatesInput | FavoriteMusicScalarWhereWithAggregatesInput[]
    OR?: FavoriteMusicScalarWhereWithAggregatesInput[]
    NOT?: FavoriteMusicScalarWhereWithAggregatesInput | FavoriteMusicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FavoriteMusic"> | number
    userId?: IntWithAggregatesFilter<"FavoriteMusic"> | number
    musicId?: IntWithAggregatesFilter<"FavoriteMusic"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FavoriteMusic"> | Date | string
  }

  export type FavoriteVideoWhereInput = {
    AND?: FavoriteVideoWhereInput | FavoriteVideoWhereInput[]
    OR?: FavoriteVideoWhereInput[]
    NOT?: FavoriteVideoWhereInput | FavoriteVideoWhereInput[]
    id?: IntFilter<"FavoriteVideo"> | number
    userId?: IntFilter<"FavoriteVideo"> | number
    videoId?: IntFilter<"FavoriteVideo"> | number
    createdAt?: DateTimeFilter<"FavoriteVideo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type FavoriteVideoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type FavoriteVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoriteVideoWhereInput | FavoriteVideoWhereInput[]
    OR?: FavoriteVideoWhereInput[]
    NOT?: FavoriteVideoWhereInput | FavoriteVideoWhereInput[]
    userId?: IntFilter<"FavoriteVideo"> | number
    videoId?: IntFilter<"FavoriteVideo"> | number
    createdAt?: DateTimeFilter<"FavoriteVideo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type FavoriteVideoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteVideoCountOrderByAggregateInput
    _avg?: FavoriteVideoAvgOrderByAggregateInput
    _max?: FavoriteVideoMaxOrderByAggregateInput
    _min?: FavoriteVideoMinOrderByAggregateInput
    _sum?: FavoriteVideoSumOrderByAggregateInput
  }

  export type FavoriteVideoScalarWhereWithAggregatesInput = {
    AND?: FavoriteVideoScalarWhereWithAggregatesInput | FavoriteVideoScalarWhereWithAggregatesInput[]
    OR?: FavoriteVideoScalarWhereWithAggregatesInput[]
    NOT?: FavoriteVideoScalarWhereWithAggregatesInput | FavoriteVideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FavoriteVideo"> | number
    userId?: IntWithAggregatesFilter<"FavoriteVideo"> | number
    videoId?: IntWithAggregatesFilter<"FavoriteVideo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FavoriteVideo"> | Date | string
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id?: IntFilter<"History"> | number
    userId?: IntFilter<"History"> | number
    musicId?: IntNullableFilter<"History"> | number | null
    videoId?: IntNullableFilter<"History"> | number | null
    playedAt?: DateTimeFilter<"History"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    music?: XOR<MusicNullableScalarRelationFilter, MusicWhereInput> | null
    video?: XOR<VideoNullableScalarRelationFilter, VideoWhereInput> | null
  }

  export type HistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    music?: MusicOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    userId?: IntFilter<"History"> | number
    musicId?: IntNullableFilter<"History"> | number | null
    videoId?: IntNullableFilter<"History"> | number | null
    playedAt?: DateTimeFilter<"History"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    music?: XOR<MusicNullableScalarRelationFilter, MusicWhereInput> | null
    video?: XOR<VideoNullableScalarRelationFilter, VideoWhereInput> | null
  }, "id">

  export type HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"History"> | number
    userId?: IntWithAggregatesFilter<"History"> | number
    musicId?: IntNullableWithAggregatesFilter<"History"> | number | null
    videoId?: IntNullableWithAggregatesFilter<"History"> | number | null
    playedAt?: DateTimeWithAggregatesFilter<"History"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    thumbnail?: StringNullableFilter<"Video"> | string | null
    api_url?: StringFilter<"Video"> | string
    type?: EnumVideoTypeFilter<"Video"> | $Enums.VideoType
    release_year?: IntNullableFilter<"Video"> | number | null
    duration?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    movie?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
    episodes?: EpisodeListRelationFilter
    favoritesVideo?: FavoriteVideoListRelationFilter
    history?: HistoryListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    api_url?: SortOrder
    type?: SortOrder
    release_year?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    episodes?: EpisodeOrderByRelationAggregateInput
    favoritesVideo?: FavoriteVideoOrderByRelationAggregateInput
    history?: HistoryOrderByRelationAggregateInput
    _relevance?: VideoOrderByRelevanceInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    thumbnail?: StringNullableFilter<"Video"> | string | null
    api_url?: StringFilter<"Video"> | string
    type?: EnumVideoTypeFilter<"Video"> | $Enums.VideoType
    release_year?: IntNullableFilter<"Video"> | number | null
    duration?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    movie?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
    episodes?: EpisodeListRelationFilter
    favoritesVideo?: FavoriteVideoListRelationFilter
    history?: HistoryListRelationFilter
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    api_url?: SortOrder
    type?: SortOrder
    release_year?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    title?: StringWithAggregatesFilter<"Video"> | string
    description?: StringNullableWithAggregatesFilter<"Video"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Video"> | string | null
    api_url?: StringWithAggregatesFilter<"Video"> | string
    type?: EnumVideoTypeWithAggregatesFilter<"Video"> | $Enums.VideoType
    release_year?: IntNullableWithAggregatesFilter<"Video"> | number | null
    duration?: StringNullableWithAggregatesFilter<"Video"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: IntFilter<"Movie"> | number
    video_id?: IntFilter<"Movie"> | number
    director?: StringNullableFilter<"Movie"> | string | null
    cast?: StringNullableFilter<"Movie"> | string | null
    genre?: StringNullableFilter<"Movie"> | string | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    video_id?: SortOrder
    director?: SortOrderInput | SortOrder
    cast?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    video?: VideoOrderByWithRelationInput
    _relevance?: MovieOrderByRelevanceInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    video_id?: number
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    director?: StringNullableFilter<"Movie"> | string | null
    cast?: StringNullableFilter<"Movie"> | string | null
    genre?: StringNullableFilter<"Movie"> | string | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id" | "video_id">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    video_id?: SortOrder
    director?: SortOrderInput | SortOrder
    cast?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movie"> | number
    video_id?: IntWithAggregatesFilter<"Movie"> | number
    director?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    cast?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    genre?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type SeriesWhereInput = {
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    id?: IntFilter<"Series"> | number
    title?: StringFilter<"Series"> | string
    description?: StringNullableFilter<"Series"> | string | null
    thumbnail?: StringNullableFilter<"Series"> | string | null
    start_year?: IntNullableFilter<"Series"> | number | null
    end_year?: IntNullableFilter<"Series"> | number | null
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    episodes?: EpisodeListRelationFilter
  }

  export type SeriesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    start_year?: SortOrderInput | SortOrder
    end_year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    episodes?: EpisodeOrderByRelationAggregateInput
    _relevance?: SeriesOrderByRelevanceInput
  }

  export type SeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    title?: StringFilter<"Series"> | string
    description?: StringNullableFilter<"Series"> | string | null
    thumbnail?: StringNullableFilter<"Series"> | string | null
    start_year?: IntNullableFilter<"Series"> | number | null
    end_year?: IntNullableFilter<"Series"> | number | null
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    episodes?: EpisodeListRelationFilter
  }, "id">

  export type SeriesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    start_year?: SortOrderInput | SortOrder
    end_year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeriesCountOrderByAggregateInput
    _avg?: SeriesAvgOrderByAggregateInput
    _max?: SeriesMaxOrderByAggregateInput
    _min?: SeriesMinOrderByAggregateInput
    _sum?: SeriesSumOrderByAggregateInput
  }

  export type SeriesScalarWhereWithAggregatesInput = {
    AND?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    OR?: SeriesScalarWhereWithAggregatesInput[]
    NOT?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Series"> | number
    title?: StringWithAggregatesFilter<"Series"> | string
    description?: StringNullableWithAggregatesFilter<"Series"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Series"> | string | null
    start_year?: IntNullableWithAggregatesFilter<"Series"> | number | null
    end_year?: IntNullableWithAggregatesFilter<"Series"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: IntFilter<"Episode"> | number
    video_id?: IntFilter<"Episode"> | number
    series_id?: IntFilter<"Episode"> | number
    season_number?: IntFilter<"Episode"> | number
    episode_number?: IntFilter<"Episode"> | number
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    video_id?: SortOrder
    series_id?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    video?: VideoOrderByWithRelationInput
    series?: SeriesOrderByWithRelationInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    video_id?: IntFilter<"Episode"> | number
    series_id?: IntFilter<"Episode"> | number
    season_number?: IntFilter<"Episode"> | number
    episode_number?: IntFilter<"Episode"> | number
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
  }, "id">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    video_id?: SortOrder
    series_id?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Episode"> | number
    video_id?: IntWithAggregatesFilter<"Episode"> | number
    series_id?: IntWithAggregatesFilter<"Episode"> | number
    season_number?: IntWithAggregatesFilter<"Episode"> | number
    episode_number?: IntWithAggregatesFilter<"Episode"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: IntFilter<"Artist"> | number
    name?: StringFilter<"Artist"> | string
    bio?: StringNullableFilter<"Artist"> | string | null
    image?: StringNullableFilter<"Artist"> | string | null
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    albums?: AlbumListRelationFilter
    music?: MusicListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    albums?: AlbumOrderByRelationAggregateInput
    music?: MusicOrderByRelationAggregateInput
    _relevance?: ArtistOrderByRelevanceInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    bio?: StringNullableFilter<"Artist"> | string | null
    image?: StringNullableFilter<"Artist"> | string | null
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    albums?: AlbumListRelationFilter
    music?: MusicListRelationFilter
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artist"> | number
    name?: StringWithAggregatesFilter<"Artist"> | string
    bio?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    image?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: IntFilter<"Album"> | number
    title?: StringFilter<"Album"> | string
    artistId?: IntFilter<"Album"> | number
    releaseYear?: IntNullableFilter<"Album"> | number | null
    coverImage?: StringNullableFilter<"Album"> | string | null
    description?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    music?: MusicListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    releaseYear?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artist?: ArtistOrderByWithRelationInput
    music?: MusicOrderByRelationAggregateInput
    _relevance?: AlbumOrderByRelevanceInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    title?: StringFilter<"Album"> | string
    artistId?: IntFilter<"Album"> | number
    releaseYear?: IntNullableFilter<"Album"> | number | null
    coverImage?: StringNullableFilter<"Album"> | string | null
    description?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    music?: MusicListRelationFilter
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    releaseYear?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Album"> | number
    title?: StringWithAggregatesFilter<"Album"> | string
    artistId?: IntWithAggregatesFilter<"Album"> | number
    releaseYear?: IntNullableWithAggregatesFilter<"Album"> | number | null
    coverImage?: StringNullableWithAggregatesFilter<"Album"> | string | null
    description?: StringNullableWithAggregatesFilter<"Album"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
  }

  export type MusicWhereInput = {
    AND?: MusicWhereInput | MusicWhereInput[]
    OR?: MusicWhereInput[]
    NOT?: MusicWhereInput | MusicWhereInput[]
    id?: IntFilter<"Music"> | number
    title?: StringFilter<"Music"> | string
    albumId?: IntFilter<"Music"> | number
    artistId?: IntFilter<"Music"> | number
    duration?: StringNullableFilter<"Music"> | string | null
    genre?: StringNullableFilter<"Music"> | string | null
    apiUrl?: StringFilter<"Music"> | string
    createdAt?: DateTimeFilter<"Music"> | Date | string
    updatedAt?: DateTimeFilter<"Music"> | Date | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    musicPlays?: MusicPlayListRelationFilter
    playlists?: PlaylistMusicListRelationFilter
    favoritesMusic?: FavoriteMusicListRelationFilter
    history?: HistoryListRelationFilter
  }

  export type MusicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
    duration?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    apiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    album?: AlbumOrderByWithRelationInput
    artist?: ArtistOrderByWithRelationInput
    musicPlays?: MusicPlayOrderByRelationAggregateInput
    playlists?: PlaylistMusicOrderByRelationAggregateInput
    favoritesMusic?: FavoriteMusicOrderByRelationAggregateInput
    history?: HistoryOrderByRelationAggregateInput
    _relevance?: MusicOrderByRelevanceInput
  }

  export type MusicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MusicWhereInput | MusicWhereInput[]
    OR?: MusicWhereInput[]
    NOT?: MusicWhereInput | MusicWhereInput[]
    title?: StringFilter<"Music"> | string
    albumId?: IntFilter<"Music"> | number
    artistId?: IntFilter<"Music"> | number
    duration?: StringNullableFilter<"Music"> | string | null
    genre?: StringNullableFilter<"Music"> | string | null
    apiUrl?: StringFilter<"Music"> | string
    createdAt?: DateTimeFilter<"Music"> | Date | string
    updatedAt?: DateTimeFilter<"Music"> | Date | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    musicPlays?: MusicPlayListRelationFilter
    playlists?: PlaylistMusicListRelationFilter
    favoritesMusic?: FavoriteMusicListRelationFilter
    history?: HistoryListRelationFilter
  }, "id">

  export type MusicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
    duration?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    apiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MusicCountOrderByAggregateInput
    _avg?: MusicAvgOrderByAggregateInput
    _max?: MusicMaxOrderByAggregateInput
    _min?: MusicMinOrderByAggregateInput
    _sum?: MusicSumOrderByAggregateInput
  }

  export type MusicScalarWhereWithAggregatesInput = {
    AND?: MusicScalarWhereWithAggregatesInput | MusicScalarWhereWithAggregatesInput[]
    OR?: MusicScalarWhereWithAggregatesInput[]
    NOT?: MusicScalarWhereWithAggregatesInput | MusicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Music"> | number
    title?: StringWithAggregatesFilter<"Music"> | string
    albumId?: IntWithAggregatesFilter<"Music"> | number
    artistId?: IntWithAggregatesFilter<"Music"> | number
    duration?: StringNullableWithAggregatesFilter<"Music"> | string | null
    genre?: StringNullableWithAggregatesFilter<"Music"> | string | null
    apiUrl?: StringWithAggregatesFilter<"Music"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Music"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Music"> | Date | string
  }

  export type MusicPlayWhereInput = {
    AND?: MusicPlayWhereInput | MusicPlayWhereInput[]
    OR?: MusicPlayWhereInput[]
    NOT?: MusicPlayWhereInput | MusicPlayWhereInput[]
    id?: IntFilter<"MusicPlay"> | number
    musicId?: IntFilter<"MusicPlay"> | number
    playedAt?: DateTimeFilter<"MusicPlay"> | Date | string
    ip?: StringNullableFilter<"MusicPlay"> | string | null
    userId?: IntNullableFilter<"MusicPlay"> | number | null
    device?: StringNullableFilter<"MusicPlay"> | string | null
    music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }

  export type MusicPlayOrderByWithRelationInput = {
    id?: SortOrder
    musicId?: SortOrder
    playedAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    music?: MusicOrderByWithRelationInput
    _relevance?: MusicPlayOrderByRelevanceInput
  }

  export type MusicPlayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MusicPlayWhereInput | MusicPlayWhereInput[]
    OR?: MusicPlayWhereInput[]
    NOT?: MusicPlayWhereInput | MusicPlayWhereInput[]
    musicId?: IntFilter<"MusicPlay"> | number
    playedAt?: DateTimeFilter<"MusicPlay"> | Date | string
    ip?: StringNullableFilter<"MusicPlay"> | string | null
    userId?: IntNullableFilter<"MusicPlay"> | number | null
    device?: StringNullableFilter<"MusicPlay"> | string | null
    music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }, "id">

  export type MusicPlayOrderByWithAggregationInput = {
    id?: SortOrder
    musicId?: SortOrder
    playedAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    _count?: MusicPlayCountOrderByAggregateInput
    _avg?: MusicPlayAvgOrderByAggregateInput
    _max?: MusicPlayMaxOrderByAggregateInput
    _min?: MusicPlayMinOrderByAggregateInput
    _sum?: MusicPlaySumOrderByAggregateInput
  }

  export type MusicPlayScalarWhereWithAggregatesInput = {
    AND?: MusicPlayScalarWhereWithAggregatesInput | MusicPlayScalarWhereWithAggregatesInput[]
    OR?: MusicPlayScalarWhereWithAggregatesInput[]
    NOT?: MusicPlayScalarWhereWithAggregatesInput | MusicPlayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MusicPlay"> | number
    musicId?: IntWithAggregatesFilter<"MusicPlay"> | number
    playedAt?: DateTimeWithAggregatesFilter<"MusicPlay"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"MusicPlay"> | string | null
    userId?: IntNullableWithAggregatesFilter<"MusicPlay"> | number | null
    device?: StringNullableWithAggregatesFilter<"MusicPlay"> | string | null
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: IntFilter<"Playlist"> | number
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    userId?: IntNullableFilter<"Playlist"> | number | null
    isPublic?: BoolFilter<"Playlist"> | boolean
    coverImage?: StringNullableFilter<"Playlist"> | string | null
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    music?: PlaylistMusicListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    music?: PlaylistMusicOrderByRelationAggregateInput
    _relevance?: PlaylistOrderByRelevanceInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    userId?: IntNullableFilter<"Playlist"> | number | null
    isPublic?: BoolFilter<"Playlist"> | boolean
    coverImage?: StringNullableFilter<"Playlist"> | string | null
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    music?: PlaylistMusicListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Playlist"> | number
    title?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    userId?: IntNullableWithAggregatesFilter<"Playlist"> | number | null
    isPublic?: BoolWithAggregatesFilter<"Playlist"> | boolean
    coverImage?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type PlaylistMusicWhereInput = {
    AND?: PlaylistMusicWhereInput | PlaylistMusicWhereInput[]
    OR?: PlaylistMusicWhereInput[]
    NOT?: PlaylistMusicWhereInput | PlaylistMusicWhereInput[]
    id?: IntFilter<"PlaylistMusic"> | number
    playlistId?: IntFilter<"PlaylistMusic"> | number
    musicId?: IntFilter<"PlaylistMusic"> | number
    sortOrder?: IntFilter<"PlaylistMusic"> | number
    addedAt?: DateTimeFilter<"PlaylistMusic"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }

  export type PlaylistMusicOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    musicId?: SortOrder
    sortOrder?: SortOrder
    addedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    music?: MusicOrderByWithRelationInput
  }

  export type PlaylistMusicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playlistId_musicId?: PlaylistMusicPlaylistIdMusicIdCompoundUniqueInput
    AND?: PlaylistMusicWhereInput | PlaylistMusicWhereInput[]
    OR?: PlaylistMusicWhereInput[]
    NOT?: PlaylistMusicWhereInput | PlaylistMusicWhereInput[]
    playlistId?: IntFilter<"PlaylistMusic"> | number
    musicId?: IntFilter<"PlaylistMusic"> | number
    sortOrder?: IntFilter<"PlaylistMusic"> | number
    addedAt?: DateTimeFilter<"PlaylistMusic"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    music?: XOR<MusicScalarRelationFilter, MusicWhereInput>
  }, "id" | "playlistId_musicId">

  export type PlaylistMusicOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    musicId?: SortOrder
    sortOrder?: SortOrder
    addedAt?: SortOrder
    _count?: PlaylistMusicCountOrderByAggregateInput
    _avg?: PlaylistMusicAvgOrderByAggregateInput
    _max?: PlaylistMusicMaxOrderByAggregateInput
    _min?: PlaylistMusicMinOrderByAggregateInput
    _sum?: PlaylistMusicSumOrderByAggregateInput
  }

  export type PlaylistMusicScalarWhereWithAggregatesInput = {
    AND?: PlaylistMusicScalarWhereWithAggregatesInput | PlaylistMusicScalarWhereWithAggregatesInput[]
    OR?: PlaylistMusicScalarWhereWithAggregatesInput[]
    NOT?: PlaylistMusicScalarWhereWithAggregatesInput | PlaylistMusicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlaylistMusic"> | number
    playlistId?: IntWithAggregatesFilter<"PlaylistMusic"> | number
    musicId?: IntWithAggregatesFilter<"PlaylistMusic"> | number
    sortOrder?: IntWithAggregatesFilter<"PlaylistMusic"> | number
    addedAt?: DateTimeWithAggregatesFilter<"PlaylistMusic"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId: string
    picture?: string | null
    favoritesMusic?: FavoriteMusicCreateNestedManyWithoutUserInput
    favoritesVideo?: FavoriteVideoCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId: string
    picture?: string | null
    favoritesMusic?: FavoriteMusicUncheckedCreateNestedManyWithoutUserInput
    favoritesVideo?: FavoriteVideoUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    favoritesMusic?: FavoriteMusicUpdateManyWithoutUserNestedInput
    favoritesVideo?: FavoriteVideoUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    favoritesMusic?: FavoriteMusicUncheckedUpdateManyWithoutUserNestedInput
    favoritesVideo?: FavoriteVideoUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId: string
    picture?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteMusicCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesMusicInput
    music: MusicCreateNestedOneWithoutFavoritesMusicInput
  }

  export type FavoriteMusicUncheckedCreateInput = {
    id?: number
    userId: number
    musicId: number
    createdAt?: Date | string
  }

  export type FavoriteMusicUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesMusicNestedInput
    music?: MusicUpdateOneRequiredWithoutFavoritesMusicNestedInput
  }

  export type FavoriteMusicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteMusicCreateManyInput = {
    id?: number
    userId: number
    musicId: number
    createdAt?: Date | string
  }

  export type FavoriteMusicUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteMusicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteVideoCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesVideoInput
    video: VideoCreateNestedOneWithoutFavoritesVideoInput
  }

  export type FavoriteVideoUncheckedCreateInput = {
    id?: number
    userId: number
    videoId: number
    createdAt?: Date | string
  }

  export type FavoriteVideoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesVideoNestedInput
    video?: VideoUpdateOneRequiredWithoutFavoritesVideoNestedInput
  }

  export type FavoriteVideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteVideoCreateManyInput = {
    id?: number
    userId: number
    videoId: number
    createdAt?: Date | string
  }

  export type FavoriteVideoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteVideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateInput = {
    playedAt?: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
    music?: MusicCreateNestedOneWithoutHistoryInput
    video?: VideoCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateInput = {
    id?: number
    userId: number
    musicId?: number | null
    videoId?: number | null
    playedAt?: Date | string
  }

  export type HistoryUpdateInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
    music?: MusicUpdateOneWithoutHistoryNestedInput
    video?: VideoUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    musicId?: NullableIntFieldUpdateOperationsInput | number | null
    videoId?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateManyInput = {
    id?: number
    userId: number
    musicId?: number | null
    videoId?: number | null
    playedAt?: Date | string
  }

  export type HistoryUpdateManyMutationInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    musicId?: NullableIntFieldUpdateOperationsInput | number | null
    videoId?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie?: MovieCreateNestedOneWithoutVideoInput
    episodes?: EpisodeCreateNestedManyWithoutVideoInput
    favoritesVideo?: FavoriteVideoCreateNestedManyWithoutVideoInput
    history?: HistoryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie?: MovieUncheckedCreateNestedOneWithoutVideoInput
    episodes?: EpisodeUncheckedCreateNestedManyWithoutVideoInput
    favoritesVideo?: FavoriteVideoUncheckedCreateNestedManyWithoutVideoInput
    history?: HistoryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneWithoutVideoNestedInput
    episodes?: EpisodeUpdateManyWithoutVideoNestedInput
    favoritesVideo?: FavoriteVideoUpdateManyWithoutVideoNestedInput
    history?: HistoryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUncheckedUpdateOneWithoutVideoNestedInput
    episodes?: EpisodeUncheckedUpdateManyWithoutVideoNestedInput
    favoritesVideo?: FavoriteVideoUncheckedUpdateManyWithoutVideoNestedInput
    history?: HistoryUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateInput = {
    director?: string | null
    cast?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: number
    video_id: number
    director?: string | null
    cast?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUpdateInput = {
    director?: NullableStringFieldUpdateOperationsInput | string | null
    cast?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_id?: IntFieldUpdateOperationsInput | number
    director?: NullableStringFieldUpdateOperationsInput | string | null
    cast?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateManyInput = {
    id?: number
    video_id: number
    director?: string | null
    cast?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    director?: NullableStringFieldUpdateOperationsInput | string | null
    cast?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_id?: IntFieldUpdateOperationsInput | number
    director?: NullableStringFieldUpdateOperationsInput | string | null
    cast?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCreateInput = {
    title: string
    description?: string | null
    thumbnail?: string | null
    start_year?: number | null
    end_year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    thumbnail?: string | null
    start_year?: number | null
    end_year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    start_year?: NullableIntFieldUpdateOperationsInput | number | null
    end_year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    start_year?: NullableIntFieldUpdateOperationsInput | number | null
    end_year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    thumbnail?: string | null
    start_year?: number | null
    end_year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    start_year?: NullableIntFieldUpdateOperationsInput | number | null
    end_year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    start_year?: NullableIntFieldUpdateOperationsInput | number | null
    end_year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateInput = {
    season_number: number
    episode_number: number
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutEpisodesInput
    series: SeriesCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: number
    video_id: number
    series_id: number
    season_number: number
    episode_number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUpdateInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutEpisodesNestedInput
    series?: SeriesUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_id?: IntFieldUpdateOperationsInput | number
    series_id?: IntFieldUpdateOperationsInput | number
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateManyInput = {
    id?: number
    video_id: number
    series_id: number
    season_number: number
    episode_number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUpdateManyMutationInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_id?: IntFieldUpdateOperationsInput | number
    series_id?: IntFieldUpdateOperationsInput | number
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistCreateInput = {
    name: string
    bio?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumCreateNestedManyWithoutArtistInput
    music?: MusicCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: number
    name: string
    bio?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    music?: MusicUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    music?: MusicUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    music?: MusicUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: number
    name: string
    bio?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateInput = {
    title: string
    releaseYear?: number | null
    coverImage?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artist: ArtistCreateNestedOneWithoutAlbumsInput
    music?: MusicCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    title: string
    artistId: number
    releaseYear?: number | null
    coverImage?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    music?: MusicUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutAlbumsNestedInput
    music?: MusicUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artistId?: IntFieldUpdateOperationsInput | number
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: MusicUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: number
    title: string
    artistId: number
    releaseYear?: number | null
    coverImage?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artistId?: IntFieldUpdateOperationsInput | number
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicCreateInput = {
    title: string
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutMusicInput
    artist: ArtistCreateNestedOneWithoutMusicInput
    musicPlays?: MusicPlayCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicCreateNestedManyWithoutMusicInput
    history?: HistoryCreateNestedManyWithoutMusicInput
  }

  export type MusicUncheckedCreateInput = {
    id?: number
    title: string
    albumId: number
    artistId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicPlays?: MusicPlayUncheckedCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicUncheckedCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicUncheckedCreateNestedManyWithoutMusicInput
    history?: HistoryUncheckedCreateNestedManyWithoutMusicInput
  }

  export type MusicUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutMusicNestedInput
    artist?: ArtistUpdateOneRequiredWithoutMusicNestedInput
    musicPlays?: MusicPlayUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUpdateManyWithoutMusicNestedInput
    history?: HistoryUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicPlays?: MusicPlayUncheckedUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUncheckedUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUncheckedUpdateManyWithoutMusicNestedInput
    history?: HistoryUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type MusicCreateManyInput = {
    id?: number
    title: string
    albumId: number
    artistId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MusicUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicPlayCreateInput = {
    playedAt?: Date | string
    ip?: string | null
    userId?: number | null
    device?: string | null
    music: MusicCreateNestedOneWithoutMusicPlaysInput
  }

  export type MusicPlayUncheckedCreateInput = {
    id?: number
    musicId: number
    playedAt?: Date | string
    ip?: string | null
    userId?: number | null
    device?: string | null
  }

  export type MusicPlayUpdateInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    music?: MusicUpdateOneRequiredWithoutMusicPlaysNestedInput
  }

  export type MusicPlayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicPlayCreateManyInput = {
    id?: number
    musicId: number
    playedAt?: Date | string
    ip?: string | null
    userId?: number | null
    device?: string | null
  }

  export type MusicPlayUpdateManyMutationInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicPlayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistCreateInput = {
    title: string
    description?: string | null
    userId?: number | null
    isPublic?: boolean
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    music?: PlaylistMusicCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    userId?: number | null
    isPublic?: boolean
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    music?: PlaylistMusicUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: PlaylistMusicUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: PlaylistMusicUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    userId?: number | null
    isPublic?: boolean
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistMusicCreateInput = {
    sortOrder?: number
    addedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutMusicInput
    music: MusicCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistMusicUncheckedCreateInput = {
    id?: number
    playlistId: number
    musicId: number
    sortOrder?: number
    addedAt?: Date | string
  }

  export type PlaylistMusicUpdateInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutMusicNestedInput
    music?: MusicUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistMusicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistMusicCreateManyInput = {
    id?: number
    playlistId: number
    musicId: number
    sortOrder?: number
    addedAt?: Date | string
  }

  export type PlaylistMusicUpdateManyMutationInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistMusicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FavoriteMusicListRelationFilter = {
    every?: FavoriteMusicWhereInput
    some?: FavoriteMusicWhereInput
    none?: FavoriteMusicWhereInput
  }

  export type FavoriteVideoListRelationFilter = {
    every?: FavoriteVideoWhereInput
    some?: FavoriteVideoWhereInput
    none?: FavoriteVideoWhereInput
  }

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FavoriteMusicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteVideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    picture?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    picture?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    picture?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MusicScalarRelationFilter = {
    is?: MusicWhereInput
    isNot?: MusicWhereInput
  }

  export type FavoriteMusicCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMusicAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
  }

  export type FavoriteMusicMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMusicMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMusicSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type FavoriteVideoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteVideoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type FavoriteVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteVideoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteVideoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
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

  export type MusicNullableScalarRelationFilter = {
    is?: MusicWhereInput | null
    isNot?: MusicWhereInput | null
  }

  export type VideoNullableScalarRelationFilter = {
    is?: VideoWhereInput | null
    isNot?: VideoWhereInput | null
  }

  export type HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    videoId?: SortOrder
    playedAt?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    videoId?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    videoId?: SortOrder
    playedAt?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    videoId?: SortOrder
    playedAt?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    musicId?: SortOrder
    videoId?: SortOrder
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

  export type EnumVideoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoType | EnumVideoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VideoType[]
    notIn?: $Enums.VideoType[]
    not?: NestedEnumVideoTypeFilter<$PrismaModel> | $Enums.VideoType
  }

  export type MovieNullableScalarRelationFilter = {
    is?: MovieWhereInput | null
    isNot?: MovieWhereInput | null
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelevanceInput = {
    fields: VideoOrderByRelevanceFieldEnum | VideoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    api_url?: SortOrder
    type?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    release_year?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    api_url?: SortOrder
    type?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    api_url?: SortOrder
    type?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    release_year?: SortOrder
  }

  export type EnumVideoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoType | EnumVideoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VideoType[]
    notIn?: $Enums.VideoType[]
    not?: NestedEnumVideoTypeWithAggregatesFilter<$PrismaModel> | $Enums.VideoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoTypeFilter<$PrismaModel>
    _max?: NestedEnumVideoTypeFilter<$PrismaModel>
  }

  export type MovieOrderByRelevanceInput = {
    fields: MovieOrderByRelevanceFieldEnum | MovieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    director?: SortOrder
    cast?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    director?: SortOrder
    cast?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    director?: SortOrder
    cast?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
  }

  export type SeriesOrderByRelevanceInput = {
    fields: SeriesOrderByRelevanceFieldEnum | SeriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeriesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    start_year?: SortOrder
    end_year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesAvgOrderByAggregateInput = {
    id?: SortOrder
    start_year?: SortOrder
    end_year?: SortOrder
  }

  export type SeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    start_year?: SortOrder
    end_year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    start_year?: SortOrder
    end_year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesSumOrderByAggregateInput = {
    id?: SortOrder
    start_year?: SortOrder
    end_year?: SortOrder
  }

  export type SeriesScalarRelationFilter = {
    is?: SeriesWhereInput
    isNot?: SeriesWhereInput
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    series_id?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    series_id?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    series_id?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    series_id?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    series_id?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type MusicListRelationFilter = {
    every?: MusicWhereInput
    some?: MusicWhereInput
    none?: MusicWhereInput
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MusicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistOrderByRelevanceInput = {
    fields: ArtistOrderByRelevanceFieldEnum | ArtistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type AlbumOrderByRelevanceInput = {
    fields: AlbumOrderByRelevanceFieldEnum | AlbumOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    releaseYear?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    releaseYear?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    releaseYear?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artistId?: SortOrder
    releaseYear?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    releaseYear?: SortOrder
  }

  export type AlbumScalarRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type MusicPlayListRelationFilter = {
    every?: MusicPlayWhereInput
    some?: MusicPlayWhereInput
    none?: MusicPlayWhereInput
  }

  export type PlaylistMusicListRelationFilter = {
    every?: PlaylistMusicWhereInput
    some?: PlaylistMusicWhereInput
    none?: PlaylistMusicWhereInput
  }

  export type MusicPlayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistMusicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MusicOrderByRelevanceInput = {
    fields: MusicOrderByRelevanceFieldEnum | MusicOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MusicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    apiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MusicAvgOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
  }

  export type MusicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    apiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MusicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    apiUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MusicSumOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
  }

  export type MusicPlayOrderByRelevanceInput = {
    fields: MusicPlayOrderByRelevanceFieldEnum | MusicPlayOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MusicPlayCountOrderByAggregateInput = {
    id?: SortOrder
    musicId?: SortOrder
    playedAt?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    device?: SortOrder
  }

  export type MusicPlayAvgOrderByAggregateInput = {
    id?: SortOrder
    musicId?: SortOrder
    userId?: SortOrder
  }

  export type MusicPlayMaxOrderByAggregateInput = {
    id?: SortOrder
    musicId?: SortOrder
    playedAt?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    device?: SortOrder
  }

  export type MusicPlayMinOrderByAggregateInput = {
    id?: SortOrder
    musicId?: SortOrder
    playedAt?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    device?: SortOrder
  }

  export type MusicPlaySumOrderByAggregateInput = {
    id?: SortOrder
    musicId?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlaylistOrderByRelevanceInput = {
    fields: PlaylistOrderByRelevanceFieldEnum | PlaylistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type PlaylistMusicPlaylistIdMusicIdCompoundUniqueInput = {
    playlistId: number
    musicId: number
  }

  export type PlaylistMusicCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    musicId?: SortOrder
    sortOrder?: SortOrder
    addedAt?: SortOrder
  }

  export type PlaylistMusicAvgOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    musicId?: SortOrder
    sortOrder?: SortOrder
  }

  export type PlaylistMusicMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    musicId?: SortOrder
    sortOrder?: SortOrder
    addedAt?: SortOrder
  }

  export type PlaylistMusicMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    musicId?: SortOrder
    sortOrder?: SortOrder
    addedAt?: SortOrder
  }

  export type PlaylistMusicSumOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    musicId?: SortOrder
    sortOrder?: SortOrder
  }

  export type FavoriteMusicCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteMusicCreateWithoutUserInput, FavoriteMusicUncheckedCreateWithoutUserInput> | FavoriteMusicCreateWithoutUserInput[] | FavoriteMusicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteMusicCreateOrConnectWithoutUserInput | FavoriteMusicCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteMusicCreateManyUserInputEnvelope
    connect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
  }

  export type FavoriteVideoCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteVideoCreateWithoutUserInput, FavoriteVideoUncheckedCreateWithoutUserInput> | FavoriteVideoCreateWithoutUserInput[] | FavoriteVideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteVideoCreateOrConnectWithoutUserInput | FavoriteVideoCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteVideoCreateManyUserInputEnvelope
    connect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type FavoriteMusicUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteMusicCreateWithoutUserInput, FavoriteMusicUncheckedCreateWithoutUserInput> | FavoriteMusicCreateWithoutUserInput[] | FavoriteMusicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteMusicCreateOrConnectWithoutUserInput | FavoriteMusicCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteMusicCreateManyUserInputEnvelope
    connect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
  }

  export type FavoriteVideoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteVideoCreateWithoutUserInput, FavoriteVideoUncheckedCreateWithoutUserInput> | FavoriteVideoCreateWithoutUserInput[] | FavoriteVideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteVideoCreateOrConnectWithoutUserInput | FavoriteVideoCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteVideoCreateManyUserInputEnvelope
    connect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FavoriteMusicUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteMusicCreateWithoutUserInput, FavoriteMusicUncheckedCreateWithoutUserInput> | FavoriteMusicCreateWithoutUserInput[] | FavoriteMusicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteMusicCreateOrConnectWithoutUserInput | FavoriteMusicCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteMusicUpsertWithWhereUniqueWithoutUserInput | FavoriteMusicUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteMusicCreateManyUserInputEnvelope
    set?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    disconnect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    delete?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    connect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    update?: FavoriteMusicUpdateWithWhereUniqueWithoutUserInput | FavoriteMusicUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteMusicUpdateManyWithWhereWithoutUserInput | FavoriteMusicUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteMusicScalarWhereInput | FavoriteMusicScalarWhereInput[]
  }

  export type FavoriteVideoUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteVideoCreateWithoutUserInput, FavoriteVideoUncheckedCreateWithoutUserInput> | FavoriteVideoCreateWithoutUserInput[] | FavoriteVideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteVideoCreateOrConnectWithoutUserInput | FavoriteVideoCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteVideoUpsertWithWhereUniqueWithoutUserInput | FavoriteVideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteVideoCreateManyUserInputEnvelope
    set?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    disconnect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    delete?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    connect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    update?: FavoriteVideoUpdateWithWhereUniqueWithoutUserInput | FavoriteVideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteVideoUpdateManyWithWhereWithoutUserInput | FavoriteVideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteVideoScalarWhereInput | FavoriteVideoScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavoriteMusicUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteMusicCreateWithoutUserInput, FavoriteMusicUncheckedCreateWithoutUserInput> | FavoriteMusicCreateWithoutUserInput[] | FavoriteMusicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteMusicCreateOrConnectWithoutUserInput | FavoriteMusicCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteMusicUpsertWithWhereUniqueWithoutUserInput | FavoriteMusicUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteMusicCreateManyUserInputEnvelope
    set?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    disconnect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    delete?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    connect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    update?: FavoriteMusicUpdateWithWhereUniqueWithoutUserInput | FavoriteMusicUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteMusicUpdateManyWithWhereWithoutUserInput | FavoriteMusicUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteMusicScalarWhereInput | FavoriteMusicScalarWhereInput[]
  }

  export type FavoriteVideoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteVideoCreateWithoutUserInput, FavoriteVideoUncheckedCreateWithoutUserInput> | FavoriteVideoCreateWithoutUserInput[] | FavoriteVideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteVideoCreateOrConnectWithoutUserInput | FavoriteVideoCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteVideoUpsertWithWhereUniqueWithoutUserInput | FavoriteVideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteVideoCreateManyUserInputEnvelope
    set?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    disconnect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    delete?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    connect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    update?: FavoriteVideoUpdateWithWhereUniqueWithoutUserInput | FavoriteVideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteVideoUpdateManyWithWhereWithoutUserInput | FavoriteVideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteVideoScalarWhereInput | FavoriteVideoScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoritesMusicInput = {
    create?: XOR<UserCreateWithoutFavoritesMusicInput, UserUncheckedCreateWithoutFavoritesMusicInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesMusicInput
    connect?: UserWhereUniqueInput
  }

  export type MusicCreateNestedOneWithoutFavoritesMusicInput = {
    create?: XOR<MusicCreateWithoutFavoritesMusicInput, MusicUncheckedCreateWithoutFavoritesMusicInput>
    connectOrCreate?: MusicCreateOrConnectWithoutFavoritesMusicInput
    connect?: MusicWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesMusicNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesMusicInput, UserUncheckedCreateWithoutFavoritesMusicInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesMusicInput
    upsert?: UserUpsertWithoutFavoritesMusicInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesMusicInput, UserUpdateWithoutFavoritesMusicInput>, UserUncheckedUpdateWithoutFavoritesMusicInput>
  }

  export type MusicUpdateOneRequiredWithoutFavoritesMusicNestedInput = {
    create?: XOR<MusicCreateWithoutFavoritesMusicInput, MusicUncheckedCreateWithoutFavoritesMusicInput>
    connectOrCreate?: MusicCreateOrConnectWithoutFavoritesMusicInput
    upsert?: MusicUpsertWithoutFavoritesMusicInput
    connect?: MusicWhereUniqueInput
    update?: XOR<XOR<MusicUpdateToOneWithWhereWithoutFavoritesMusicInput, MusicUpdateWithoutFavoritesMusicInput>, MusicUncheckedUpdateWithoutFavoritesMusicInput>
  }

  export type UserCreateNestedOneWithoutFavoritesVideoInput = {
    create?: XOR<UserCreateWithoutFavoritesVideoInput, UserUncheckedCreateWithoutFavoritesVideoInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesVideoInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutFavoritesVideoInput = {
    create?: XOR<VideoCreateWithoutFavoritesVideoInput, VideoUncheckedCreateWithoutFavoritesVideoInput>
    connectOrCreate?: VideoCreateOrConnectWithoutFavoritesVideoInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesVideoNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesVideoInput, UserUncheckedCreateWithoutFavoritesVideoInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesVideoInput
    upsert?: UserUpsertWithoutFavoritesVideoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesVideoInput, UserUpdateWithoutFavoritesVideoInput>, UserUncheckedUpdateWithoutFavoritesVideoInput>
  }

  export type VideoUpdateOneRequiredWithoutFavoritesVideoNestedInput = {
    create?: XOR<VideoCreateWithoutFavoritesVideoInput, VideoUncheckedCreateWithoutFavoritesVideoInput>
    connectOrCreate?: VideoCreateOrConnectWithoutFavoritesVideoInput
    upsert?: VideoUpsertWithoutFavoritesVideoInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutFavoritesVideoInput, VideoUpdateWithoutFavoritesVideoInput>, VideoUncheckedUpdateWithoutFavoritesVideoInput>
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type MusicCreateNestedOneWithoutHistoryInput = {
    create?: XOR<MusicCreateWithoutHistoryInput, MusicUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: MusicCreateOrConnectWithoutHistoryInput
    connect?: MusicWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutHistoryInput = {
    create?: XOR<VideoCreateWithoutHistoryInput, VideoUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: VideoCreateOrConnectWithoutHistoryInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type MusicUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<MusicCreateWithoutHistoryInput, MusicUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: MusicCreateOrConnectWithoutHistoryInput
    upsert?: MusicUpsertWithoutHistoryInput
    disconnect?: MusicWhereInput | boolean
    delete?: MusicWhereInput | boolean
    connect?: MusicWhereUniqueInput
    update?: XOR<XOR<MusicUpdateToOneWithWhereWithoutHistoryInput, MusicUpdateWithoutHistoryInput>, MusicUncheckedUpdateWithoutHistoryInput>
  }

  export type VideoUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<VideoCreateWithoutHistoryInput, VideoUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: VideoCreateOrConnectWithoutHistoryInput
    upsert?: VideoUpsertWithoutHistoryInput
    disconnect?: VideoWhereInput | boolean
    delete?: VideoWhereInput | boolean
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutHistoryInput, VideoUpdateWithoutHistoryInput>, VideoUncheckedUpdateWithoutHistoryInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieCreateNestedOneWithoutVideoInput = {
    create?: XOR<MovieCreateWithoutVideoInput, MovieUncheckedCreateWithoutVideoInput>
    connectOrCreate?: MovieCreateOrConnectWithoutVideoInput
    connect?: MovieWhereUniqueInput
  }

  export type EpisodeCreateNestedManyWithoutVideoInput = {
    create?: XOR<EpisodeCreateWithoutVideoInput, EpisodeUncheckedCreateWithoutVideoInput> | EpisodeCreateWithoutVideoInput[] | EpisodeUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutVideoInput | EpisodeCreateOrConnectWithoutVideoInput[]
    createMany?: EpisodeCreateManyVideoInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type FavoriteVideoCreateNestedManyWithoutVideoInput = {
    create?: XOR<FavoriteVideoCreateWithoutVideoInput, FavoriteVideoUncheckedCreateWithoutVideoInput> | FavoriteVideoCreateWithoutVideoInput[] | FavoriteVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: FavoriteVideoCreateOrConnectWithoutVideoInput | FavoriteVideoCreateOrConnectWithoutVideoInput[]
    createMany?: FavoriteVideoCreateManyVideoInputEnvelope
    connect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutVideoInput = {
    create?: XOR<HistoryCreateWithoutVideoInput, HistoryUncheckedCreateWithoutVideoInput> | HistoryCreateWithoutVideoInput[] | HistoryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutVideoInput | HistoryCreateOrConnectWithoutVideoInput[]
    createMany?: HistoryCreateManyVideoInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedOneWithoutVideoInput = {
    create?: XOR<MovieCreateWithoutVideoInput, MovieUncheckedCreateWithoutVideoInput>
    connectOrCreate?: MovieCreateOrConnectWithoutVideoInput
    connect?: MovieWhereUniqueInput
  }

  export type EpisodeUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<EpisodeCreateWithoutVideoInput, EpisodeUncheckedCreateWithoutVideoInput> | EpisodeCreateWithoutVideoInput[] | EpisodeUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutVideoInput | EpisodeCreateOrConnectWithoutVideoInput[]
    createMany?: EpisodeCreateManyVideoInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type FavoriteVideoUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<FavoriteVideoCreateWithoutVideoInput, FavoriteVideoUncheckedCreateWithoutVideoInput> | FavoriteVideoCreateWithoutVideoInput[] | FavoriteVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: FavoriteVideoCreateOrConnectWithoutVideoInput | FavoriteVideoCreateOrConnectWithoutVideoInput[]
    createMany?: FavoriteVideoCreateManyVideoInputEnvelope
    connect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<HistoryCreateWithoutVideoInput, HistoryUncheckedCreateWithoutVideoInput> | HistoryCreateWithoutVideoInput[] | HistoryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutVideoInput | HistoryCreateOrConnectWithoutVideoInput[]
    createMany?: HistoryCreateManyVideoInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type EnumVideoTypeFieldUpdateOperationsInput = {
    set?: $Enums.VideoType
  }

  export type MovieUpdateOneWithoutVideoNestedInput = {
    create?: XOR<MovieCreateWithoutVideoInput, MovieUncheckedCreateWithoutVideoInput>
    connectOrCreate?: MovieCreateOrConnectWithoutVideoInput
    upsert?: MovieUpsertWithoutVideoInput
    disconnect?: MovieWhereInput | boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutVideoInput, MovieUpdateWithoutVideoInput>, MovieUncheckedUpdateWithoutVideoInput>
  }

  export type EpisodeUpdateManyWithoutVideoNestedInput = {
    create?: XOR<EpisodeCreateWithoutVideoInput, EpisodeUncheckedCreateWithoutVideoInput> | EpisodeCreateWithoutVideoInput[] | EpisodeUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutVideoInput | EpisodeCreateOrConnectWithoutVideoInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutVideoInput | EpisodeUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: EpisodeCreateManyVideoInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutVideoInput | EpisodeUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutVideoInput | EpisodeUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type FavoriteVideoUpdateManyWithoutVideoNestedInput = {
    create?: XOR<FavoriteVideoCreateWithoutVideoInput, FavoriteVideoUncheckedCreateWithoutVideoInput> | FavoriteVideoCreateWithoutVideoInput[] | FavoriteVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: FavoriteVideoCreateOrConnectWithoutVideoInput | FavoriteVideoCreateOrConnectWithoutVideoInput[]
    upsert?: FavoriteVideoUpsertWithWhereUniqueWithoutVideoInput | FavoriteVideoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: FavoriteVideoCreateManyVideoInputEnvelope
    set?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    disconnect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    delete?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    connect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    update?: FavoriteVideoUpdateWithWhereUniqueWithoutVideoInput | FavoriteVideoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: FavoriteVideoUpdateManyWithWhereWithoutVideoInput | FavoriteVideoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: FavoriteVideoScalarWhereInput | FavoriteVideoScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutVideoNestedInput = {
    create?: XOR<HistoryCreateWithoutVideoInput, HistoryUncheckedCreateWithoutVideoInput> | HistoryCreateWithoutVideoInput[] | HistoryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutVideoInput | HistoryCreateOrConnectWithoutVideoInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutVideoInput | HistoryUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: HistoryCreateManyVideoInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutVideoInput | HistoryUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutVideoInput | HistoryUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type MovieUncheckedUpdateOneWithoutVideoNestedInput = {
    create?: XOR<MovieCreateWithoutVideoInput, MovieUncheckedCreateWithoutVideoInput>
    connectOrCreate?: MovieCreateOrConnectWithoutVideoInput
    upsert?: MovieUpsertWithoutVideoInput
    disconnect?: MovieWhereInput | boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutVideoInput, MovieUpdateWithoutVideoInput>, MovieUncheckedUpdateWithoutVideoInput>
  }

  export type EpisodeUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<EpisodeCreateWithoutVideoInput, EpisodeUncheckedCreateWithoutVideoInput> | EpisodeCreateWithoutVideoInput[] | EpisodeUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutVideoInput | EpisodeCreateOrConnectWithoutVideoInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutVideoInput | EpisodeUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: EpisodeCreateManyVideoInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutVideoInput | EpisodeUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutVideoInput | EpisodeUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type FavoriteVideoUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<FavoriteVideoCreateWithoutVideoInput, FavoriteVideoUncheckedCreateWithoutVideoInput> | FavoriteVideoCreateWithoutVideoInput[] | FavoriteVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: FavoriteVideoCreateOrConnectWithoutVideoInput | FavoriteVideoCreateOrConnectWithoutVideoInput[]
    upsert?: FavoriteVideoUpsertWithWhereUniqueWithoutVideoInput | FavoriteVideoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: FavoriteVideoCreateManyVideoInputEnvelope
    set?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    disconnect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    delete?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    connect?: FavoriteVideoWhereUniqueInput | FavoriteVideoWhereUniqueInput[]
    update?: FavoriteVideoUpdateWithWhereUniqueWithoutVideoInput | FavoriteVideoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: FavoriteVideoUpdateManyWithWhereWithoutVideoInput | FavoriteVideoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: FavoriteVideoScalarWhereInput | FavoriteVideoScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<HistoryCreateWithoutVideoInput, HistoryUncheckedCreateWithoutVideoInput> | HistoryCreateWithoutVideoInput[] | HistoryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutVideoInput | HistoryCreateOrConnectWithoutVideoInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutVideoInput | HistoryUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: HistoryCreateManyVideoInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutVideoInput | HistoryUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutVideoInput | HistoryUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type VideoCreateNestedOneWithoutMovieInput = {
    create?: XOR<VideoCreateWithoutMovieInput, VideoUncheckedCreateWithoutMovieInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMovieInput
    connect?: VideoWhereUniqueInput
  }

  export type VideoUpdateOneRequiredWithoutMovieNestedInput = {
    create?: XOR<VideoCreateWithoutMovieInput, VideoUncheckedCreateWithoutMovieInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMovieInput
    upsert?: VideoUpsertWithoutMovieInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutMovieInput, VideoUpdateWithoutMovieInput>, VideoUncheckedUpdateWithoutMovieInput>
  }

  export type EpisodeCreateNestedManyWithoutSeriesInput = {
    create?: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput> | EpisodeCreateWithoutSeriesInput[] | EpisodeUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesInput | EpisodeCreateOrConnectWithoutSeriesInput[]
    createMany?: EpisodeCreateManySeriesInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutSeriesInput = {
    create?: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput> | EpisodeCreateWithoutSeriesInput[] | EpisodeUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesInput | EpisodeCreateOrConnectWithoutSeriesInput[]
    createMany?: EpisodeCreateManySeriesInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type EpisodeUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput> | EpisodeCreateWithoutSeriesInput[] | EpisodeUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesInput | EpisodeCreateOrConnectWithoutSeriesInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeriesInput | EpisodeUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: EpisodeCreateManySeriesInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeriesInput | EpisodeUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeriesInput | EpisodeUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput> | EpisodeCreateWithoutSeriesInput[] | EpisodeUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesInput | EpisodeCreateOrConnectWithoutSeriesInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeriesInput | EpisodeUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: EpisodeCreateManySeriesInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeriesInput | EpisodeUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeriesInput | EpisodeUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type VideoCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<VideoCreateWithoutEpisodesInput, VideoUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutEpisodesInput
    connect?: VideoWhereUniqueInput
  }

  export type SeriesCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<SeriesCreateWithoutEpisodesInput, SeriesUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutEpisodesInput
    connect?: SeriesWhereUniqueInput
  }

  export type VideoUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<VideoCreateWithoutEpisodesInput, VideoUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutEpisodesInput
    upsert?: VideoUpsertWithoutEpisodesInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutEpisodesInput, VideoUpdateWithoutEpisodesInput>, VideoUncheckedUpdateWithoutEpisodesInput>
  }

  export type SeriesUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<SeriesCreateWithoutEpisodesInput, SeriesUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutEpisodesInput
    upsert?: SeriesUpsertWithoutEpisodesInput
    connect?: SeriesWhereUniqueInput
    update?: XOR<XOR<SeriesUpdateToOneWithWhereWithoutEpisodesInput, SeriesUpdateWithoutEpisodesInput>, SeriesUncheckedUpdateWithoutEpisodesInput>
  }

  export type AlbumCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type MusicCreateNestedManyWithoutArtistInput = {
    create?: XOR<MusicCreateWithoutArtistInput, MusicUncheckedCreateWithoutArtistInput> | MusicCreateWithoutArtistInput[] | MusicUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutArtistInput | MusicCreateOrConnectWithoutArtistInput[]
    createMany?: MusicCreateManyArtistInputEnvelope
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type MusicUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<MusicCreateWithoutArtistInput, MusicUncheckedCreateWithoutArtistInput> | MusicCreateWithoutArtistInput[] | MusicUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutArtistInput | MusicCreateOrConnectWithoutArtistInput[]
    createMany?: MusicCreateManyArtistInputEnvelope
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
  }

  export type AlbumUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type MusicUpdateManyWithoutArtistNestedInput = {
    create?: XOR<MusicCreateWithoutArtistInput, MusicUncheckedCreateWithoutArtistInput> | MusicCreateWithoutArtistInput[] | MusicUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutArtistInput | MusicCreateOrConnectWithoutArtistInput[]
    upsert?: MusicUpsertWithWhereUniqueWithoutArtistInput | MusicUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: MusicCreateManyArtistInputEnvelope
    set?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    disconnect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    delete?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    update?: MusicUpdateWithWhereUniqueWithoutArtistInput | MusicUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: MusicUpdateManyWithWhereWithoutArtistInput | MusicUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: MusicScalarWhereInput | MusicScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type MusicUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<MusicCreateWithoutArtistInput, MusicUncheckedCreateWithoutArtistInput> | MusicCreateWithoutArtistInput[] | MusicUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutArtistInput | MusicCreateOrConnectWithoutArtistInput[]
    upsert?: MusicUpsertWithWhereUniqueWithoutArtistInput | MusicUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: MusicCreateManyArtistInputEnvelope
    set?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    disconnect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    delete?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    update?: MusicUpdateWithWhereUniqueWithoutArtistInput | MusicUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: MusicUpdateManyWithWhereWithoutArtistInput | MusicUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: MusicScalarWhereInput | MusicScalarWhereInput[]
  }

  export type ArtistCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    connect?: ArtistWhereUniqueInput
  }

  export type MusicCreateNestedManyWithoutAlbumInput = {
    create?: XOR<MusicCreateWithoutAlbumInput, MusicUncheckedCreateWithoutAlbumInput> | MusicCreateWithoutAlbumInput[] | MusicUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutAlbumInput | MusicCreateOrConnectWithoutAlbumInput[]
    createMany?: MusicCreateManyAlbumInputEnvelope
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
  }

  export type MusicUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<MusicCreateWithoutAlbumInput, MusicUncheckedCreateWithoutAlbumInput> | MusicCreateWithoutAlbumInput[] | MusicUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutAlbumInput | MusicCreateOrConnectWithoutAlbumInput[]
    createMany?: MusicCreateManyAlbumInputEnvelope
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
  }

  export type ArtistUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    upsert?: ArtistUpsertWithoutAlbumsInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutAlbumsInput, ArtistUpdateWithoutAlbumsInput>, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type MusicUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<MusicCreateWithoutAlbumInput, MusicUncheckedCreateWithoutAlbumInput> | MusicCreateWithoutAlbumInput[] | MusicUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutAlbumInput | MusicCreateOrConnectWithoutAlbumInput[]
    upsert?: MusicUpsertWithWhereUniqueWithoutAlbumInput | MusicUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: MusicCreateManyAlbumInputEnvelope
    set?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    disconnect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    delete?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    update?: MusicUpdateWithWhereUniqueWithoutAlbumInput | MusicUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: MusicUpdateManyWithWhereWithoutAlbumInput | MusicUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: MusicScalarWhereInput | MusicScalarWhereInput[]
  }

  export type MusicUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<MusicCreateWithoutAlbumInput, MusicUncheckedCreateWithoutAlbumInput> | MusicCreateWithoutAlbumInput[] | MusicUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: MusicCreateOrConnectWithoutAlbumInput | MusicCreateOrConnectWithoutAlbumInput[]
    upsert?: MusicUpsertWithWhereUniqueWithoutAlbumInput | MusicUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: MusicCreateManyAlbumInputEnvelope
    set?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    disconnect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    delete?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    connect?: MusicWhereUniqueInput | MusicWhereUniqueInput[]
    update?: MusicUpdateWithWhereUniqueWithoutAlbumInput | MusicUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: MusicUpdateManyWithWhereWithoutAlbumInput | MusicUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: MusicScalarWhereInput | MusicScalarWhereInput[]
  }

  export type AlbumCreateNestedOneWithoutMusicInput = {
    create?: XOR<AlbumCreateWithoutMusicInput, AlbumUncheckedCreateWithoutMusicInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutMusicInput
    connect?: AlbumWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutMusicInput = {
    create?: XOR<ArtistCreateWithoutMusicInput, ArtistUncheckedCreateWithoutMusicInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutMusicInput
    connect?: ArtistWhereUniqueInput
  }

  export type MusicPlayCreateNestedManyWithoutMusicInput = {
    create?: XOR<MusicPlayCreateWithoutMusicInput, MusicPlayUncheckedCreateWithoutMusicInput> | MusicPlayCreateWithoutMusicInput[] | MusicPlayUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: MusicPlayCreateOrConnectWithoutMusicInput | MusicPlayCreateOrConnectWithoutMusicInput[]
    createMany?: MusicPlayCreateManyMusicInputEnvelope
    connect?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
  }

  export type PlaylistMusicCreateNestedManyWithoutMusicInput = {
    create?: XOR<PlaylistMusicCreateWithoutMusicInput, PlaylistMusicUncheckedCreateWithoutMusicInput> | PlaylistMusicCreateWithoutMusicInput[] | PlaylistMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: PlaylistMusicCreateOrConnectWithoutMusicInput | PlaylistMusicCreateOrConnectWithoutMusicInput[]
    createMany?: PlaylistMusicCreateManyMusicInputEnvelope
    connect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
  }

  export type FavoriteMusicCreateNestedManyWithoutMusicInput = {
    create?: XOR<FavoriteMusicCreateWithoutMusicInput, FavoriteMusicUncheckedCreateWithoutMusicInput> | FavoriteMusicCreateWithoutMusicInput[] | FavoriteMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: FavoriteMusicCreateOrConnectWithoutMusicInput | FavoriteMusicCreateOrConnectWithoutMusicInput[]
    createMany?: FavoriteMusicCreateManyMusicInputEnvelope
    connect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutMusicInput = {
    create?: XOR<HistoryCreateWithoutMusicInput, HistoryUncheckedCreateWithoutMusicInput> | HistoryCreateWithoutMusicInput[] | HistoryUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutMusicInput | HistoryCreateOrConnectWithoutMusicInput[]
    createMany?: HistoryCreateManyMusicInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type MusicPlayUncheckedCreateNestedManyWithoutMusicInput = {
    create?: XOR<MusicPlayCreateWithoutMusicInput, MusicPlayUncheckedCreateWithoutMusicInput> | MusicPlayCreateWithoutMusicInput[] | MusicPlayUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: MusicPlayCreateOrConnectWithoutMusicInput | MusicPlayCreateOrConnectWithoutMusicInput[]
    createMany?: MusicPlayCreateManyMusicInputEnvelope
    connect?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
  }

  export type PlaylistMusicUncheckedCreateNestedManyWithoutMusicInput = {
    create?: XOR<PlaylistMusicCreateWithoutMusicInput, PlaylistMusicUncheckedCreateWithoutMusicInput> | PlaylistMusicCreateWithoutMusicInput[] | PlaylistMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: PlaylistMusicCreateOrConnectWithoutMusicInput | PlaylistMusicCreateOrConnectWithoutMusicInput[]
    createMany?: PlaylistMusicCreateManyMusicInputEnvelope
    connect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
  }

  export type FavoriteMusicUncheckedCreateNestedManyWithoutMusicInput = {
    create?: XOR<FavoriteMusicCreateWithoutMusicInput, FavoriteMusicUncheckedCreateWithoutMusicInput> | FavoriteMusicCreateWithoutMusicInput[] | FavoriteMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: FavoriteMusicCreateOrConnectWithoutMusicInput | FavoriteMusicCreateOrConnectWithoutMusicInput[]
    createMany?: FavoriteMusicCreateManyMusicInputEnvelope
    connect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutMusicInput = {
    create?: XOR<HistoryCreateWithoutMusicInput, HistoryUncheckedCreateWithoutMusicInput> | HistoryCreateWithoutMusicInput[] | HistoryUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutMusicInput | HistoryCreateOrConnectWithoutMusicInput[]
    createMany?: HistoryCreateManyMusicInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type AlbumUpdateOneRequiredWithoutMusicNestedInput = {
    create?: XOR<AlbumCreateWithoutMusicInput, AlbumUncheckedCreateWithoutMusicInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutMusicInput
    upsert?: AlbumUpsertWithoutMusicInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutMusicInput, AlbumUpdateWithoutMusicInput>, AlbumUncheckedUpdateWithoutMusicInput>
  }

  export type ArtistUpdateOneRequiredWithoutMusicNestedInput = {
    create?: XOR<ArtistCreateWithoutMusicInput, ArtistUncheckedCreateWithoutMusicInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutMusicInput
    upsert?: ArtistUpsertWithoutMusicInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutMusicInput, ArtistUpdateWithoutMusicInput>, ArtistUncheckedUpdateWithoutMusicInput>
  }

  export type MusicPlayUpdateManyWithoutMusicNestedInput = {
    create?: XOR<MusicPlayCreateWithoutMusicInput, MusicPlayUncheckedCreateWithoutMusicInput> | MusicPlayCreateWithoutMusicInput[] | MusicPlayUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: MusicPlayCreateOrConnectWithoutMusicInput | MusicPlayCreateOrConnectWithoutMusicInput[]
    upsert?: MusicPlayUpsertWithWhereUniqueWithoutMusicInput | MusicPlayUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: MusicPlayCreateManyMusicInputEnvelope
    set?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
    disconnect?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
    delete?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
    connect?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
    update?: MusicPlayUpdateWithWhereUniqueWithoutMusicInput | MusicPlayUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: MusicPlayUpdateManyWithWhereWithoutMusicInput | MusicPlayUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: MusicPlayScalarWhereInput | MusicPlayScalarWhereInput[]
  }

  export type PlaylistMusicUpdateManyWithoutMusicNestedInput = {
    create?: XOR<PlaylistMusicCreateWithoutMusicInput, PlaylistMusicUncheckedCreateWithoutMusicInput> | PlaylistMusicCreateWithoutMusicInput[] | PlaylistMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: PlaylistMusicCreateOrConnectWithoutMusicInput | PlaylistMusicCreateOrConnectWithoutMusicInput[]
    upsert?: PlaylistMusicUpsertWithWhereUniqueWithoutMusicInput | PlaylistMusicUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: PlaylistMusicCreateManyMusicInputEnvelope
    set?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    disconnect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    delete?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    connect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    update?: PlaylistMusicUpdateWithWhereUniqueWithoutMusicInput | PlaylistMusicUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: PlaylistMusicUpdateManyWithWhereWithoutMusicInput | PlaylistMusicUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: PlaylistMusicScalarWhereInput | PlaylistMusicScalarWhereInput[]
  }

  export type FavoriteMusicUpdateManyWithoutMusicNestedInput = {
    create?: XOR<FavoriteMusicCreateWithoutMusicInput, FavoriteMusicUncheckedCreateWithoutMusicInput> | FavoriteMusicCreateWithoutMusicInput[] | FavoriteMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: FavoriteMusicCreateOrConnectWithoutMusicInput | FavoriteMusicCreateOrConnectWithoutMusicInput[]
    upsert?: FavoriteMusicUpsertWithWhereUniqueWithoutMusicInput | FavoriteMusicUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: FavoriteMusicCreateManyMusicInputEnvelope
    set?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    disconnect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    delete?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    connect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    update?: FavoriteMusicUpdateWithWhereUniqueWithoutMusicInput | FavoriteMusicUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: FavoriteMusicUpdateManyWithWhereWithoutMusicInput | FavoriteMusicUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: FavoriteMusicScalarWhereInput | FavoriteMusicScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutMusicNestedInput = {
    create?: XOR<HistoryCreateWithoutMusicInput, HistoryUncheckedCreateWithoutMusicInput> | HistoryCreateWithoutMusicInput[] | HistoryUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutMusicInput | HistoryCreateOrConnectWithoutMusicInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutMusicInput | HistoryUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: HistoryCreateManyMusicInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutMusicInput | HistoryUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutMusicInput | HistoryUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type MusicPlayUncheckedUpdateManyWithoutMusicNestedInput = {
    create?: XOR<MusicPlayCreateWithoutMusicInput, MusicPlayUncheckedCreateWithoutMusicInput> | MusicPlayCreateWithoutMusicInput[] | MusicPlayUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: MusicPlayCreateOrConnectWithoutMusicInput | MusicPlayCreateOrConnectWithoutMusicInput[]
    upsert?: MusicPlayUpsertWithWhereUniqueWithoutMusicInput | MusicPlayUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: MusicPlayCreateManyMusicInputEnvelope
    set?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
    disconnect?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
    delete?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
    connect?: MusicPlayWhereUniqueInput | MusicPlayWhereUniqueInput[]
    update?: MusicPlayUpdateWithWhereUniqueWithoutMusicInput | MusicPlayUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: MusicPlayUpdateManyWithWhereWithoutMusicInput | MusicPlayUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: MusicPlayScalarWhereInput | MusicPlayScalarWhereInput[]
  }

  export type PlaylistMusicUncheckedUpdateManyWithoutMusicNestedInput = {
    create?: XOR<PlaylistMusicCreateWithoutMusicInput, PlaylistMusicUncheckedCreateWithoutMusicInput> | PlaylistMusicCreateWithoutMusicInput[] | PlaylistMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: PlaylistMusicCreateOrConnectWithoutMusicInput | PlaylistMusicCreateOrConnectWithoutMusicInput[]
    upsert?: PlaylistMusicUpsertWithWhereUniqueWithoutMusicInput | PlaylistMusicUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: PlaylistMusicCreateManyMusicInputEnvelope
    set?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    disconnect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    delete?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    connect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    update?: PlaylistMusicUpdateWithWhereUniqueWithoutMusicInput | PlaylistMusicUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: PlaylistMusicUpdateManyWithWhereWithoutMusicInput | PlaylistMusicUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: PlaylistMusicScalarWhereInput | PlaylistMusicScalarWhereInput[]
  }

  export type FavoriteMusicUncheckedUpdateManyWithoutMusicNestedInput = {
    create?: XOR<FavoriteMusicCreateWithoutMusicInput, FavoriteMusicUncheckedCreateWithoutMusicInput> | FavoriteMusicCreateWithoutMusicInput[] | FavoriteMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: FavoriteMusicCreateOrConnectWithoutMusicInput | FavoriteMusicCreateOrConnectWithoutMusicInput[]
    upsert?: FavoriteMusicUpsertWithWhereUniqueWithoutMusicInput | FavoriteMusicUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: FavoriteMusicCreateManyMusicInputEnvelope
    set?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    disconnect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    delete?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    connect?: FavoriteMusicWhereUniqueInput | FavoriteMusicWhereUniqueInput[]
    update?: FavoriteMusicUpdateWithWhereUniqueWithoutMusicInput | FavoriteMusicUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: FavoriteMusicUpdateManyWithWhereWithoutMusicInput | FavoriteMusicUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: FavoriteMusicScalarWhereInput | FavoriteMusicScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutMusicNestedInput = {
    create?: XOR<HistoryCreateWithoutMusicInput, HistoryUncheckedCreateWithoutMusicInput> | HistoryCreateWithoutMusicInput[] | HistoryUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutMusicInput | HistoryCreateOrConnectWithoutMusicInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutMusicInput | HistoryUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: HistoryCreateManyMusicInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutMusicInput | HistoryUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutMusicInput | HistoryUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type MusicCreateNestedOneWithoutMusicPlaysInput = {
    create?: XOR<MusicCreateWithoutMusicPlaysInput, MusicUncheckedCreateWithoutMusicPlaysInput>
    connectOrCreate?: MusicCreateOrConnectWithoutMusicPlaysInput
    connect?: MusicWhereUniqueInput
  }

  export type MusicUpdateOneRequiredWithoutMusicPlaysNestedInput = {
    create?: XOR<MusicCreateWithoutMusicPlaysInput, MusicUncheckedCreateWithoutMusicPlaysInput>
    connectOrCreate?: MusicCreateOrConnectWithoutMusicPlaysInput
    upsert?: MusicUpsertWithoutMusicPlaysInput
    connect?: MusicWhereUniqueInput
    update?: XOR<XOR<MusicUpdateToOneWithWhereWithoutMusicPlaysInput, MusicUpdateWithoutMusicPlaysInput>, MusicUncheckedUpdateWithoutMusicPlaysInput>
  }

  export type PlaylistMusicCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistMusicCreateWithoutPlaylistInput, PlaylistMusicUncheckedCreateWithoutPlaylistInput> | PlaylistMusicCreateWithoutPlaylistInput[] | PlaylistMusicUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistMusicCreateOrConnectWithoutPlaylistInput | PlaylistMusicCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistMusicCreateManyPlaylistInputEnvelope
    connect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
  }

  export type PlaylistMusicUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistMusicCreateWithoutPlaylistInput, PlaylistMusicUncheckedCreateWithoutPlaylistInput> | PlaylistMusicCreateWithoutPlaylistInput[] | PlaylistMusicUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistMusicCreateOrConnectWithoutPlaylistInput | PlaylistMusicCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistMusicCreateManyPlaylistInputEnvelope
    connect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlaylistMusicUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistMusicCreateWithoutPlaylistInput, PlaylistMusicUncheckedCreateWithoutPlaylistInput> | PlaylistMusicCreateWithoutPlaylistInput[] | PlaylistMusicUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistMusicCreateOrConnectWithoutPlaylistInput | PlaylistMusicCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistMusicUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistMusicUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistMusicCreateManyPlaylistInputEnvelope
    set?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    disconnect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    delete?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    connect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    update?: PlaylistMusicUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistMusicUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistMusicUpdateManyWithWhereWithoutPlaylistInput | PlaylistMusicUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistMusicScalarWhereInput | PlaylistMusicScalarWhereInput[]
  }

  export type PlaylistMusicUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistMusicCreateWithoutPlaylistInput, PlaylistMusicUncheckedCreateWithoutPlaylistInput> | PlaylistMusicCreateWithoutPlaylistInput[] | PlaylistMusicUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistMusicCreateOrConnectWithoutPlaylistInput | PlaylistMusicCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistMusicUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistMusicUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistMusicCreateManyPlaylistInputEnvelope
    set?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    disconnect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    delete?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    connect?: PlaylistMusicWhereUniqueInput | PlaylistMusicWhereUniqueInput[]
    update?: PlaylistMusicUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistMusicUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistMusicUpdateManyWithWhereWithoutPlaylistInput | PlaylistMusicUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistMusicScalarWhereInput | PlaylistMusicScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutMusicInput = {
    create?: XOR<PlaylistCreateWithoutMusicInput, PlaylistUncheckedCreateWithoutMusicInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutMusicInput
    connect?: PlaylistWhereUniqueInput
  }

  export type MusicCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<MusicCreateWithoutPlaylistsInput, MusicUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: MusicCreateOrConnectWithoutPlaylistsInput
    connect?: MusicWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutMusicNestedInput = {
    create?: XOR<PlaylistCreateWithoutMusicInput, PlaylistUncheckedCreateWithoutMusicInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutMusicInput
    upsert?: PlaylistUpsertWithoutMusicInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutMusicInput, PlaylistUpdateWithoutMusicInput>, PlaylistUncheckedUpdateWithoutMusicInput>
  }

  export type MusicUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<MusicCreateWithoutPlaylistsInput, MusicUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: MusicCreateOrConnectWithoutPlaylistsInput
    upsert?: MusicUpsertWithoutPlaylistsInput
    connect?: MusicWhereUniqueInput
    update?: XOR<XOR<MusicUpdateToOneWithWhereWithoutPlaylistsInput, MusicUpdateWithoutPlaylistsInput>, MusicUncheckedUpdateWithoutPlaylistsInput>
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

  export type NestedEnumVideoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoType | EnumVideoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VideoType[]
    notIn?: $Enums.VideoType[]
    not?: NestedEnumVideoTypeFilter<$PrismaModel> | $Enums.VideoType
  }

  export type NestedEnumVideoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoType | EnumVideoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VideoType[]
    notIn?: $Enums.VideoType[]
    not?: NestedEnumVideoTypeWithAggregatesFilter<$PrismaModel> | $Enums.VideoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoTypeFilter<$PrismaModel>
    _max?: NestedEnumVideoTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FavoriteMusicCreateWithoutUserInput = {
    createdAt?: Date | string
    music: MusicCreateNestedOneWithoutFavoritesMusicInput
  }

  export type FavoriteMusicUncheckedCreateWithoutUserInput = {
    id?: number
    musicId: number
    createdAt?: Date | string
  }

  export type FavoriteMusicCreateOrConnectWithoutUserInput = {
    where: FavoriteMusicWhereUniqueInput
    create: XOR<FavoriteMusicCreateWithoutUserInput, FavoriteMusicUncheckedCreateWithoutUserInput>
  }

  export type FavoriteMusicCreateManyUserInputEnvelope = {
    data: FavoriteMusicCreateManyUserInput | FavoriteMusicCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteVideoCreateWithoutUserInput = {
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutFavoritesVideoInput
  }

  export type FavoriteVideoUncheckedCreateWithoutUserInput = {
    id?: number
    videoId: number
    createdAt?: Date | string
  }

  export type FavoriteVideoCreateOrConnectWithoutUserInput = {
    where: FavoriteVideoWhereUniqueInput
    create: XOR<FavoriteVideoCreateWithoutUserInput, FavoriteVideoUncheckedCreateWithoutUserInput>
  }

  export type FavoriteVideoCreateManyUserInputEnvelope = {
    data: FavoriteVideoCreateManyUserInput | FavoriteVideoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutUserInput = {
    playedAt?: Date | string
    music?: MusicCreateNestedOneWithoutHistoryInput
    video?: VideoCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutUserInput = {
    id?: number
    musicId?: number | null
    videoId?: number | null
    playedAt?: Date | string
  }

  export type HistoryCreateOrConnectWithoutUserInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryCreateManyUserInputEnvelope = {
    data: HistoryCreateManyUserInput | HistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteMusicUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteMusicWhereUniqueInput
    update: XOR<FavoriteMusicUpdateWithoutUserInput, FavoriteMusicUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteMusicCreateWithoutUserInput, FavoriteMusicUncheckedCreateWithoutUserInput>
  }

  export type FavoriteMusicUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteMusicWhereUniqueInput
    data: XOR<FavoriteMusicUpdateWithoutUserInput, FavoriteMusicUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteMusicUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteMusicScalarWhereInput
    data: XOR<FavoriteMusicUpdateManyMutationInput, FavoriteMusicUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteMusicScalarWhereInput = {
    AND?: FavoriteMusicScalarWhereInput | FavoriteMusicScalarWhereInput[]
    OR?: FavoriteMusicScalarWhereInput[]
    NOT?: FavoriteMusicScalarWhereInput | FavoriteMusicScalarWhereInput[]
    id?: IntFilter<"FavoriteMusic"> | number
    userId?: IntFilter<"FavoriteMusic"> | number
    musicId?: IntFilter<"FavoriteMusic"> | number
    createdAt?: DateTimeFilter<"FavoriteMusic"> | Date | string
  }

  export type FavoriteVideoUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteVideoWhereUniqueInput
    update: XOR<FavoriteVideoUpdateWithoutUserInput, FavoriteVideoUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteVideoCreateWithoutUserInput, FavoriteVideoUncheckedCreateWithoutUserInput>
  }

  export type FavoriteVideoUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteVideoWhereUniqueInput
    data: XOR<FavoriteVideoUpdateWithoutUserInput, FavoriteVideoUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteVideoUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteVideoScalarWhereInput
    data: XOR<FavoriteVideoUpdateManyMutationInput, FavoriteVideoUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteVideoScalarWhereInput = {
    AND?: FavoriteVideoScalarWhereInput | FavoriteVideoScalarWhereInput[]
    OR?: FavoriteVideoScalarWhereInput[]
    NOT?: FavoriteVideoScalarWhereInput | FavoriteVideoScalarWhereInput[]
    id?: IntFilter<"FavoriteVideo"> | number
    userId?: IntFilter<"FavoriteVideo"> | number
    videoId?: IntFilter<"FavoriteVideo"> | number
    createdAt?: DateTimeFilter<"FavoriteVideo"> | Date | string
  }

  export type HistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
  }

  export type HistoryUpdateManyWithWhereWithoutUserInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    id?: IntFilter<"History"> | number
    userId?: IntFilter<"History"> | number
    musicId?: IntNullableFilter<"History"> | number | null
    videoId?: IntNullableFilter<"History"> | number | null
    playedAt?: DateTimeFilter<"History"> | Date | string
  }

  export type UserCreateWithoutFavoritesMusicInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId: string
    picture?: string | null
    favoritesVideo?: FavoriteVideoCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesMusicInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId: string
    picture?: string | null
    favoritesVideo?: FavoriteVideoUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesMusicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesMusicInput, UserUncheckedCreateWithoutFavoritesMusicInput>
  }

  export type MusicCreateWithoutFavoritesMusicInput = {
    title: string
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutMusicInput
    artist: ArtistCreateNestedOneWithoutMusicInput
    musicPlays?: MusicPlayCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicCreateNestedManyWithoutMusicInput
    history?: HistoryCreateNestedManyWithoutMusicInput
  }

  export type MusicUncheckedCreateWithoutFavoritesMusicInput = {
    id?: number
    title: string
    albumId: number
    artistId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicPlays?: MusicPlayUncheckedCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicUncheckedCreateNestedManyWithoutMusicInput
    history?: HistoryUncheckedCreateNestedManyWithoutMusicInput
  }

  export type MusicCreateOrConnectWithoutFavoritesMusicInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutFavoritesMusicInput, MusicUncheckedCreateWithoutFavoritesMusicInput>
  }

  export type UserUpsertWithoutFavoritesMusicInput = {
    update: XOR<UserUpdateWithoutFavoritesMusicInput, UserUncheckedUpdateWithoutFavoritesMusicInput>
    create: XOR<UserCreateWithoutFavoritesMusicInput, UserUncheckedCreateWithoutFavoritesMusicInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesMusicInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesMusicInput, UserUncheckedUpdateWithoutFavoritesMusicInput>
  }

  export type UserUpdateWithoutFavoritesMusicInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    favoritesVideo?: FavoriteVideoUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    favoritesVideo?: FavoriteVideoUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MusicUpsertWithoutFavoritesMusicInput = {
    update: XOR<MusicUpdateWithoutFavoritesMusicInput, MusicUncheckedUpdateWithoutFavoritesMusicInput>
    create: XOR<MusicCreateWithoutFavoritesMusicInput, MusicUncheckedCreateWithoutFavoritesMusicInput>
    where?: MusicWhereInput
  }

  export type MusicUpdateToOneWithWhereWithoutFavoritesMusicInput = {
    where?: MusicWhereInput
    data: XOR<MusicUpdateWithoutFavoritesMusicInput, MusicUncheckedUpdateWithoutFavoritesMusicInput>
  }

  export type MusicUpdateWithoutFavoritesMusicInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutMusicNestedInput
    artist?: ArtistUpdateOneRequiredWithoutMusicNestedInput
    musicPlays?: MusicPlayUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUpdateManyWithoutMusicNestedInput
    history?: HistoryUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateWithoutFavoritesMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicPlays?: MusicPlayUncheckedUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUncheckedUpdateManyWithoutMusicNestedInput
    history?: HistoryUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type UserCreateWithoutFavoritesVideoInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId: string
    picture?: string | null
    favoritesMusic?: FavoriteMusicCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesVideoInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId: string
    picture?: string | null
    favoritesMusic?: FavoriteMusicUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesVideoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesVideoInput, UserUncheckedCreateWithoutFavoritesVideoInput>
  }

  export type VideoCreateWithoutFavoritesVideoInput = {
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie?: MovieCreateNestedOneWithoutVideoInput
    episodes?: EpisodeCreateNestedManyWithoutVideoInput
    history?: HistoryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutFavoritesVideoInput = {
    id?: number
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie?: MovieUncheckedCreateNestedOneWithoutVideoInput
    episodes?: EpisodeUncheckedCreateNestedManyWithoutVideoInput
    history?: HistoryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutFavoritesVideoInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutFavoritesVideoInput, VideoUncheckedCreateWithoutFavoritesVideoInput>
  }

  export type UserUpsertWithoutFavoritesVideoInput = {
    update: XOR<UserUpdateWithoutFavoritesVideoInput, UserUncheckedUpdateWithoutFavoritesVideoInput>
    create: XOR<UserCreateWithoutFavoritesVideoInput, UserUncheckedCreateWithoutFavoritesVideoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesVideoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesVideoInput, UserUncheckedUpdateWithoutFavoritesVideoInput>
  }

  export type UserUpdateWithoutFavoritesVideoInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    favoritesMusic?: FavoriteMusicUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    favoritesMusic?: FavoriteMusicUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutFavoritesVideoInput = {
    update: XOR<VideoUpdateWithoutFavoritesVideoInput, VideoUncheckedUpdateWithoutFavoritesVideoInput>
    create: XOR<VideoCreateWithoutFavoritesVideoInput, VideoUncheckedCreateWithoutFavoritesVideoInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutFavoritesVideoInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutFavoritesVideoInput, VideoUncheckedUpdateWithoutFavoritesVideoInput>
  }

  export type VideoUpdateWithoutFavoritesVideoInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneWithoutVideoNestedInput
    episodes?: EpisodeUpdateManyWithoutVideoNestedInput
    history?: HistoryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutFavoritesVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUncheckedUpdateOneWithoutVideoNestedInput
    episodes?: EpisodeUncheckedUpdateManyWithoutVideoNestedInput
    history?: HistoryUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type UserCreateWithoutHistoryInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId: string
    picture?: string | null
    favoritesMusic?: FavoriteMusicCreateNestedManyWithoutUserInput
    favoritesVideo?: FavoriteVideoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleId: string
    picture?: string | null
    favoritesMusic?: FavoriteMusicUncheckedCreateNestedManyWithoutUserInput
    favoritesVideo?: FavoriteVideoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type MusicCreateWithoutHistoryInput = {
    title: string
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutMusicInput
    artist: ArtistCreateNestedOneWithoutMusicInput
    musicPlays?: MusicPlayCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicCreateNestedManyWithoutMusicInput
  }

  export type MusicUncheckedCreateWithoutHistoryInput = {
    id?: number
    title: string
    albumId: number
    artistId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicPlays?: MusicPlayUncheckedCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicUncheckedCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicUncheckedCreateNestedManyWithoutMusicInput
  }

  export type MusicCreateOrConnectWithoutHistoryInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutHistoryInput, MusicUncheckedCreateWithoutHistoryInput>
  }

  export type VideoCreateWithoutHistoryInput = {
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie?: MovieCreateNestedOneWithoutVideoInput
    episodes?: EpisodeCreateNestedManyWithoutVideoInput
    favoritesVideo?: FavoriteVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutHistoryInput = {
    id?: number
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie?: MovieUncheckedCreateNestedOneWithoutVideoInput
    episodes?: EpisodeUncheckedCreateNestedManyWithoutVideoInput
    favoritesVideo?: FavoriteVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutHistoryInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutHistoryInput, VideoUncheckedCreateWithoutHistoryInput>
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    favoritesMusic?: FavoriteMusicUpdateManyWithoutUserNestedInput
    favoritesVideo?: FavoriteVideoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    favoritesMusic?: FavoriteMusicUncheckedUpdateManyWithoutUserNestedInput
    favoritesVideo?: FavoriteVideoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MusicUpsertWithoutHistoryInput = {
    update: XOR<MusicUpdateWithoutHistoryInput, MusicUncheckedUpdateWithoutHistoryInput>
    create: XOR<MusicCreateWithoutHistoryInput, MusicUncheckedCreateWithoutHistoryInput>
    where?: MusicWhereInput
  }

  export type MusicUpdateToOneWithWhereWithoutHistoryInput = {
    where?: MusicWhereInput
    data: XOR<MusicUpdateWithoutHistoryInput, MusicUncheckedUpdateWithoutHistoryInput>
  }

  export type MusicUpdateWithoutHistoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutMusicNestedInput
    artist?: ArtistUpdateOneRequiredWithoutMusicNestedInput
    musicPlays?: MusicPlayUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicPlays?: MusicPlayUncheckedUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUncheckedUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type VideoUpsertWithoutHistoryInput = {
    update: XOR<VideoUpdateWithoutHistoryInput, VideoUncheckedUpdateWithoutHistoryInput>
    create: XOR<VideoCreateWithoutHistoryInput, VideoUncheckedCreateWithoutHistoryInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutHistoryInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutHistoryInput, VideoUncheckedUpdateWithoutHistoryInput>
  }

  export type VideoUpdateWithoutHistoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneWithoutVideoNestedInput
    episodes?: EpisodeUpdateManyWithoutVideoNestedInput
    favoritesVideo?: FavoriteVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUncheckedUpdateOneWithoutVideoNestedInput
    episodes?: EpisodeUncheckedUpdateManyWithoutVideoNestedInput
    favoritesVideo?: FavoriteVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type MovieCreateWithoutVideoInput = {
    director?: string | null
    cast?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUncheckedCreateWithoutVideoInput = {
    id?: number
    director?: string | null
    cast?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieCreateOrConnectWithoutVideoInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutVideoInput, MovieUncheckedCreateWithoutVideoInput>
  }

  export type EpisodeCreateWithoutVideoInput = {
    season_number: number
    episode_number: number
    createdAt?: Date | string
    updatedAt?: Date | string
    series: SeriesCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutVideoInput = {
    id?: number
    series_id: number
    season_number: number
    episode_number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeCreateOrConnectWithoutVideoInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutVideoInput, EpisodeUncheckedCreateWithoutVideoInput>
  }

  export type EpisodeCreateManyVideoInputEnvelope = {
    data: EpisodeCreateManyVideoInput | EpisodeCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteVideoCreateWithoutVideoInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesVideoInput
  }

  export type FavoriteVideoUncheckedCreateWithoutVideoInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type FavoriteVideoCreateOrConnectWithoutVideoInput = {
    where: FavoriteVideoWhereUniqueInput
    create: XOR<FavoriteVideoCreateWithoutVideoInput, FavoriteVideoUncheckedCreateWithoutVideoInput>
  }

  export type FavoriteVideoCreateManyVideoInputEnvelope = {
    data: FavoriteVideoCreateManyVideoInput | FavoriteVideoCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutVideoInput = {
    playedAt?: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
    music?: MusicCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutVideoInput = {
    id?: number
    userId: number
    musicId?: number | null
    playedAt?: Date | string
  }

  export type HistoryCreateOrConnectWithoutVideoInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutVideoInput, HistoryUncheckedCreateWithoutVideoInput>
  }

  export type HistoryCreateManyVideoInputEnvelope = {
    data: HistoryCreateManyVideoInput | HistoryCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type MovieUpsertWithoutVideoInput = {
    update: XOR<MovieUpdateWithoutVideoInput, MovieUncheckedUpdateWithoutVideoInput>
    create: XOR<MovieCreateWithoutVideoInput, MovieUncheckedCreateWithoutVideoInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutVideoInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutVideoInput, MovieUncheckedUpdateWithoutVideoInput>
  }

  export type MovieUpdateWithoutVideoInput = {
    director?: NullableStringFieldUpdateOperationsInput | string | null
    cast?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    director?: NullableStringFieldUpdateOperationsInput | string | null
    cast?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUpsertWithWhereUniqueWithoutVideoInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutVideoInput, EpisodeUncheckedUpdateWithoutVideoInput>
    create: XOR<EpisodeCreateWithoutVideoInput, EpisodeUncheckedCreateWithoutVideoInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutVideoInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutVideoInput, EpisodeUncheckedUpdateWithoutVideoInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutVideoInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutVideoInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: IntFilter<"Episode"> | number
    video_id?: IntFilter<"Episode"> | number
    series_id?: IntFilter<"Episode"> | number
    season_number?: IntFilter<"Episode"> | number
    episode_number?: IntFilter<"Episode"> | number
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
  }

  export type FavoriteVideoUpsertWithWhereUniqueWithoutVideoInput = {
    where: FavoriteVideoWhereUniqueInput
    update: XOR<FavoriteVideoUpdateWithoutVideoInput, FavoriteVideoUncheckedUpdateWithoutVideoInput>
    create: XOR<FavoriteVideoCreateWithoutVideoInput, FavoriteVideoUncheckedCreateWithoutVideoInput>
  }

  export type FavoriteVideoUpdateWithWhereUniqueWithoutVideoInput = {
    where: FavoriteVideoWhereUniqueInput
    data: XOR<FavoriteVideoUpdateWithoutVideoInput, FavoriteVideoUncheckedUpdateWithoutVideoInput>
  }

  export type FavoriteVideoUpdateManyWithWhereWithoutVideoInput = {
    where: FavoriteVideoScalarWhereInput
    data: XOR<FavoriteVideoUpdateManyMutationInput, FavoriteVideoUncheckedUpdateManyWithoutVideoInput>
  }

  export type HistoryUpsertWithWhereUniqueWithoutVideoInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutVideoInput, HistoryUncheckedUpdateWithoutVideoInput>
    create: XOR<HistoryCreateWithoutVideoInput, HistoryUncheckedCreateWithoutVideoInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutVideoInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutVideoInput, HistoryUncheckedUpdateWithoutVideoInput>
  }

  export type HistoryUpdateManyWithWhereWithoutVideoInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutVideoInput>
  }

  export type VideoCreateWithoutMovieInput = {
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutVideoInput
    favoritesVideo?: FavoriteVideoCreateNestedManyWithoutVideoInput
    history?: HistoryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutMovieInput = {
    id?: number
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutVideoInput
    favoritesVideo?: FavoriteVideoUncheckedCreateNestedManyWithoutVideoInput
    history?: HistoryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutMovieInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutMovieInput, VideoUncheckedCreateWithoutMovieInput>
  }

  export type VideoUpsertWithoutMovieInput = {
    update: XOR<VideoUpdateWithoutMovieInput, VideoUncheckedUpdateWithoutMovieInput>
    create: XOR<VideoCreateWithoutMovieInput, VideoUncheckedCreateWithoutMovieInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutMovieInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutMovieInput, VideoUncheckedUpdateWithoutMovieInput>
  }

  export type VideoUpdateWithoutMovieInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutVideoNestedInput
    favoritesVideo?: FavoriteVideoUpdateManyWithoutVideoNestedInput
    history?: HistoryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutVideoNestedInput
    favoritesVideo?: FavoriteVideoUncheckedUpdateManyWithoutVideoNestedInput
    history?: HistoryUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type EpisodeCreateWithoutSeriesInput = {
    season_number: number
    episode_number: number
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutSeriesInput = {
    id?: number
    video_id: number
    season_number: number
    episode_number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeCreateOrConnectWithoutSeriesInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput>
  }

  export type EpisodeCreateManySeriesInputEnvelope = {
    data: EpisodeCreateManySeriesInput | EpisodeCreateManySeriesInput[]
    skipDuplicates?: boolean
  }

  export type EpisodeUpsertWithWhereUniqueWithoutSeriesInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutSeriesInput, EpisodeUncheckedUpdateWithoutSeriesInput>
    create: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutSeriesInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutSeriesInput, EpisodeUncheckedUpdateWithoutSeriesInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutSeriesInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutSeriesInput>
  }

  export type VideoCreateWithoutEpisodesInput = {
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie?: MovieCreateNestedOneWithoutVideoInput
    favoritesVideo?: FavoriteVideoCreateNestedManyWithoutVideoInput
    history?: HistoryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutEpisodesInput = {
    id?: number
    title: string
    description?: string | null
    thumbnail?: string | null
    api_url: string
    type: $Enums.VideoType
    release_year?: number | null
    duration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movie?: MovieUncheckedCreateNestedOneWithoutVideoInput
    favoritesVideo?: FavoriteVideoUncheckedCreateNestedManyWithoutVideoInput
    history?: HistoryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutEpisodesInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutEpisodesInput, VideoUncheckedCreateWithoutEpisodesInput>
  }

  export type SeriesCreateWithoutEpisodesInput = {
    title: string
    description?: string | null
    thumbnail?: string | null
    start_year?: number | null
    end_year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesUncheckedCreateWithoutEpisodesInput = {
    id?: number
    title: string
    description?: string | null
    thumbnail?: string | null
    start_year?: number | null
    end_year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesCreateOrConnectWithoutEpisodesInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutEpisodesInput, SeriesUncheckedCreateWithoutEpisodesInput>
  }

  export type VideoUpsertWithoutEpisodesInput = {
    update: XOR<VideoUpdateWithoutEpisodesInput, VideoUncheckedUpdateWithoutEpisodesInput>
    create: XOR<VideoCreateWithoutEpisodesInput, VideoUncheckedCreateWithoutEpisodesInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutEpisodesInput, VideoUncheckedUpdateWithoutEpisodesInput>
  }

  export type VideoUpdateWithoutEpisodesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneWithoutVideoNestedInput
    favoritesVideo?: FavoriteVideoUpdateManyWithoutVideoNestedInput
    history?: HistoryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    api_url?: StringFieldUpdateOperationsInput | string
    type?: EnumVideoTypeFieldUpdateOperationsInput | $Enums.VideoType
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUncheckedUpdateOneWithoutVideoNestedInput
    favoritesVideo?: FavoriteVideoUncheckedUpdateManyWithoutVideoNestedInput
    history?: HistoryUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type SeriesUpsertWithoutEpisodesInput = {
    update: XOR<SeriesUpdateWithoutEpisodesInput, SeriesUncheckedUpdateWithoutEpisodesInput>
    create: XOR<SeriesCreateWithoutEpisodesInput, SeriesUncheckedCreateWithoutEpisodesInput>
    where?: SeriesWhereInput
  }

  export type SeriesUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: SeriesWhereInput
    data: XOR<SeriesUpdateWithoutEpisodesInput, SeriesUncheckedUpdateWithoutEpisodesInput>
  }

  export type SeriesUpdateWithoutEpisodesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    start_year?: NullableIntFieldUpdateOperationsInput | number | null
    end_year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    start_year?: NullableIntFieldUpdateOperationsInput | number | null
    end_year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateWithoutArtistInput = {
    title: string
    releaseYear?: number | null
    coverImage?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    music?: MusicCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistInput = {
    id?: number
    title: string
    releaseYear?: number | null
    coverImage?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    music?: MusicUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumCreateManyArtistInputEnvelope = {
    data: AlbumCreateManyArtistInput | AlbumCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type MusicCreateWithoutArtistInput = {
    title: string
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutMusicInput
    musicPlays?: MusicPlayCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicCreateNestedManyWithoutMusicInput
    history?: HistoryCreateNestedManyWithoutMusicInput
  }

  export type MusicUncheckedCreateWithoutArtistInput = {
    id?: number
    title: string
    albumId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicPlays?: MusicPlayUncheckedCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicUncheckedCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicUncheckedCreateNestedManyWithoutMusicInput
    history?: HistoryUncheckedCreateNestedManyWithoutMusicInput
  }

  export type MusicCreateOrConnectWithoutArtistInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutArtistInput, MusicUncheckedCreateWithoutArtistInput>
  }

  export type MusicCreateManyArtistInputEnvelope = {
    data: MusicCreateManyArtistInput | MusicCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: IntFilter<"Album"> | number
    title?: StringFilter<"Album"> | string
    artistId?: IntFilter<"Album"> | number
    releaseYear?: IntNullableFilter<"Album"> | number | null
    coverImage?: StringNullableFilter<"Album"> | string | null
    description?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
  }

  export type MusicUpsertWithWhereUniqueWithoutArtistInput = {
    where: MusicWhereUniqueInput
    update: XOR<MusicUpdateWithoutArtistInput, MusicUncheckedUpdateWithoutArtistInput>
    create: XOR<MusicCreateWithoutArtistInput, MusicUncheckedCreateWithoutArtistInput>
  }

  export type MusicUpdateWithWhereUniqueWithoutArtistInput = {
    where: MusicWhereUniqueInput
    data: XOR<MusicUpdateWithoutArtistInput, MusicUncheckedUpdateWithoutArtistInput>
  }

  export type MusicUpdateManyWithWhereWithoutArtistInput = {
    where: MusicScalarWhereInput
    data: XOR<MusicUpdateManyMutationInput, MusicUncheckedUpdateManyWithoutArtistInput>
  }

  export type MusicScalarWhereInput = {
    AND?: MusicScalarWhereInput | MusicScalarWhereInput[]
    OR?: MusicScalarWhereInput[]
    NOT?: MusicScalarWhereInput | MusicScalarWhereInput[]
    id?: IntFilter<"Music"> | number
    title?: StringFilter<"Music"> | string
    albumId?: IntFilter<"Music"> | number
    artistId?: IntFilter<"Music"> | number
    duration?: StringNullableFilter<"Music"> | string | null
    genre?: StringNullableFilter<"Music"> | string | null
    apiUrl?: StringFilter<"Music"> | string
    createdAt?: DateTimeFilter<"Music"> | Date | string
    updatedAt?: DateTimeFilter<"Music"> | Date | string
  }

  export type ArtistCreateWithoutAlbumsInput = {
    name: string
    bio?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    music?: MusicCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutAlbumsInput = {
    id?: number
    name: string
    bio?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    music?: MusicUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutAlbumsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
  }

  export type MusicCreateWithoutAlbumInput = {
    title: string
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artist: ArtistCreateNestedOneWithoutMusicInput
    musicPlays?: MusicPlayCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicCreateNestedManyWithoutMusicInput
    history?: HistoryCreateNestedManyWithoutMusicInput
  }

  export type MusicUncheckedCreateWithoutAlbumInput = {
    id?: number
    title: string
    artistId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicPlays?: MusicPlayUncheckedCreateNestedManyWithoutMusicInput
    playlists?: PlaylistMusicUncheckedCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicUncheckedCreateNestedManyWithoutMusicInput
    history?: HistoryUncheckedCreateNestedManyWithoutMusicInput
  }

  export type MusicCreateOrConnectWithoutAlbumInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutAlbumInput, MusicUncheckedCreateWithoutAlbumInput>
  }

  export type MusicCreateManyAlbumInputEnvelope = {
    data: MusicCreateManyAlbumInput | MusicCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type ArtistUpsertWithoutAlbumsInput = {
    update: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type ArtistUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: MusicUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: MusicUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type MusicUpsertWithWhereUniqueWithoutAlbumInput = {
    where: MusicWhereUniqueInput
    update: XOR<MusicUpdateWithoutAlbumInput, MusicUncheckedUpdateWithoutAlbumInput>
    create: XOR<MusicCreateWithoutAlbumInput, MusicUncheckedCreateWithoutAlbumInput>
  }

  export type MusicUpdateWithWhereUniqueWithoutAlbumInput = {
    where: MusicWhereUniqueInput
    data: XOR<MusicUpdateWithoutAlbumInput, MusicUncheckedUpdateWithoutAlbumInput>
  }

  export type MusicUpdateManyWithWhereWithoutAlbumInput = {
    where: MusicScalarWhereInput
    data: XOR<MusicUpdateManyMutationInput, MusicUncheckedUpdateManyWithoutAlbumInput>
  }

  export type AlbumCreateWithoutMusicInput = {
    title: string
    releaseYear?: number | null
    coverImage?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artist: ArtistCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumUncheckedCreateWithoutMusicInput = {
    id?: number
    title: string
    artistId: number
    releaseYear?: number | null
    coverImage?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumCreateOrConnectWithoutMusicInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutMusicInput, AlbumUncheckedCreateWithoutMusicInput>
  }

  export type ArtistCreateWithoutMusicInput = {
    name: string
    bio?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutMusicInput = {
    id?: number
    name: string
    bio?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutMusicInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutMusicInput, ArtistUncheckedCreateWithoutMusicInput>
  }

  export type MusicPlayCreateWithoutMusicInput = {
    playedAt?: Date | string
    ip?: string | null
    userId?: number | null
    device?: string | null
  }

  export type MusicPlayUncheckedCreateWithoutMusicInput = {
    id?: number
    playedAt?: Date | string
    ip?: string | null
    userId?: number | null
    device?: string | null
  }

  export type MusicPlayCreateOrConnectWithoutMusicInput = {
    where: MusicPlayWhereUniqueInput
    create: XOR<MusicPlayCreateWithoutMusicInput, MusicPlayUncheckedCreateWithoutMusicInput>
  }

  export type MusicPlayCreateManyMusicInputEnvelope = {
    data: MusicPlayCreateManyMusicInput | MusicPlayCreateManyMusicInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistMusicCreateWithoutMusicInput = {
    sortOrder?: number
    addedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutMusicInput
  }

  export type PlaylistMusicUncheckedCreateWithoutMusicInput = {
    id?: number
    playlistId: number
    sortOrder?: number
    addedAt?: Date | string
  }

  export type PlaylistMusicCreateOrConnectWithoutMusicInput = {
    where: PlaylistMusicWhereUniqueInput
    create: XOR<PlaylistMusicCreateWithoutMusicInput, PlaylistMusicUncheckedCreateWithoutMusicInput>
  }

  export type PlaylistMusicCreateManyMusicInputEnvelope = {
    data: PlaylistMusicCreateManyMusicInput | PlaylistMusicCreateManyMusicInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteMusicCreateWithoutMusicInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesMusicInput
  }

  export type FavoriteMusicUncheckedCreateWithoutMusicInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type FavoriteMusicCreateOrConnectWithoutMusicInput = {
    where: FavoriteMusicWhereUniqueInput
    create: XOR<FavoriteMusicCreateWithoutMusicInput, FavoriteMusicUncheckedCreateWithoutMusicInput>
  }

  export type FavoriteMusicCreateManyMusicInputEnvelope = {
    data: FavoriteMusicCreateManyMusicInput | FavoriteMusicCreateManyMusicInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutMusicInput = {
    playedAt?: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
    video?: VideoCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutMusicInput = {
    id?: number
    userId: number
    videoId?: number | null
    playedAt?: Date | string
  }

  export type HistoryCreateOrConnectWithoutMusicInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutMusicInput, HistoryUncheckedCreateWithoutMusicInput>
  }

  export type HistoryCreateManyMusicInputEnvelope = {
    data: HistoryCreateManyMusicInput | HistoryCreateManyMusicInput[]
    skipDuplicates?: boolean
  }

  export type AlbumUpsertWithoutMusicInput = {
    update: XOR<AlbumUpdateWithoutMusicInput, AlbumUncheckedUpdateWithoutMusicInput>
    create: XOR<AlbumCreateWithoutMusicInput, AlbumUncheckedCreateWithoutMusicInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutMusicInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutMusicInput, AlbumUncheckedUpdateWithoutMusicInput>
  }

  export type AlbumUpdateWithoutMusicInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type AlbumUncheckedUpdateWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artistId?: IntFieldUpdateOperationsInput | number
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUpsertWithoutMusicInput = {
    update: XOR<ArtistUpdateWithoutMusicInput, ArtistUncheckedUpdateWithoutMusicInput>
    create: XOR<ArtistCreateWithoutMusicInput, ArtistUncheckedCreateWithoutMusicInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutMusicInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutMusicInput, ArtistUncheckedUpdateWithoutMusicInput>
  }

  export type ArtistUpdateWithoutMusicInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type MusicPlayUpsertWithWhereUniqueWithoutMusicInput = {
    where: MusicPlayWhereUniqueInput
    update: XOR<MusicPlayUpdateWithoutMusicInput, MusicPlayUncheckedUpdateWithoutMusicInput>
    create: XOR<MusicPlayCreateWithoutMusicInput, MusicPlayUncheckedCreateWithoutMusicInput>
  }

  export type MusicPlayUpdateWithWhereUniqueWithoutMusicInput = {
    where: MusicPlayWhereUniqueInput
    data: XOR<MusicPlayUpdateWithoutMusicInput, MusicPlayUncheckedUpdateWithoutMusicInput>
  }

  export type MusicPlayUpdateManyWithWhereWithoutMusicInput = {
    where: MusicPlayScalarWhereInput
    data: XOR<MusicPlayUpdateManyMutationInput, MusicPlayUncheckedUpdateManyWithoutMusicInput>
  }

  export type MusicPlayScalarWhereInput = {
    AND?: MusicPlayScalarWhereInput | MusicPlayScalarWhereInput[]
    OR?: MusicPlayScalarWhereInput[]
    NOT?: MusicPlayScalarWhereInput | MusicPlayScalarWhereInput[]
    id?: IntFilter<"MusicPlay"> | number
    musicId?: IntFilter<"MusicPlay"> | number
    playedAt?: DateTimeFilter<"MusicPlay"> | Date | string
    ip?: StringNullableFilter<"MusicPlay"> | string | null
    userId?: IntNullableFilter<"MusicPlay"> | number | null
    device?: StringNullableFilter<"MusicPlay"> | string | null
  }

  export type PlaylistMusicUpsertWithWhereUniqueWithoutMusicInput = {
    where: PlaylistMusicWhereUniqueInput
    update: XOR<PlaylistMusicUpdateWithoutMusicInput, PlaylistMusicUncheckedUpdateWithoutMusicInput>
    create: XOR<PlaylistMusicCreateWithoutMusicInput, PlaylistMusicUncheckedCreateWithoutMusicInput>
  }

  export type PlaylistMusicUpdateWithWhereUniqueWithoutMusicInput = {
    where: PlaylistMusicWhereUniqueInput
    data: XOR<PlaylistMusicUpdateWithoutMusicInput, PlaylistMusicUncheckedUpdateWithoutMusicInput>
  }

  export type PlaylistMusicUpdateManyWithWhereWithoutMusicInput = {
    where: PlaylistMusicScalarWhereInput
    data: XOR<PlaylistMusicUpdateManyMutationInput, PlaylistMusicUncheckedUpdateManyWithoutMusicInput>
  }

  export type PlaylistMusicScalarWhereInput = {
    AND?: PlaylistMusicScalarWhereInput | PlaylistMusicScalarWhereInput[]
    OR?: PlaylistMusicScalarWhereInput[]
    NOT?: PlaylistMusicScalarWhereInput | PlaylistMusicScalarWhereInput[]
    id?: IntFilter<"PlaylistMusic"> | number
    playlistId?: IntFilter<"PlaylistMusic"> | number
    musicId?: IntFilter<"PlaylistMusic"> | number
    sortOrder?: IntFilter<"PlaylistMusic"> | number
    addedAt?: DateTimeFilter<"PlaylistMusic"> | Date | string
  }

  export type FavoriteMusicUpsertWithWhereUniqueWithoutMusicInput = {
    where: FavoriteMusicWhereUniqueInput
    update: XOR<FavoriteMusicUpdateWithoutMusicInput, FavoriteMusicUncheckedUpdateWithoutMusicInput>
    create: XOR<FavoriteMusicCreateWithoutMusicInput, FavoriteMusicUncheckedCreateWithoutMusicInput>
  }

  export type FavoriteMusicUpdateWithWhereUniqueWithoutMusicInput = {
    where: FavoriteMusicWhereUniqueInput
    data: XOR<FavoriteMusicUpdateWithoutMusicInput, FavoriteMusicUncheckedUpdateWithoutMusicInput>
  }

  export type FavoriteMusicUpdateManyWithWhereWithoutMusicInput = {
    where: FavoriteMusicScalarWhereInput
    data: XOR<FavoriteMusicUpdateManyMutationInput, FavoriteMusicUncheckedUpdateManyWithoutMusicInput>
  }

  export type HistoryUpsertWithWhereUniqueWithoutMusicInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutMusicInput, HistoryUncheckedUpdateWithoutMusicInput>
    create: XOR<HistoryCreateWithoutMusicInput, HistoryUncheckedCreateWithoutMusicInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutMusicInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutMusicInput, HistoryUncheckedUpdateWithoutMusicInput>
  }

  export type HistoryUpdateManyWithWhereWithoutMusicInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutMusicInput>
  }

  export type MusicCreateWithoutMusicPlaysInput = {
    title: string
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutMusicInput
    artist: ArtistCreateNestedOneWithoutMusicInput
    playlists?: PlaylistMusicCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicCreateNestedManyWithoutMusicInput
    history?: HistoryCreateNestedManyWithoutMusicInput
  }

  export type MusicUncheckedCreateWithoutMusicPlaysInput = {
    id?: number
    title: string
    albumId: number
    artistId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistMusicUncheckedCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicUncheckedCreateNestedManyWithoutMusicInput
    history?: HistoryUncheckedCreateNestedManyWithoutMusicInput
  }

  export type MusicCreateOrConnectWithoutMusicPlaysInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutMusicPlaysInput, MusicUncheckedCreateWithoutMusicPlaysInput>
  }

  export type MusicUpsertWithoutMusicPlaysInput = {
    update: XOR<MusicUpdateWithoutMusicPlaysInput, MusicUncheckedUpdateWithoutMusicPlaysInput>
    create: XOR<MusicCreateWithoutMusicPlaysInput, MusicUncheckedCreateWithoutMusicPlaysInput>
    where?: MusicWhereInput
  }

  export type MusicUpdateToOneWithWhereWithoutMusicPlaysInput = {
    where?: MusicWhereInput
    data: XOR<MusicUpdateWithoutMusicPlaysInput, MusicUncheckedUpdateWithoutMusicPlaysInput>
  }

  export type MusicUpdateWithoutMusicPlaysInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutMusicNestedInput
    artist?: ArtistUpdateOneRequiredWithoutMusicNestedInput
    playlists?: PlaylistMusicUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUpdateManyWithoutMusicNestedInput
    history?: HistoryUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateWithoutMusicPlaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistMusicUncheckedUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUncheckedUpdateManyWithoutMusicNestedInput
    history?: HistoryUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type PlaylistMusicCreateWithoutPlaylistInput = {
    sortOrder?: number
    addedAt?: Date | string
    music: MusicCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistMusicUncheckedCreateWithoutPlaylistInput = {
    id?: number
    musicId: number
    sortOrder?: number
    addedAt?: Date | string
  }

  export type PlaylistMusicCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistMusicWhereUniqueInput
    create: XOR<PlaylistMusicCreateWithoutPlaylistInput, PlaylistMusicUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistMusicCreateManyPlaylistInputEnvelope = {
    data: PlaylistMusicCreateManyPlaylistInput | PlaylistMusicCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistMusicUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistMusicWhereUniqueInput
    update: XOR<PlaylistMusicUpdateWithoutPlaylistInput, PlaylistMusicUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistMusicCreateWithoutPlaylistInput, PlaylistMusicUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistMusicUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistMusicWhereUniqueInput
    data: XOR<PlaylistMusicUpdateWithoutPlaylistInput, PlaylistMusicUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistMusicUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistMusicScalarWhereInput
    data: XOR<PlaylistMusicUpdateManyMutationInput, PlaylistMusicUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistCreateWithoutMusicInput = {
    title: string
    description?: string | null
    userId?: number | null
    isPublic?: boolean
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUncheckedCreateWithoutMusicInput = {
    id?: number
    title: string
    description?: string | null
    userId?: number | null
    isPublic?: boolean
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateOrConnectWithoutMusicInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutMusicInput, PlaylistUncheckedCreateWithoutMusicInput>
  }

  export type MusicCreateWithoutPlaylistsInput = {
    title: string
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutMusicInput
    artist: ArtistCreateNestedOneWithoutMusicInput
    musicPlays?: MusicPlayCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicCreateNestedManyWithoutMusicInput
    history?: HistoryCreateNestedManyWithoutMusicInput
  }

  export type MusicUncheckedCreateWithoutPlaylistsInput = {
    id?: number
    title: string
    albumId: number
    artistId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicPlays?: MusicPlayUncheckedCreateNestedManyWithoutMusicInput
    favoritesMusic?: FavoriteMusicUncheckedCreateNestedManyWithoutMusicInput
    history?: HistoryUncheckedCreateNestedManyWithoutMusicInput
  }

  export type MusicCreateOrConnectWithoutPlaylistsInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutPlaylistsInput, MusicUncheckedCreateWithoutPlaylistsInput>
  }

  export type PlaylistUpsertWithoutMusicInput = {
    update: XOR<PlaylistUpdateWithoutMusicInput, PlaylistUncheckedUpdateWithoutMusicInput>
    create: XOR<PlaylistCreateWithoutMusicInput, PlaylistUncheckedCreateWithoutMusicInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutMusicInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutMusicInput, PlaylistUncheckedUpdateWithoutMusicInput>
  }

  export type PlaylistUpdateWithoutMusicInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicUpsertWithoutPlaylistsInput = {
    update: XOR<MusicUpdateWithoutPlaylistsInput, MusicUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<MusicCreateWithoutPlaylistsInput, MusicUncheckedCreateWithoutPlaylistsInput>
    where?: MusicWhereInput
  }

  export type MusicUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: MusicWhereInput
    data: XOR<MusicUpdateWithoutPlaylistsInput, MusicUncheckedUpdateWithoutPlaylistsInput>
  }

  export type MusicUpdateWithoutPlaylistsInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutMusicNestedInput
    artist?: ArtistUpdateOneRequiredWithoutMusicNestedInput
    musicPlays?: MusicPlayUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUpdateManyWithoutMusicNestedInput
    history?: HistoryUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateWithoutPlaylistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicPlays?: MusicPlayUncheckedUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUncheckedUpdateManyWithoutMusicNestedInput
    history?: HistoryUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type FavoriteMusicCreateManyUserInput = {
    id?: number
    musicId: number
    createdAt?: Date | string
  }

  export type FavoriteVideoCreateManyUserInput = {
    id?: number
    videoId: number
    createdAt?: Date | string
  }

  export type HistoryCreateManyUserInput = {
    id?: number
    musicId?: number | null
    videoId?: number | null
    playedAt?: Date | string
  }

  export type FavoriteMusicUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: MusicUpdateOneRequiredWithoutFavoritesMusicNestedInput
  }

  export type FavoriteMusicUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteMusicUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteVideoUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutFavoritesVideoNestedInput
  }

  export type FavoriteVideoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteVideoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUpdateWithoutUserInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: MusicUpdateOneWithoutHistoryNestedInput
    video?: VideoUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicId?: NullableIntFieldUpdateOperationsInput | number | null
    videoId?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicId?: NullableIntFieldUpdateOperationsInput | number | null
    videoId?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateManyVideoInput = {
    id?: number
    series_id: number
    season_number: number
    episode_number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteVideoCreateManyVideoInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type HistoryCreateManyVideoInput = {
    id?: number
    userId: number
    musicId?: number | null
    playedAt?: Date | string
  }

  export type EpisodeUpdateWithoutVideoInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    series_id?: IntFieldUpdateOperationsInput | number
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateManyWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    series_id?: IntFieldUpdateOperationsInput | number
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteVideoUpdateWithoutVideoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesVideoNestedInput
  }

  export type FavoriteVideoUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteVideoUncheckedUpdateManyWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUpdateWithoutVideoInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
    music?: MusicUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    musicId?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    musicId?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateManySeriesInput = {
    id?: number
    video_id: number
    season_number: number
    episode_number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUpdateWithoutSeriesInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_id?: IntFieldUpdateOperationsInput | number
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateManyWithoutSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_id?: IntFieldUpdateOperationsInput | number
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateManyArtistInput = {
    id?: number
    title: string
    releaseYear?: number | null
    coverImage?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MusicCreateManyArtistInput = {
    id?: number
    title: string
    albumId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumUpdateWithoutArtistInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: MusicUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: MusicUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicUpdateWithoutArtistInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutMusicNestedInput
    musicPlays?: MusicPlayUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUpdateManyWithoutMusicNestedInput
    history?: HistoryUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicPlays?: MusicPlayUncheckedUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUncheckedUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUncheckedUpdateManyWithoutMusicNestedInput
    history?: HistoryUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicCreateManyAlbumInput = {
    id?: number
    title: string
    artistId: number
    duration?: string | null
    genre?: string | null
    apiUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MusicUpdateWithoutAlbumInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutMusicNestedInput
    musicPlays?: MusicPlayUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUpdateManyWithoutMusicNestedInput
    history?: HistoryUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artistId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicPlays?: MusicPlayUncheckedUpdateManyWithoutMusicNestedInput
    playlists?: PlaylistMusicUncheckedUpdateManyWithoutMusicNestedInput
    favoritesMusic?: FavoriteMusicUncheckedUpdateManyWithoutMusicNestedInput
    history?: HistoryUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artistId?: IntFieldUpdateOperationsInput | number
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicPlayCreateManyMusicInput = {
    id?: number
    playedAt?: Date | string
    ip?: string | null
    userId?: number | null
    device?: string | null
  }

  export type PlaylistMusicCreateManyMusicInput = {
    id?: number
    playlistId: number
    sortOrder?: number
    addedAt?: Date | string
  }

  export type FavoriteMusicCreateManyMusicInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type HistoryCreateManyMusicInput = {
    id?: number
    userId: number
    videoId?: number | null
    playedAt?: Date | string
  }

  export type MusicPlayUpdateWithoutMusicInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicPlayUncheckedUpdateWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicPlayUncheckedUpdateManyWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistMusicUpdateWithoutMusicInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutMusicNestedInput
  }

  export type PlaylistMusicUncheckedUpdateWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistMusicUncheckedUpdateManyWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteMusicUpdateWithoutMusicInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesMusicNestedInput
  }

  export type FavoriteMusicUncheckedUpdateWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteMusicUncheckedUpdateManyWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUpdateWithoutMusicInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
    video?: VideoUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    videoId?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    videoId?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistMusicCreateManyPlaylistInput = {
    id?: number
    musicId: number
    sortOrder?: number
    addedAt?: Date | string
  }

  export type PlaylistMusicUpdateWithoutPlaylistInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: MusicUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistMusicUncheckedUpdateWithoutPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistMusicUncheckedUpdateManyWithoutPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    musicId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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