export interface FilerObjectProps {
    sort: string;
    query: string;
}

export interface FilterProps {
    filter: FilerObjectProps;
    setFilter: (value: FilerObjectProps) => void
}