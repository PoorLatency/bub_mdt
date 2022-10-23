import { Container, createStyles, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import UserRoleTable from './components/UserRoleTable';

const PRIMARY_COL_HEIGHT = 700;

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: 25,
    margin: 0,
    maxWidth: 1050,
  },
}));

const Dashboard: React.FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md" className={classes.container} style={{ width: '97%' }}>
      <SimpleGrid cols={3} spacing="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <UserRoleTable />
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false}/>
      </SimpleGrid>
    </Container>
  );
};
  
export default Dashboard;