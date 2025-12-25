import { Box, TextField, Button, Chip, Stack } from '@mui/material';
import { FormControl, FormGroup } from '@mui/material';
import React from 'react';
import { useGetAllCategories } from '@app/features/landing/hooks/useGetAllCategories';

const SearchBar: React.FC = () => {
    const { categories } = useGetAllCategories();
    const [selected, setSelected] = React.useState<string>('all');

    const handleChipClick = (id: string) => {
        setSelected(id);
    };

    const allCategories = [
        { _id: 'all', name: 'All Categories' },
        ...categories
    ];

    return (
        <Box
            component="section"
            sx={{
                width: '100%',
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                margin: '40px auto 0 auto',
            }}
        >
            <form style={{ width: '100%' }}>
                <FormGroup row sx={{ width: '100%', alignItems: 'center' }}>
                    <FormControl sx={{ flex: 2, mr: 1 }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Search for items..."
                            size="small"
                        />
                    </FormControl>
                    <FormControl sx={{ flex: 1, mr: 1 }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Location"
                            size="small"
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ height: '40px', fontSize: '16px', padding: '0 24px', boxShadow: 'none' }}
                    >
                        Search
                    </Button>
                </FormGroup>
            </form>
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
                {allCategories.map((cat) => (
                    <Chip
                        key={cat._id}
                        label={cat.name}
                        color={selected === cat._id ? 'primary' : 'default'}
                        variant={selected === cat._id ? 'filled' : 'outlined'}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => handleChipClick(cat._id)}
                    />
                ))}
            </Stack>
        </Box>
    );
}
export default SearchBar;