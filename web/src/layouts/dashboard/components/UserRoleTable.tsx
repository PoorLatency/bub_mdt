import { Avatar, Badge, Table, Group, Text, Select, ScrollArea, Box } from '@mantine/core';


const UserRoleTable: React.FC = (height) => {
    return (
        <Box>
            <ScrollArea>
                <Table sx={{ minWidth: 300 }} verticalSpacing="sm">
                <thead>
                    <tr>
                    <th>Employee</th>
                    <th>Role</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={"item.name"}>
                        <td>
                            <Group spacing="sm">
                            <div>
                                <Text size="sm" weight={500}>
                                {"Bubble"}
                                </Text>
                            </div>
                            </Group>
                        </td>
                        <td>
                            <p>Officer</p>
                        </td>
                        <td>
                            <Badge fullWidth>Active</Badge>
                        </td>
                    </tr>
                </tbody>
                </Table>
            </ScrollArea>
        </Box>
    );
  };
  
  export default UserRoleTable;