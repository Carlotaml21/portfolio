<?xml version="1.0" encoding="UTF-8"?>
<!--
  legacy-to-canonical.xsl
  Case 02 — Order Orchestration

  Maps the legacy order envelope to a clean canonical <Order>.
  Routing downstream only depends on this canonical shape, never on the
  legacy structure.
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
  <xsl:strip-space elements="*"/>

  <xsl:template match="/">
    <Order>
      <OrderId>
        <xsl:value-of select="//LegacyOrder/HEADER/ORDER_ID"/>
      </OrderId>

      <!-- Normalize region code to upper-case EU / US / ROW -->
      <Region>
        <xsl:variable name="raw" select="translate(//LegacyOrder/HEADER/REGION_CODE,
          'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')"/>
        <xsl:choose>
          <xsl:when test="$raw = 'EU' or $raw = 'EUR'">EU</xsl:when>
          <xsl:when test="$raw = 'US' or $raw = 'USA'">US</xsl:when>
          <xsl:otherwise>ROW</xsl:otherwise>
        </xsl:choose>
      </Region>

      <Customer>
        <Id><xsl:value-of select="//LegacyOrder/HEADER/CUSTOMER/CUST_ID"/></Id>
        <Name><xsl:value-of select="//LegacyOrder/HEADER/CUSTOMER/CUST_NAME"/></Name>
      </Customer>

      <Lines>
        <xsl:for-each select="//LegacyOrder/ITEMS/ITEM">
          <Line>
            <Sku><xsl:value-of select="MATERIAL"/></Sku>
            <Quantity><xsl:value-of select="QTY"/></Quantity>
            <UnitPrice><xsl:value-of select="PRICE"/></UnitPrice>
          </Line>
        </xsl:for-each>
      </Lines>
    </Order>
  </xsl:template>

</xsl:stylesheet>
