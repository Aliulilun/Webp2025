import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const App = () => {
  const [dataset, setDataset] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: '名稱', flex: 1 },
    { field: 'location', headerName: '地點', flex: 1 },
    { field: 'price', headerName: '票價', flex: 1 },
  ];

  // 呼叫 API 並取得資料
  useEffect(() => {
    fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map((item, index) => ({
          id: index + 1,
          title: item.title || '無資料',
          location: item.showInfo?.[0]?.location || '無地點',
          price: item.showInfo?.[0]?.price || '無票價',
        }));
        setDataset(formattedData);
        setFilteredData(formattedData);
      });
  }, []);

  // 搜尋處理
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = dataset.filter(item =>
      item.title.toLowerCase().includes(value) ||
      item.location.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
    setPage(0);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>景點觀光展覽資訊</Typography>

      <TextField
        label="搜尋"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />

      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          page={page}
          onPageChange={(newPage) => setPage(newPage)}
          pageSize={pageSize}
          onPageSizeChange={(newSize) => setPageSize(newSize)}
          pagination
          paginationMode="client"
        />
      </Box>
    </Container>
  );
};

export default App;
