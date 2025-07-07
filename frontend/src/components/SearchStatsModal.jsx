import { Modal, Table, Group, Text, Center, Box } from "@mantine/core";

export default function SearchStatsModal({ opened, onClose, data }) {
  const renderRanking = (title, ranking) => (
    <Box mb="md">
      <Text fw={600} ta="center" mb="xs">
        {title}
      </Text>
      {Array.isArray(ranking) && ranking.length > 0 ? (
        <Table withTableBorder withColumnBorders striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>#</Table.Th>
              <Table.Th>Query</Table.Th>
              <Table.Th>Percent</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {ranking.map(([pos, query, percent]) => (
              <Table.Tr key={pos + query}>
                <Table.Td>{pos}</Table.Td>
                <Table.Td>{query}</Table.Td>
                <Table.Td>{percent}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      ) : (
        <Text ta="center" c="dimmed" my="md">
          There is no data for this information.
        </Text>
      )}
    </Box>
  );

  const hasData = data?.most_searched && data.most_searched.length > 0;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text fw={700}>Search Stats</Text>}
      centered
      size="lg"
      overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
    >
      <Center
        style={{
          minHeight: 300,
          flexDirection: "column",
          justifyContent: hasData ? "flex-start" : "center",
        }}
      >
        <Group justify="center" align="flex-start">
          {renderRanking(
            <Text size="lg" fw={600}>
              People Query Ranking
            </Text>,
            data?.person_ranking
          )}
          {renderRanking(
            <Text size="lg" fw={600}>
              Movie Query Ranking
            </Text>,
            data?.movie_ranking
          )}
        </Group>
        {hasData > 0 && (
          <Text mt="md" ta="center" size="lg">
            <b>Most Searched Query:</b> {data.most_searched.join(" → ")}
          </Text>
        )}
      </Center>
    </Modal>
  );
}
