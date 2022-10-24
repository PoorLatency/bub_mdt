import {
    UnstyledButton,
    Group,
    Avatar,
    Text,
    createStyles,
    ScrollArea,
    Table,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
  
const useStyles = createStyles((theme) => ({
user: {
    display: 'block',
    width: '100%',
    height: '90%',
    padding: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
},
}));

const data = [{image: '', name: 'John Doe', reason: 'Reckless Driving'}, {image: '', name: 'John Doe', reason: 'Reckless Driving'}, {image: '', name: 'John Doe', reason: 'Reckless Driving'}]

const WarrantTable: React.FC = () => {
    const { classes } = useStyles();
    const rows = data.map((item) => (
        <tr key={item.name}>
          <td>
            <UnstyledButton className={classes.user}>
                    <Group>
                        <Avatar src={item.image} radius="xl" />

                        <div style={{ flex: 1 }}>
                            <Text size="sm" weight={500}>
                                {item.name}
                            </Text>

                            <Text color="dimmed" size="xs">
                                {item.reason}
                            </Text>
                        </div>

                        <IconChevronRight size={14} stroke={1.5} />
                    </Group>
                </UnstyledButton>
          </td>
        </tr>
      ));

    return (
        <ScrollArea>
            <Table verticalSpacing="sm">
                <thead>
                    <tr>
                        <th>Warrants</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </ScrollArea>
    );
};
  
export default WarrantTable;