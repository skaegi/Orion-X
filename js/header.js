/* ================================================================================
 * @license
 * Copyright (c) 2012, 2011 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *     Zachariah Moreno
 *     John J Barton
 *     John Arthorne
 *     Ken Walker
 *     jQuery
 *     Twitter Bootstrap
================================================================================ */

$(window).load(function() {
	$('.dropdown-toggle').dropdown();
});

$(window).load(function() {
	$("a.fancybox").fancybox({
		'hideOnContentClick': true,
		'showCloseButton'   : true,
		'transitionIn'      : 'elastic',
		'transitionOut'     : 'elastic',
		'speedIn'           : 600,
		'speedOut'          : 200,
		'overlayColor'      : '#fff'
	});
	
	$("a.iframe").fancybox({
		'hideOnContentClick': true,
		'showCloseButton'   : true,
		'transitionIn'      : 'elastic',
		'transitionOut'     : 'elastic',
		'speedIn'           : 600,
		'speedOut'          : 200,
		'overlayColor'      : '#fff'
	});
});
