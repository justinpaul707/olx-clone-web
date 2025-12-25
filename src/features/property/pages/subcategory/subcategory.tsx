import SellSubCategoryForm from "@app/features/property/components/sellSubCategoryForm";
import { Box, Button, Paper } from "@mui/material";

const SubcategoryForm = () => {
  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: 900,
        mx: "auto",
        my: 4,
        p: { xs: 2, sm: 4 },
        borderRadius: 3,
        background: "#fafbfc",
        minHeight: 600,
      }}
    >
      <SellSubCategoryForm />
      <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          color="success"
          size="large"
          sx={{
            minWidth: 320,
            py: 1.5,
            fontWeight: 600,
            fontSize: 18,
            borderRadius: 2,
          }}
        >
          Continue to Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default SubcategoryForm;
