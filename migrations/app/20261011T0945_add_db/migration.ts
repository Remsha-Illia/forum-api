#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/d266b3736c557d1567279738d590ca5750cc242d1c5655e403d31a7d436a3a7a/contract';
import endContract from '../../snapshots/d266b3736c557d1567279738d590ca5750cc242d1c5655e403d31a7d436a3a7a/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'Post',
        columns: [
          col('author', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('category', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('content', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
