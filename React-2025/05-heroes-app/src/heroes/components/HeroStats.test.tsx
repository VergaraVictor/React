import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { HeroStats } from './HeroStats';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useHeroSummary } from '../hooks/useHeroSummary';

vi.mock('../hooks/useHeroSummary');
const mockUseHeroSummary = vi.mocked(useHeroSummary);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false
        }
    }
});

const renderHeroStats = () => {

    mockUseHeroSummary.mockReturnValue({
        data: undefined
    } as unknown as ReturnType<typeof useHeroSummary>);

    return render(
        <QueryClientProvider client={queryClient}>
            <HeroStats />
        </QueryClientProvider>
    )
}

describe('HeroStats', () => {
    test('should render component with default values', () => {
        const { container } = renderHeroStats();
        expect(screen.getByText('Loading...')).toBeDefined();
        expect(container).toMatchSnapshot();
    });
});