
export interface ISearchResult {
  type?:        string;
  query?:       string[];
  features?:    IFeature[];
  attribution?: string;
}

export interface IFeature {
  id?:         string;
  type?:       string;
  place_type?: string[];
  relevance?:  number;
  properties?: IProperties;
  text?:       string;
  place_name?: string;
  bbox?:       number[];
  center?:     number[];
  geometry?:   IGeometry;
  context?:    IContext[];
}

export interface IContext {
  id?:         string;
  wikidata?:   string;
  text?:       string;
  short_code?: string;
}

export interface IGeometry {
  type?:        string;
  coordinates?: number[];
}

export interface IProperties {
  wikidata?: string;
}

export interface ISearchItem {
  label: string;
  value: IFeature;
}


export interface IWeatherResult {
  coord?:      ICoord;
  weather?:    IWeather[];
  base?:       string;
  main?:       IMain;
  visibility?: number;
  wind?:       IWind;
  clouds?:     IClouds;
  dt?:         number;
  sys?:        ISys;
  timezone?:   number;
  id?:         number;
  name?:       string;
  cod?:        number;
}

export interface IClouds {
  all?: number;
}

export interface ICoord {
  lon?: number;
  lat?: number;
}

export interface IMain {
  temp?:       number;
  feels_like?: number;
  temp_min?:   number;
  temp_max?:   number;
  pressure?:   number;
  humidity?:   number;
  sea_level?:  number;
  grnd_level?: number;
}

export interface ISys {
  type?:    number;
  id?:      number;
  country?: string;
  sunrise?: number;
  sunset?:  number;
}

export interface IWeather {
  id?:          number;
  main?:        string;
  description?: string;
  icon?:        string;
}

export interface IWind {
  speed?: number;
  deg?:   number;
  gust?:  number;
}

export interface IUser {
  id:        number;
  name:      string;
  email:     string;
  password:  string;
  enabled:   boolean;
  createdAt: string;
  role: string;
}


export interface ILoginRequest {
  username: string;
  password: string;
}