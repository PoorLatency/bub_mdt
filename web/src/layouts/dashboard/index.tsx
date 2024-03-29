import { Container, createStyles, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import UserRoleTable from './components/UserRoleTable';
import WarrantTable from './components/WarrantTable';

const PRIMARY_COL_HEIGHT = 760;

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: 25,
    margin: 0,
  },
}));

const Dashboard: React.FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container style={{ margin: 0, maxWidth: '100%', padding: '10px', height: '760px' }}>
      <SimpleGrid cols={3} spacing="xl">
        <UserRoleTable />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
        <WarrantTable />
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false}/> */}
      </SimpleGrid>
    </Container>
  );
};
  
export default Dashboard;