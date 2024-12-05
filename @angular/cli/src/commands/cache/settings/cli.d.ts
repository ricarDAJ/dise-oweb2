/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Argv } from 'yargs';
import { CommandModule, CommandModuleImplementation, CommandScope } from '../../../command-builder/command-module';
export declare class CacheDisableModule extends CommandModule implements CommandModuleImplementation {
    command: string;
    aliases: string;
    describe: string;
    longDescriptionPath: string | undefined;
    scope: CommandScope;
    builder(localYargs: Argv): Argv;
    run(): Promise<void>;
}
export declare class CacheEnableModule extends CommandModule implements CommandModuleImplementation {
    command: string;
    aliases: string;
    describe: string;
    longDescriptionPath: string | undefined;
    scope: CommandScope;
    builder(localYargs: Argv): Argv;
    run(): Promise<void>;
}
