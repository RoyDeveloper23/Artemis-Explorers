export interface IGeneric<T> {
  data:       T;
  status:     number;
  statusText: string;
  headers:    WelcomeHeaders;
  config:     Config;
  request:    Request;
}

export interface Config {
  transitional:      Transitional;
  adapter:           string[];
  transformRequest:  null[];
  transformResponse: null[];
  timeout:           number;
  xsrfCookieName:    string;
  xsrfHeaderName:    string;
  maxContentLength:  number;
  maxBodyLength:     number;
  env:               Request;
  headers:           ConfigHeaders;
  method:            string;
  url:               string;
}

export interface Request {
}

export interface ConfigHeaders {
  Accept: string;
}

export interface Transitional {
  silentJSONParsing:   boolean;
  forcedJSONParsing:   boolean;
  clarifyTimeoutError: boolean;
}

export interface  IAsteroide {
  copyright:       string;
  date:            Date;
  explanation:     string;
  hdurl:           string;
  media_type:      string;
  service_version: string;
  title:           string;
  url:             string;
}

export interface WelcomeHeaders {
  "content-type":          string;
  "x-ratelimit-limit":     string;
  "x-ratelimit-remaining": string;
}