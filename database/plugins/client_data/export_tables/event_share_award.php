<?php


	$export_table = array(
		'table' 			=> 'events_share_awards',
		'export_order' 		=> ' ORDER BY `require_times` ASC',
		'exclude_columns'	=> array(
			'id',
		),
	);

	export_table($export_table);

?>