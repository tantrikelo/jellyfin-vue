/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DeviceInfo } from '../models';
// @ts-ignore
import { DeviceInfoQueryResult } from '../models';
// @ts-ignore
import { DeviceOptions } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * DevicesApi - axios parameter creator
 * @export
 */
export const DevicesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDevice: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteDevice.');
            }
            const localVarPath = `/Devices`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get info for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceInfo: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getDeviceInfo.');
            }
            const localVarPath = `/Devices/Info`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get options for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceOptions: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getDeviceOptions.');
            }
            const localVarPath = `/Devices/Options`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Devices.
         * @param {boolean} [supportsSync] Gets or sets a value indicating whether [supports synchronize].
         * @param {string} [userId] Gets or sets the user identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevices: async (supportsSync?: boolean, userId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Devices`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (supportsSync !== undefined) {
                localVarQueryParameter['supportsSync'] = supportsSync;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update device options.
         * @param {string} id Device Id.
         * @param {DeviceOptions} deviceOptions Device Options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDeviceOptions: async (id: string, deviceOptions: DeviceOptions, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateDeviceOptions.');
            }
            // verify required parameter 'deviceOptions' is not null or undefined
            if (deviceOptions === null || deviceOptions === undefined) {
                throw new RequiredError('deviceOptions','Required parameter deviceOptions was null or undefined when calling updateDeviceOptions.');
            }
            const localVarPath = `/Devices/Options`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof deviceOptions !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(deviceOptions !== undefined ? deviceOptions : {}) : (deviceOptions || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DevicesApi - functional programming interface
 * @export
 */
export const DevicesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDevice(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).deleteDevice(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get info for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeviceInfo(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceInfo>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).getDeviceInfo(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get options for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeviceOptions(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceOptions>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).getDeviceOptions(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Devices.
         * @param {boolean} [supportsSync] Gets or sets a value indicating whether [supports synchronize].
         * @param {string} [userId] Gets or sets the user identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDevices(supportsSync?: boolean, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceInfoQueryResult>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).getDevices(supportsSync, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update device options.
         * @param {string} id Device Id.
         * @param {DeviceOptions} deviceOptions Device Options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDeviceOptions(id: string, deviceOptions: DeviceOptions, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).updateDeviceOptions(id, deviceOptions, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DevicesApi - factory interface
 * @export
 */
export const DevicesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Deletes a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDevice(id: string, options?: any): AxiosPromise<void> {
            return DevicesApiFp(configuration).deleteDevice(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get info for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceInfo(id: string, options?: any): AxiosPromise<DeviceInfo> {
            return DevicesApiFp(configuration).getDeviceInfo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get options for a device.
         * @param {string} id Device Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceOptions(id: string, options?: any): AxiosPromise<DeviceOptions> {
            return DevicesApiFp(configuration).getDeviceOptions(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Devices.
         * @param {boolean} [supportsSync] Gets or sets a value indicating whether [supports synchronize].
         * @param {string} [userId] Gets or sets the user identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevices(supportsSync?: boolean, userId?: string, options?: any): AxiosPromise<DeviceInfoQueryResult> {
            return DevicesApiFp(configuration).getDevices(supportsSync, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update device options.
         * @param {string} id Device Id.
         * @param {DeviceOptions} deviceOptions Device Options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDeviceOptions(id: string, deviceOptions: DeviceOptions, options?: any): AxiosPromise<void> {
            return DevicesApiFp(configuration).updateDeviceOptions(id, deviceOptions, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteDevice operation in DevicesApi.
 * @export
 * @interface DevicesApiDeleteDeviceRequest
 */
export interface DevicesApiDeleteDeviceRequest {
    /**
     * Device Id.
     * @type {string}
     * @memberof DevicesApiDeleteDevice
     */
    readonly id: string
}

/**
 * Request parameters for getDeviceInfo operation in DevicesApi.
 * @export
 * @interface DevicesApiGetDeviceInfoRequest
 */
export interface DevicesApiGetDeviceInfoRequest {
    /**
     * Device Id.
     * @type {string}
     * @memberof DevicesApiGetDeviceInfo
     */
    readonly id: string
}

/**
 * Request parameters for getDeviceOptions operation in DevicesApi.
 * @export
 * @interface DevicesApiGetDeviceOptionsRequest
 */
export interface DevicesApiGetDeviceOptionsRequest {
    /**
     * Device Id.
     * @type {string}
     * @memberof DevicesApiGetDeviceOptions
     */
    readonly id: string
}

/**
 * Request parameters for getDevices operation in DevicesApi.
 * @export
 * @interface DevicesApiGetDevicesRequest
 */
export interface DevicesApiGetDevicesRequest {
    /**
     * Gets or sets a value indicating whether [supports synchronize].
     * @type {boolean}
     * @memberof DevicesApiGetDevices
     */
    readonly supportsSync?: boolean

    /**
     * Gets or sets the user identifier.
     * @type {string}
     * @memberof DevicesApiGetDevices
     */
    readonly userId?: string
}

/**
 * Request parameters for updateDeviceOptions operation in DevicesApi.
 * @export
 * @interface DevicesApiUpdateDeviceOptionsRequest
 */
export interface DevicesApiUpdateDeviceOptionsRequest {
    /**
     * Device Id.
     * @type {string}
     * @memberof DevicesApiUpdateDeviceOptions
     */
    readonly id: string

    /**
     * Device Options.
     * @type {DeviceOptions}
     * @memberof DevicesApiUpdateDeviceOptions
     */
    readonly deviceOptions: DeviceOptions
}

/**
 * DevicesApi - object-oriented interface
 * @export
 * @class DevicesApi
 * @extends {BaseAPI}
 */
export class DevicesApi extends BaseAPI {
    /**
     * 
     * @summary Deletes a device.
     * @param {DevicesApiDeleteDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public deleteDevice(requestParameters: DevicesApiDeleteDeviceRequest, options?: any) {
        return DevicesApiFp(this.configuration).deleteDevice(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get info for a device.
     * @param {DevicesApiGetDeviceInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public getDeviceInfo(requestParameters: DevicesApiGetDeviceInfoRequest, options?: any) {
        return DevicesApiFp(this.configuration).getDeviceInfo(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get options for a device.
     * @param {DevicesApiGetDeviceOptionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public getDeviceOptions(requestParameters: DevicesApiGetDeviceOptionsRequest, options?: any) {
        return DevicesApiFp(this.configuration).getDeviceOptions(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Devices.
     * @param {DevicesApiGetDevicesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public getDevices(requestParameters: DevicesApiGetDevicesRequest = {}, options?: any) {
        return DevicesApiFp(this.configuration).getDevices(requestParameters.supportsSync, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update device options.
     * @param {DevicesApiUpdateDeviceOptionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public updateDeviceOptions(requestParameters: DevicesApiUpdateDeviceOptionsRequest, options?: any) {
        return DevicesApiFp(this.configuration).updateDeviceOptions(requestParameters.id, requestParameters.deviceOptions, options).then((request) => request(this.axios, this.basePath));
    }
}
