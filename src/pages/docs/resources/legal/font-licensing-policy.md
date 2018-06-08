---
title: "Font Licensing Policy"
description: "Liferay's recommendations and legal guidelines for using fonts."
layout: "guide"
weight: 1
---

# Why we care about licenses

Copyright is automatic and any work of authorship is automatically protected by it. In order to have the rights to use any work – be that code, text, images or other media – we need to have a license for it.

Because – unless we hold the copyright[^work_for_hire] in the work itself – the only thing granting us the rights to use and modify a work is a license, we need to make sure that the license is appropriately referred to in the work.

Several licenses also have additional requirements that have to be met, which this document helps to make easier.

[^work_for_hire]:

  A typical example of works where Liferay holds copyright in are works that Liferay employees are paid to create in their work time.

<!--
> A) just needs most basic compliance (i.e. copyright statement and license
> text, source code²)
> B) need to provide some more compliance info due to specifics of the
> license
> (i.e. list modifications, more notices, source code² etc.)
> C) needs more thought depending on how we technically use it (i.e. depends
> on
> different linking, distribution, etc.; may need involvement of Legal)
> D) needs active approval from Legal on a case-by-case basis
> E) in general not compatible with our standard business and development
> model,
> but you can ask Legal if an exception can be made
---
> 2       It is a good question whether we consider making sure that we make
> the
> source code to the used component more work for us or just something that
> we
> take for granted and for all components anyway.
-->

<!--
# Code

NOT approved (at least for Liferay Portal/DXP):

 - GPL
 - AGPL
 -->

# Fonts

**Note:** these guidelines do _not_ cover the use case where the fonts are _changed or modified by us_ – in case you want to change the fonts, file an Inbound Licensing ticket to the FOSS project in JIRA: \
<https://issues.liferay.com/browse/FOSS>

License Ease of compliance Details

---

