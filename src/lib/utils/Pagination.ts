import type { PaginationResult } from '$lib/components/table/Table';
import { Sort, type Pagination } from '$lib/generated';

export function nonNullPaginationResult<T>(result: PaginationResult<T>) {
    return { items: result.items.map((s) => s!), total: result.total };
}

export function paramsToPagination(params: URLSearchParams): Pagination {
    return {
        itemsPerPage: Number(params.get('items') ?? '10'),
        page: Number(params.get('page') ?? 1) - 1,
        search: params.get('search'),
        sort: params.has('sort')
            ? {
                by: params.get('sort')!,
                order: params.get('order') === 'ASC' ? Sort.order.ASC : Sort.order.DESC
            }
            : null,
        period:
            params.has('from') || params.has('to')
                ? {
                    from: new Date(Number(params.get('from')) ?? 0).toISOString(),
                    to: new Date(Number(params.get('to')) ?? Number.MAX_SAFE_INTEGER).toISOString()
                }
                : null
    };
}
