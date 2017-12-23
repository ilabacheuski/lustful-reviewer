import {IProvider} from '../typings/provider.d'
import {BitBucketProvider} from './bitbucket/bitbucket'

export const providers: IProvider[] = [new BitBucketProvider];