_CC-BY-NC-1.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-2.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-2.5_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-3.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-4.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-ND-1.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-ND-2.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-ND-2.5_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-ND-3.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-ND-4.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-SA-1.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-SA-2.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-SA-2.5_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-SA-3.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-NC-SA-4.0_ not allowed [see “not allowed” chapter](#font_no)
_CC-BY-ND-1.0_ _ [see “legal approval” chapter](#font_approval)
*CC-BY-ND-2.0* _ [see “legal approval” chapter](#font_approval)
_CC-BY-ND-2.5_ _ [see “legal approval” chapter](#font_approval)
*CC-BY-ND-3.0* _ [see “legal approval” chapter](#font_approval)
_CC-BY-ND-4.0_ _ [see “legal approval” chapter](#font_approval)
*GPL-1.0* _ [see “legal approval” chapter](#font_approval)
_GPL-2.0_ _ [see “legal approval” chapter](#font_approval)
*GPL-3.0* _ [see “legal approval” chapter](#font_approval)
_OFL-1.0_ \* [see “legal approval” chapter](#font_approval)
_OFL-1.1_ **\* [see OFL-1.0 chapter](#OFL-1.1)
_UFL-1.0_ \*\*** [see UFL-1.0 chapter](#UFL-1.0)

## Pre-Approved font licenses

If you use fonts under these licenses, you do not need to ask Legal for special permission, as long as you comply with both the general requirements and the specific requirements of the license in question.

Should you still wish for assistance, feel free to file an Inbound Licensing ticket to the FOSS project in JIRA: \
<https://issues.liferay.com/browse/FOSS>

### OFL-1.1 – SIL Open Font License 1.1 #OFL-1.1

The [_OFL-1.1_][ofl-1.1][^ofl-1.1] is one of the most popular licenses for Open/Free fonts. It is perfectly fine to use, but should you use fonts under it, do take special note if the fonts make use of the “Reserved Font Name”, which is a special feature of the OFL.

#### Details

- copyleft – the font (or any font based on it) has to be under the same license
- (trade marks are not handled by the _OFL-1.1_)
- font must not be sold separately by itself
- the copyright notice and the licence text must be kept (but can be included either as stand-alone text files, human-readable headers or in the appropriate machine-readable metadata fields within text or binary files as long as those fields can be easily viewed by the downstream)
- if you change the font and the font’s copyright holder has declared (part of) its name as a “Reserved Font Name” (found in the copyright statement), you have to rename the changed font to something that is different from the “Reserved Font Name” (unless you get a separate written permission); this applies also to:
  - subsetting
  - web optimisation (in most cases)
  - changing the font format (in most cases, see below for the only exception)
- the license text has to retain the copyright statement (and “Reserved Font Name” statement, if any)
- the name(s) of the authors and copyright holders may not be used as endorsement of derivative work

Creating a WOFF file from the original sources is **not** considered a modification, in case:

1.  the original font data remains unchanged except for WOFF compression, and
1.  WOFF-specific metadata is either
    a. omitted altogether, or
    b. present and includes, unaltered, the contents of all equivalent metadata in the original font.

Please note that most WOFF conversion tools and online services do not meet the two requirements listed above, and so their output must be considered a Modified Version. See [OFL FAQ][ofl_faq] for more information.

[^ofl-1.1]: [SIL Open Font License 1.1][ofl-1.1]

[ofl-1.1]: https://spdx.org/licenses/OFL-1.1.html
[ofl_faq]: http://scripts.sil.org/OFL-FAQ_web

#### Example

As an example, let us say you copied the following font files from the [Montserrat typeface][montserrat], either from [its Git repository][montserrat_git] or [Google Fonts specimen page][montserrat]:

- `Montserrat-Regular.ttf`
- `Montserrat-Italic.ttf`

[montserrat]: https://fonts.google.com/specimen/Montserrat
[montserrat_git]: https://github.com/google/fonts/tree/master/ofl/montserrat

##### Find the relevant copyright and licensing information

To find this information search for the font file or typeface name on: \
<https://fonts.google.com/attribution>.

Another way is to take this information from the `copyright:` field in the `METADATA.pb` file in the the font’s directory on [Google Font’s git repository][gf_git].

In Montserrat’s case you will find that the license governing this typeface is _[SIL Open Font License 1.1][ofl-1.1]_ (or _[OFL-1.1][ofl-1.1]_ for short).

##### Store the license texts

In the root folder of the repository or package/archive where you are copying these fonts into, there should be a `LICENSES` folder. If there is none, create it.

The _OFL-1.1_ is one of the licenses where the license includes the copyright statement (and eventual “Reserved Font Names”), so you have to copy the license file that accompanied the license[^best_practice_spdx]. The easiest way to find a copy of the font’s license is to look into the Git repository of the typeface – in Montserrat’s case this would be: \
<https://github.com/google/fonts/blob/master/ofl/montserrat/>

There you will find a plain text version of the license – in Montserrat’s case this would be: \
<https://github.com/google/fonts/blob/master/ofl/montserrat/OFL.txt>

Because we are are saving a license that is different for each package (copyright statement, “Reserved Font Name”), we cannot use its canonical version’s SPDX identifier[^spdx_id] directly.

Copy that file into the `LICENSES` folder and make sure you prepend its SPDX license identifier with “LicenseRef-” and append the name of the typeface after it. E.g. in this case it would be `LICENSES/LicenseRef-OFL-1.1-Montserrat.txt`.

[^spdx_id]:

  SPDX Identifiers are the short form unique identifiers for common FOSS licenses. SPDX also standardises the long names for the licenses, making sure they are unique. For an easily searchable list of all SPDX license names and identifiers see: <https://spdx.org/licenses/>. In case a license does not have a SPDX license identifier, the SPDX specification requires that such a license’s name should start with “LicenseRef—”.

[^best_practice_spdx]:

  Usually the best practice is to copy the plain text version of the license from the [SPDX license repository][spdx_license_repo_text] to have a version that is as close to canonical version as possible. This is one of the licenses where this does not apply.

##### Store the relevant information

Store the copyright statement that you found into a new file in the same folder as the font files. To achieve that copy simply the whole line after the font’s file name.

For example, for the font file `Montserrat-Regular.ttf`, create a new file `Montserrat-Regular.ttf.license` with the following content:

```
Copyright 2011 The Montserrat Project Authors (https://github.com/JulietaUla/Montserrat)

SPDX-License-Identifier: LicenseRef-OFL-1.1-Montserrat
```

And for the font file file `Montserrat.ttf.license`, create a new file `Montserrat-Italic.ttf.license` with the following content:

```
Copyright 2011 The Montserrat Project Authors (https://github.com/JulietaUla/Montserrat)

SPDX-License-Identifier: LicenseRef-OFL-1.1-Montserrat
```

#### Special case example: Reserved Font Name

In case the copyright statement includes the wording “with Reserved Font Name”, make sure you copy that as well.

An example of that is the [Bubbler One][bubbler], where the file accompanying the `BubblerOne-Regular.ttf` font file should be named `BubblerOne-Regular.ttf.license` and have the following content:

```
Copyright (c) 2011 by Brenda Gallo (gbrenda1987@gmail.com), with Reserved Font Name "Bubbler"

SPDX-License-Identifier: LicenseRef-OFL-1.1-BubblerOne
```

[bubbler]: https://fonts.google.com/specimen/Bubbler+One

### UFL-1.0 – Ubuntu Font License 1.0 #UFL-1.0

The [UFL-1.0][ufl-1.0][^ufl-1.0] covers the [Ubuntu Font Family][ubuntu_font].

UFL-1.0 is based on _OFL-1.1_ and written as an improvement and modernisation of the _OFL-1.1_, intended as an temporary solution until a better license (e.g. a future OFL-1.2) shows up.

To this date, only the [Ubuntu Font Family is][ubuntu_font] is known to be covered by this license.

#### Details

- copyleft – the font (or any font based on it) has to be under the same license
- trade marks are explicitly not granted
- the copyright notice and the licence text must be kept (but can be included either as stand-alone text files, human-readable headers or in the appropriate machine-readable metadata fields within text or binary files as long as those fields can be easily viewed by the downstream)
- if you did not change the font, you must keep the same name of the font (e.g. “Ubuntu”)
- if you changed the font substantially (i.e. that it is easily perceived as different), you must name your new font differently in order to avoid confusion with the original font (e.g. “Looptidoop”)
- if you only slightly changed the font, you must keep the same name and append additional naming in the form of “ derivative $X” to distinguish it from the original (e.g. “Ubuntu derivative Looptidoop”)
- the name(s) of the authors and copyright holders may not be used as endorsement of derivative work

[^ufl-1.0]:

  [Ubuntu Font License 1.0][ufl-1.0] (note: UFL-1.0 is not included in the [SPDX license list][spdx_licenses] and therefore not marked with italics in this document)

[ufl-1.0]: https://www.ubuntu.com/legal/terms-and-policies/font-licence
[ubuntu_font]: https://design.ubuntu.com/font/

#### Example

As an example, let us say you copied the following font files from the [Ubuntu typeface][ubuntu], either from [its Google Font Git repository][ubuntu_git] or [Google Fonts specimen page][ubuntu]:

- `Ubuntu-Regular.ttf`

[ubuntu]: https://fonts.google.com/specimen/Ubuntu
[ubuntu_git]: https://github.com/google/fonts/tree/master/ufl/ubuntu

##### Find the relevant copyright and licensing information

To find this information search for the font file or typeface name on: \
<https://fonts.google.com/attribution>.

Another way is to take this information from the `copyright:` field in the `METADATA.pb` file in the the font’s directory on [Google Font’s git repository][gf_git].

In Ubuntu’s case you will find that the license governing this typeface is [Ubuntu Font License][ufl-1.0] (or [UFL-1.0][ufl-1.0] for short).

##### Store the license texts

In the root folder of the repository or package/archive where you are copying these fonts into, there should be a `LICENSES` folder. If there is none, create it.

The UFL-1.0 is a license that does not have a SPDX identifier yet[^spdx_id]. The easiest way to find a copy of the font’s license is to look into the Git repository of the typeface – in Montserrat’s case this would be: \
<https://github.com/google/fonts/blob/master/ufl/ubuntu/>

There you will find a plain text version of the license – in Montserrat’s case this would be: \
<https://github.com/google/fonts/blob/master/ufl/ubuntu/UFL.txt>

Copy that file into the `LICENSES` folder and since there is no SPDX identifier for UFL-1.0 yet, make sure you prepend its SPDX license identifier with “LicenseRef-”. E.g. in this case it would be `LICENSES/LicenseRef-UFL-1.0.txt`. If there is such a file already in the folder, you do not need to crate a new copy, as the license text should be identical.

##### Store the relevant information

Store the copyright statement that you found into a new file in the same folder as the font files. To achieve that copy simply the whole line after the font’s file name.

For example, for the font file `Ubuntu-Regular.ttf`, create a new file `Ubuntu-Regular.ttf.license` with the following content:

```
Copyright 2011 Canonical Ltd. Licensed under the Ubuntu Font Licence 1.0

SPDX-License-Identifier: LicenseRef-OFL-1.0
```

<!--
### Apache-2.0 – Apache License 2.0

-->

[^apache-2.0]: [Apache License 2.0][apache-2.0]

[apache-2.0]: https://spdx.org/licenses/Apache-2.0.html

<!--
### GPL …

- needs an [exception][gpl_font_exception] in order to be useful

[gpl_font_exception]: https://www.gnu.org/licenses/gpl-faq.html#FontException

### Creative Commons …

- CC-BY-SA
- CC-BY

(for ND and NC clause see below)

-->

## Font licenses in need of Legal approval #font_approval

The following font licenses are not pre-approved, for different issues they can cause. If you desperately need to use them, file an Inbound Licensing ticket to the FOSS project in JIRA: \
<https://issues.liferay.com/browse/FOSS>

- _OFL-1.0_
- GPL of any version (especially without the font exception)
- any Creative Commons licenses of any version with the **No Derivatives** clause \
  (e.g. _CC-BY-**ND**-1.0_, _CC-BY-**ND**-4.0_)

## Not allowed font licenses #font_no

The following font licenses are not allowed, due to incompatibility with either our own FOSS licenses or our business model.

- any Creative Commons licenses of any version with the **Non Commercial** clause \
  (e.g. _CC-BY-SA-**NC**-3.0_, _CC-BY-**NC**-1.0_)

## Helpful hints on popular font resources

### Google Fonts

[Google Fonts][gf_page] is a very good source of freely available and reusable fonts. In addition they make license compliance fairly easy as well.

Most of the fonts in the collection use the _SIL Open Font License 1.1_. Some fonts use the _Apache License 2.0_. The Ubuntu fonts use the Ubuntu Font License 1.0.

The [Google Fonts’ Git repository][gf_git] makes it very easy to comply with the licenses of the fonts, as all the needed info is already stored and neatly organised in the [repository][gf_git]:

- all fonts that are under the [_OFL-1.1_][ofl-1.1][^ofl-1.1] license are stored in the `ofl/` directory
- all fonts that are under the [_Apache-2.0_][apache-2.0][^apache-2.0] license are stored in the `apache/` directory
- all fonts that are under the [UFL-1.0][][^ufl-1.0] license – basically just the [Ubuntu Font Family][ubuntu_font] – are stored in the `ufl/` directory

[gf_page]: https://fonts.google.com
[gf_git]: https://github.com/google/fonts
[gf_licensing]: https://github.com/google/fonts#licensing
[gf_attribution]: https://fonts.google.com/attribution

Google Fonts stores the license and copyright information (including any OFL “Reserved Font Name”) on a website listing all typefaces and their font files: \
<https://fonts.google.com/attribution>.

Another way is to take this information from the `copyright:` field in the `METADATA.pb` file in the the font’s directory on [Google Font’s git repository][gf_git]. In Montserrat’s case this would be: \
<https://github.com/google/fonts/blob/master/ofl/montserrat/METADATA.pb>

[spdx_licenses]: https://spdx.org/licenses/
[spdx_license_repo_text]: https://github.com/spdx/license-list-data/tree/master/text
