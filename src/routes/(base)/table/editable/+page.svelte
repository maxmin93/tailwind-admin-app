<script>
	import { writable } from 'svelte/store';
	import { Render, Subscribe, createTable, createRender } from 'svelte-headless-table';
	import { createSamples } from './create-samples';
	import EditableCell from './editable-cell.svelte';

	const data = writable(createSamples(100));
	const updateData = (rowDataId, columnId, newValue) => {
		if (['age', 'visits', 'progress'].includes(columnId)) {
			newValue = parseInt(newValue);
			if (isNaN(newValue)) {
				// Refresh data to reset invalid values.
				$data = $data;
				return;
			}
		}
		if (columnId === 'status') {
			if (!['relationship', 'single', 'complicated'].includes(newValue)) {
				// Refresh data to reset invalid values.
				$data = $data;
				return;
			}
		}
		// In this case, the dataId of each item is its index in $data.
		// You can also handle any server-synchronization necessary here.
		const idx = parseInt(rowDataId);
		const currentItem = $data[idx];
		const key = columnId; // Cast as `keyof YourDataItem`
		const newItem = { ...currentItem, [key]: newValue };
		console.log(newItem);
		$data[idx] = newItem;
		$data = $data;
		// Handle any server-synchronization.
	};

	const table = createTable(data);

	const EditableCellLabel = ({ column, row, value }) =>
		createRender(EditableCell, {
			row,
			column,
			value,
			onUpdateValue: updateData
		});

	const columns = table.createColumns([
		table.group({
			header: 'Name',
			columns: [
				table.column({
					header: 'First Name',
					cell: EditableCellLabel,
					accessor: 'firstName'
				}),
				table.column({
					header: () => 'Last Name',
					cell: EditableCellLabel,
					accessor: 'lastName'
				})
			]
		}),
		table.group({
			header: 'Info',
			columns: [
				table.column({
					header: 'Age',
					cell: EditableCellLabel,
					accessor: 'age'
				}),
				table.column({
					header: 'Status',
					cell: EditableCellLabel,
					id: 'status',
					accessor: (item) => item.status
				}),
				table.column({
					header: 'Visits',
					cell: EditableCellLabel,
					accessor: 'visits'
				}),
				table.column({
					header: 'Profile Progress',
					cell: EditableCellLabel,
					accessor: 'progress'
				})
			]
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns);
</script>

<div class="overflow-x-auto">
	<table {...$tableAttrs} class="demo">
		<thead>
			{#each $headerRows as headerRow (headerRow.id)}
				<Subscribe attrs={headerRow.attrs()} let:attrs>
					<tr {...attrs}>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<th {...attrs}>
									<div>
										<Render of={cell.render()} />
									</div>
								</th>
							</Subscribe>
						{/each}
					</tr>
				</Subscribe>
			{/each}
		</thead>
		<tbody {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe attrs={row.attrs()} let:attrs>
					<tr {...attrs}>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<td {...attrs}>
									<Render of={cell.render()} />
								</td>
							</Subscribe>
						{/each}
					</tr>
				</Subscribe>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		border-spacing: 0;
		border-top: 1px solid black;
		border-left: 1px solid black;
	}
	th,
	td {
		border-bottom: 1px solid black;
		border-right: 1px solid black;
		padding: 0.5rem;
	}
</style>
